function convertHTMLCollectionToArray(collection) {
    var array = [];
    for (item of collection) {
        array.push(item);
    }
    return array;
}

window.onload = function() {
    var formSV = document.getElementById('frmSV');
    var inputs = formSV.getElementsByClassName('form-control');
    var truongId = document.getElementById('sinhvien');
    var inputsArray = convertHTMLCollectionToArray(inputs);
    // for (input of inputsArray) {
    //     if (inputsArray.includes(truongId)) {
    //         console.log(inputsArray.indexOf(truongId));
    //     }
    // }

    inputsArray.filter(function(item, i) {
        if (item === truongId) {
            console.log('Chay vao ham nay ' + i)
        }
    })

    // console.log(inputs.indexOf(truongId));
    for (input of formSV) {
        // var inputId = input.getAttribute('id');
        // console.log(input.nextElementSibling);
        // input.nextElementSibling.children[0].class = 'error';
        var parentNode = input.parentNode;
        var newErrNode = document.createElement('div');
        newErrNode.innerHTML = `<span class="truong-err">Loi roi</span>`
        parentNode.append(newErrNode)
            // input.insertAfter()
    }
    console.log(inputs);


};

function myFunction() {
    var rows = "";
    var truong = document.getElementById("truong").value;
    var khoa = document.getElementById("khoa").value;
    var ten = document.getElementById("sinhvien").value;
    var tuoi = document.getElementById("tuoi").value;
    if (truong.length > 0 && khoa.length > 0 && ten.length > 0 && tuoi.length > 0) {
        rows += "<tr><td>" + truong + "</td><td>" + khoa + "</td><td>" + ten + "</td><td>" + tuoi + "</td></tr>";
        $(rows).appendTo("#list");
        document.getElementById("truong").value = ""
        document.getElementById("khoa").value = ""
        document.getElementById("sinhvien").value = ""
        document.getElementById("tuoi").value = ""
    }
    return false;
}