function set2fig(num) {
    // ������1����������擪��0��������2���ɒ�������
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
    var msg = "���ݎ����� " + thisMonth + "/" + today + " " + dayOfWeekStr + nowHour + "�F" + nowMin + "�F" + nowSec + " �ł�";
    document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showClock2()', 100);