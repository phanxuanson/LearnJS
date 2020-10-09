var a = 'a';

function func1() {
	var b = 'b';
	function func2() {
		var c = 'c';
		console.log(a, b, c, d);
	}
	func2();
	func3();
}

function func3() {
	var d = 'd';
	console.log(a, b, c, d);
}

func1();
