# JS Note

## 1. DOM basic

<https://www.w3schools.com/js/js_htmldom.asp>

1.1 The script dat o tren head va o body

```js
<script src="index.js"></script>
```

1.2. Su dung window.onload

1.3. Phan biet HTMLCollection va Array
Cac ham getElements... thi se tra ve loai HTMLCollection
Rieng ham document.getEleementById thi se tra ve 1 element

1.4. Thao tac voi 1 doi tuong trong DOM

Properties va methods cua 1 element object trong DOM (JS)

<https://www.w3schools.com/jsref/dom_obj_all.asp>

1.5. Element va NOde trong JS

Element la 1 DOM Obj bat dau bang <>
Node la 1 DOM Obj <> hoac la text node
Text cung la 1 node

1.6. Exercise:

Building a +-*/ with 2 inputs

## Day 02 Dealing with the function

2.1. Prevent Default

2.2. Faulty Truth Truthy Truth

"" NaN null undefined -> convert qua boolean la false

2.3. Cach dung return

Khi cau lenh js gap return -> se thoat khoi cau lenh (quit function

2.4. Cach khai bao function va su dung window.onload

```js
function onMinus() {
 window.event.preventDefault();
 var input1 = parseFloat(document.getElementById('input1').value);
 var input2 = parseFloat(document.getElementById('input2').value);
 var output = document.getElementById('output');
 output.innerText = input1 - input2;
 console.log(input1, input2);
}
```

2.5. 1 so luu y ve data type cua JS

- Ep kieu
  - '1' + 1 -> '11'
  - parseInt('1') + 1 -> 2

2.6. Luu y ve function

Cac ham khong co return thi se tra ve undefined
Khi gap tu khoa return thi ham se dung lai khong thuc thi nua

1 ham thi chi nen tu 15 -> 20 (10 -> 15) dong code
1 ham chi thuc hien 1 chuc nang nhat dinh (ko lam nhieu viec
Dat ten ham phai co y nghia va the hien dung chuc nang ma ham do xu ly

<https://www.w3schools.com/js/js_functions.asp>

** Cach dat ten ham: 2 cach (Naming Function Convention)

- Camel Case: onAddDefaultFunction
- C#: OnAddDefFunction
- SQL: on_add_def_func

2.7. Xu ly merge conflict

- git pull ve de biet merge conflict o dau
- nhung file bi conflict thi hien mau tim (C)
- click vao nhung file do ->
  - Accept Current Change: Giu thay doi cua minh
    - Accept Incomming Change: Lay thay doi tu remote
    - Accept Both Change: Giu ca 2 thay doi
- Xu ly xogn thi bam (+) de stage change lai
- git add .
- git commit -m "ten commit"
- git push

2.8. Khi bi refusing to merge unrelated histories

```bash
git pull --allow-unrelated-histories
```

## Day 3: Scope + Scope Chain + Object + Prototype Chain

### 1. Scope
Là phạm vi mà chương trình nhìn thấy 1 biến.

### 2. Scope Chain
Khi chương trình không tìm thấy 1 biến trong execution context hiện tại thì nó sẽ tìm ở môi trường ngoài nó (ra function bên ngoài, hoặc ra global context)

![Scope Chain](./imgs/scope-chain.PNG)

### 3. Object
#### 3.1. Định nghĩa
Tất cả trong javascript đều là object (trừ kiểu dữ liệu nguyên thủy string, number)
Do đó function cũng là obj nên mới khai báo kiểu function lồng trong function được. Ví dụ thế này:

```js
function func1() {
	var b = 'b';
	function func2() {
		var c = 'c';
		console.log(a, b, c, d);
	}
	func2();
}
```

#### 3.2. Cách khai báo Object trong JS
Có 2 cách khai báo trong ES5 (ES6 có thêm 1 cách nữa)

C1. Object Literals

```js
var Cho = {
  chan: 4,
  chay: function() {
    console.log('Cho Chay!')
  }
}
```

C2. Khai báo bằng Constructor Function

```js
function Cho() {
	this.chan = 4;
	// this.chay = function() {
	// 	console.log('cho chay!');
	// };
}
```

>*** Note: - Khi khai báo bằng Constructor Function thì sẽ sử dụng được prototype để thực hiện kế thừa trong JS
>
>```js
>Cho.prototype.sua = function() {console.log('Gau Gau')}
>```
>
>          - Khi khai báo hàm trong prototype kiểu này thì sẽ tiết kiệm bộ nhớ lưu trữ vì 1 hàm này sẽ sử dụng chung cho tất cả instance được khởi tạo bởi object này.
>          - Giả sử tạo 10.000 instances bằng new Cho() thì chỉ có 1 hàm sua() thôi nếu dùng prototype. Còn nếu tạo bằng Object literals xong rồi dùng Object.create(Cho) thì cũng có thể tạo được 10.000 instances nhưng hàm chay() khai báo trong đó sẽ bị nhân lên 10k lần -> tốn dung lượng lưu trữ.

#### 3.3. Sử dụng prototype để kế thừa và Prototype Chain trong JS

Cách kế thừa 1 lớp khác sử dụng prototype

```js
function ChoVN () {
  var mauLong = 'vang'
}

ChoVN.prototype = new Cho();

var thor = new ChoVN()
```

Khi kế thừa bằng cách này thì lớp ChoVN sẽ kế thừa thuộc tính và phương thức từ lớp Cho.

Khi đó nếu thor.chan để lấy thuộc tính chan thì chương trình sẽ tìm theo 1 cái gọi là Prototype Chain để truy ngược các lớp cha tìm xem có thuộc tính đó ko.

![Prototype Chain](./imgs/prototype_chain.png)

**BÀI VỀ NHÀ***

Làm 1 form input nhận vào giá trị trường, khoa, tên sinh viên, tuổi sinh viên. Khi nhập xong bấm submit thì bên table sẽ hiển thị đủ 4 trường thông tin + 1 cột số thứ tự.

Gợi ý: Sử dụng biến toàn cục để lưu mảng sinh viên. Khi submit form thì lưu giá trị dạng obj vào mảng này rồi có hàm thêm 1 dòng mới vào table hiện tại.