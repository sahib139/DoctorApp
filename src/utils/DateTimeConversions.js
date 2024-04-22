function getWeekdayFromDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getDay();
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