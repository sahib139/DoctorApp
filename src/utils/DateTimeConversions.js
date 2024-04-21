function getWeekdayFromDate(dateString) {
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);
    const weekdayIndex = date.getDay();

    return weekdayIndex;
}

function isTimeBetween(start, end, timeToCheck) {
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    const [checkHour, checkMinute] = timeToCheck.split(':').map(Number);

    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;
    const checkTimeInMinutes = checkHour * 60 + checkMinute;

    return checkTimeInMinutes >= startTimeInMinutes && checkTimeInMinutes <= endTimeInMinutes;
}

module.exports={
    getWeekdayFromDate,
    isTimeBetween,
}