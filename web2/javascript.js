function set2fig(num) {
    var ret;
    if (num < 10) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function showClock2() {
    var nowTime = new Date();
    var thisMonth = set2fig(nowTime.getMonth()+1);
    var today = set2fig(nowTime.getDate());
    var nowHour = set2fig(nowTime.getHours());
    var nowMin = set2fig(nowTime.getMinutes());
    var nowSec = set2fig(nowTime.getSeconds());
    var dayOfWeek = nowTime.getDay();
    var dayOfWeekStr = ["(Sun) ", "(Mon) ", "(Tue) ", "(Wed) ", "(Thu) ", "(Fri) ", "(Sat) "][dayOfWeek];
    var msg = "現在時刻は" + thisMonth + "/" + today + "\u0020" + dayOfWeekStr + nowHour + "：" + nowMin + "：" + nowSec + "です";
    document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showClock2()', 100);
