window.onload = function() {};

function testEventFunc(e) {
    e.preventDefault();
    console.log('Vi Du Ham Nay de submit');
}

// function printEventOfKeyboard(e) {
//   var tr = document.createElement('tr');
//   // '<td>'+e.target.value+'</td>' //Noi chuoi theo cu phap cu ES5

//   // Cu phap ben duoi goi la string literal ES6

//   // Cach 1 dua deleteRow thanh callback cua onclick trong button tag
//   tr.innerHTML = `<td>${e.target.value}</td>
//          <td>${e.target.value}</td>
//        <td>${e.target.value}</td>
//       <td>
//        <button class="btn btn-danger" onclick="deleteRow(event)" style="display:none">x</button>
//       <button class="btn btn-warning editRowBtn">Edit</button>
//     <button class="btn btn-danger deleteRowBtn">x</button>
// </td>`;

//   var tBody = document.getElementById('tbodyToWrite');
//   tBody.append(tr);
//   document.getElementById("fulllname").value = ""

//   // Cach 2 add event listener click vao tung button xoa
//   var delBtnArr = document.getElementsByClassName('deleteRowBtn');
//   console.log(delBtnArr);

//   for (btn of delBtnArr) {
//     // btn.addEventListener('click', deleteRow);
//     btn.onclick = deleteRow;

//     // Note: Cu phap Jquery
//     // $(btn).on('click', deleteRow);
//     // $(document).on('click', '.deleteRowBtn', deleteRow) // Dung cai nay moi dung tinh than cua jQuery
//     // $(btn).click(deleteRow);
//   }

//   // Demo cach bat su kien khi bam phim Enter - 13
//   // if (e.which == 13) {
//   //     // var btnSubmit = document.getElementById('btnSubmit');
//   //     // btnSubmit.click();
//   //     console.log(e)
//   //     var form = document.getElementById('frmSubmit');
//   //     var emailInput = form.querySelector("input[placeholder='Enter Dia chi'");
//   //     emailInput.focus();

//   //     console.log(emailInput)
//   // }
// }

function AddData(e) {
    let name = document.getElementById("fullname").value;
    let phone = document.getElementById("phone-number").value;
    let address = document.getElementById("address").value;

    let tbodyToWrite = document.getElementById('tbodyToWrite');

    let row = document.createElement('tr');
    tr.innerHTML = `<td>${e.target.value}</td>
           <td>${e.target.value}</td>
           <td>${e.target.value}</td>
           <td>
             <button class="btn btn-danger" onclick="deleteRow(event)" style="display:none">x</button>
             <button class="btn btn-warning editRowBtn">Edit</button>
             <button class="btn btn-danger deleteRowBtn">x</button>
           </td>`;
    tbodyToWrite.appendChild(row);
    document.getElementById("frmSubmit").reset();
}

function deleteRow(e) {
    var eventEl = e.target;
    var parent2 = eventEl.parentNode.parentNode;
    parent2.remove();
}