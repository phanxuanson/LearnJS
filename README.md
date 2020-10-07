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
