var baseUrl = "https://5f9b85e1856f4c00168c26e6.mockapi.io";

var users = null;

$(async function () {
  // 0. Demo sử dụng XMLHttpRequest
  console.log("0. Test sử dụng XMLHttpRequest");
  getUsersUsingXMLHttpRequest();

  // 1. Demo gọi Ajax theo cách bình thường
  console.log("1. Demo gọi Ajax bình thường");
  getUserUsingAjax();

  // 2. Demo gọi Ajax sử dung Promise
  var test = await getUsersUsingPromise();
  console.log(test);

  // 3. Demo Sử dụng Ajax để lấy dữ liệu và hiển thị ra màn hình
  getUserAjax();
});

function getUsersUsingXMLHttpRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(JSON.stringify(JSON.parse(this.responseText)));
    }
  };
  xhttp.open("GET", baseUrl + "/users/1");
  xhttp.send();
}

// 1. Ajax bình thường
function getUserUsingAjax() {
  $.ajax({
    url: baseUrl + "/users",
    method: "GET",
    error: function () {
      console.log("Err");
    },
    beforeSend: function () {
      console.log("Ham goi truoc khi send ajax");
    },
    // success: function (data) {
    //   console.log("Ham goi khi success ajax");
    //   users = data;
    //   console.log(users);
    // },
  }).done(function (data) {
    console.log("Ham goi khi done");
    console.log(data);
  });

  console.log(
    $.ajax({
      url: baseUrl + "/users",
      method: "GET",
      error: function () {
        console.log("Err");
      },
      beforeSend: function () {
        console.log("Ham goi truoc khi send ajax");
      },
      // success: function (data) {
      //   console.log("Ham goi khi success ajax");
      //   users = data;
      //   console.log(users);
      // },
    })
  );
}

// 2. Ajax sử dụng Promise
function getUsersUsingPromise() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: baseUrl + "/users",
      method: "GET",
      error: function () {
        reject("Err");
      },
      beforeSend: function () {
        console.log("Ham goi truoc khi send");
      },
      success: function (data) {
        console.log("Ham goi khi success");
        resolve(data);
      },
    });
  });
}

function getUserAjax() {
  $.ajax({
    url: baseUrl + "/users",
    method: "GET",
  }).done(function (data) {
    renderTableFromAPI(data);
  });
}

function renderTableFromAPI(data) {
  for (user of data) {
    var tr = document.createElement("tr");
    var trStr = `   <th scope="row">${user.id}</th>
                          <td>${user.name}</td>
                          <td>${user.createdAt}</td>
                          <td>${user.company}</td>
                          <td>${user.department}</td>
                          <td>${user.branch}</td>
                          <td><img src='${user.avatar}'></td>`;
    $("tbody").append($(tr).html(trStr));
  }
}
