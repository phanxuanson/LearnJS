window.onload = function() {};

function testEventFunc(e) {
	e.preventDefault();
	console.log('Vi Du Ham Nay de submit');
}

function isInputEmpty(inputName, inputValue) {
	if (inputValue.length < 1) {
		alert('Truong ' + inputName + ' rong!');
		return true;
	}
	return false;
}

function AddData(e) {
	let name = document.getElementById('fullname').value;
	let phone = document.getElementById('phone-number').value;
	let address = document.getElementById('address').value;

	 if (name.length < 2 || phone.length < 2 || address.length < 2) {
	 alert('nhap ten day du');
	   return false;
	 }
	
	var inputArr = document.getElementsByTagName('input');

	// Kiem tra du lieu co hay khong
	var className = document.getElementsByClassName('fullname' + '-error');
	console.log(className);
	className[0].className = 'fullname-error error';
	className[0].className = 'fullname-error error';
	className[0].className = 'fullname-error error';

	// Duyet qua mang chua input element
	// Kiem tra input element co thoa man dieu kien validate
	// Co thi continue
	// Khong thi tao the span hoac insert html vao the span loi ung voi tung input (khai bao truoc trong filie html)
	// validate: email dung dinh dang, nhap so, khong de trong, phone phai tu 9 10 ky tu
	for (input of inputArr) {
		if (input.getAttribute('type') == 'button') {
			break;
		}
		if (isInputEmpty(input.getAttribute('name'), input.value)) {
			// return;
			continue; // tiep tuc vong lap tiep theo
			// input, i
		}
	}

	let tbodyToWrite = document.getElementById('tbodyToWrite');

	let row = document.createElement('tr');
	row.innerHTML = `<td>${name}</td>
           <td>${phone}</td>
           <td>${address}</td>
           <td>
             <button class="btn btn-danger" onclick="deleteRow(event)" style="display:none">x</button>
             <button class="btn btn-warning editRowBtn" onclick="onEdit(this)">Edit</button>
             <button class="btn btn-danger deleteRowBtn">x</button>
           </td>`;

	// Cho ni la add dong moi vo
	tbodyToWrite.appendChild(row);
	document.getElementById('frmSubmit').reset();

	var deleteElHTMLColl = document.getElementsByClassName('deleteRowBtn');
	for (row of deleteElHTMLColl) {
		row.onclick = deleteRow;
	}
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	currentEditEl = selectedRow;
	document.getElementById('fullname').value = selectedRow.cells[0].innerHTML;
	document.getElementById('phone-number').value = selectedRow.cells[1].innerHTML;
	document.getElementById('address').value = selectedRow.cells[2].innerHTML;

	// Lay cai add button va hide di
	var btnAdd = document.getElementById('btnAdd');
	btnAdd.setAttribute('style', 'display: none');
	
	// Tao cai nut confirm roi add vao truoc nut btnCancel

	var confirmBtn = document.createElement('input');
	confirmBtn.className = 'btn btn-success btn-block';

	// confirmBtn.setAttribute('onclick', 'onConfirmEdit(this)');
	confirmBtn.addEventListener('click', onConfirmEdit);
	confirmBtn.setAttribute('type', 'button');
	confirmBtn.value = 'Confirm';
	
	btnAdd.parentNode.insertBefore(confirmBtn, document.getElementById('btnCancel') );
	;

}

var currentEditEl;

function onConfirmEdit(event) {
	var confirmBtn = event.target;
	// confirmBtn.previousElementSibling.setAttribute('style', 'display: block');
	confirmBtn.remove();
	document.getElementById('btnAdd').setAttribute('style', 'display: block');
	console.log(currentEditEl);
	
	// lay gia tri thay doi cua form input -> ghi vao currentEditEl
	currentEditEl.cells[0].innerHTML = document.getElementById('fullname').value;
	currentEditEl.cells[1].innerHTML = document.getElementById('phone-number').value;
	currentEditEl.cells[2].innerHTML = document.getElementById('address').value;

	// location.reload();

}

function deleteRow(e) {
	console.log(e);
	var eventEl = e.target;
	var parent2 = eventEl.parentNode.parentNode;
	parent2.remove();
}
