exports.dateMod = (date) => {
    console.log('this is the date', date);
    date = new Date(date);
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    var hour = date.getHours().toString();
    hour = hour.length > 1 ? hour : '0' + hour;

    var minute = date.getMinutes().toString();
    minute = minute.length > 1 ? minute : '0' + minute;

    var second = date.getSeconds().toString();
    second = second.length > 1 ? second : '0' + second;

    return month + '/' + day + '/' + year + ' ' + hour + ':' + minute + ':' + second;
}