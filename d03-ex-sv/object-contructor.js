var Cho = function(chan, mauLong) {
    this.chan = chan;
    this.mauLong = mauLong;
}
Cho.prototype.suaFunc = function() {console.log('Gau Gau')}
var loki = new Cho();
var ChoVN = function(xoay) {
    this.xoay = xoay;
}
ChoVN.prototype = new Cho();
var thor = new ChoVN();
ChoVN.prototype.batChuot = function(){console.log('Tui bik bat chuot')}
var ChoDaNang = function(diachi) {
    this.diachi = diachi;
}
ChoDaNang.prototype = new ChoVN():