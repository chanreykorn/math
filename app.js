document.getElementById('start').value = new Date().toISOString().substring(0, 10);
function date_new() {
    var time5 = (document.getElementById("start").valueAsNumber);
    var getmonth = (document.getElementById("start").valueAsDate.getMonth());
    var getday = (document.getElementById("start").valueAsDate.getDate());
    var getMonthsubstract = (getmonth) * 30;
    var getdaysubstract = (getday);
    var t = Math.abs(getMonthsubstract + getdaysubstract);
    console.log(getmonth);
    console.log(getday);
    console.log(t);
    var A = 48.9335;
    var incos = (2 * Math.PI * (t - 172)) / 365;
    var cos = Math.cos(incos);
    var C = 727.6665;
    var result = ((A * cos) + C) * 10;
    var xy = Math.floor(result);
    xy /= 10;
    var yx = Math.floor(xy / 60);
    document.getElementById("Ratanakiri").innerHTML = xy;
    document.getElementById("RatanakiriHour").innerHTML = yx;
}
