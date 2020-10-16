function Cho() {
	this.chan = 4;
	this.chay = function() {
		console.log('cho chay!');
	};
}

Cho.prototype.sua = function() {
	console.log('Gau Gau');
};

function ChoVN() {
	this.mauLong = 'Vang';
}

ChoVN.prototype = new Cho();

function ChoVNLongNgan() {
	this.doDaiLong = 'Ngan';
}

ChoVNLongNgan.prototype = new ChoVN();

var loki = new ChoVNLongNgan();

loki.sua();


// dog new 

