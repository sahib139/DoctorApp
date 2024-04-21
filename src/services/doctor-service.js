const fs = require('fs');
const { FilePath } = require("../config/server-config");
const {DateTimeConversion,ReadingJsonFile} = require("../utils/index");

class DoctorService {

    constructor() {
        this.weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    }

    nextAvailableSlot(data, weekDayIndex, availabilityData) {
        const givenDateTime = new Date(`${data.date}T${data.time}`);
        let count = 0;
        while (true) {
            for (let TimeSlot of availabilityData[this.weekdays[weekDayIndex]]) {
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
            count++;
            weekDayIndex = (weekDayIndex + 1) % 7;
        }
    }

    async AvailabilityCheck(data) {
        try {
            
            const availabilityData = await this.ReadingJsonFile();
            const weekDayIndex = DateTimeConversion.getWeekdayFromDate(data.date);
            
            for (let TimeSlot of availabilityData[this.weekdays[weekDayIndex]]) {
                if (DateTimeConversion.isTimeBetween(TimeSlot.start, TimeSlot.end, data.time)) {
                    return { isAvailable: true };
                }
            }
            return this.nextAvailableSlot(data, weekDayIndex, availabilityData);
        } catch (error) {
            console.log(error);
            return { isAvailable: false };
        }
    }
}

module.exports = DoctorService;
