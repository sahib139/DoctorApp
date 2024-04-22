const {DateTimeConversion,ReadingJsonFile} = require("../utils/index");

class DoctorService {

    constructor() {
        this.weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    }

    findNextAvailableSlot(data, weekDayIndex, availabilityData) {
        const givenDateTime = new Date(`${data.date}T${data.time}`);
        let count = 0;
        while (count < 7) {
            const dayAvailability = availabilityData[this.weekdays[weekDayIndex]];
            if (dayAvailability.length > 0) {
                for (let TimeSlot of dayAvailability) {
                    let changeDate = new Date(`${data.date}T${TimeSlot.start}`);
                    changeDate.setDate(changeDate.getDate() + count);
                    if (changeDate.getTime() >= givenDateTime.getTime()) {
                        return {
                            isAvailable: false,
                            nextAvailableSlot: {
                                date: changeDate.toISOString().split('T')[0],
                                time: TimeSlot.start
                            }
                        };
                    }
                }
            }
            count++;
            weekDayIndex = (weekDayIndex + 1) % 7;
        }
        throw new Error('Next available slot not found');
    }


    async AvailabilityCheck(data) {
        try {
            
            const availabilityData = await ReadingJsonFile();
            const weekDayIndex = DateTimeConversion.getWeekdayFromDate(data.date);
            
            for (let TimeSlot of availabilityData[this.weekdays[weekDayIndex]]) {
                if (DateTimeConversion.isTimeBetween(TimeSlot.start, TimeSlot.end, data.time)) {
                    return { isAvailable: true };
                }
            }
            return this.findNextAvailableSlot(data, weekDayIndex, availabilityData);
        } catch (error) {
            console.log(error);
            return { isAvailable: false };
        }
    }
}

module.exports = DoctorService;
