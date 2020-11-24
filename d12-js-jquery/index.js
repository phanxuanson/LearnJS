window.onload = function () {
  let inputFullNameRef = document.getElementById("fullName");
  let inputAddressRef = document.getElementById("address");
  let btnSubmitID = document.getElementById("submitBtn");

  console.log(btnSubmitID);

  btnSubmitID.onclick = function () {
    let inputFNVal = inputFullNameRef.value;
    let inputAddressVal = inputAddressRef.value;
    console.log(inputFNVal, inputAddressVal);
  };
  btnSubmitID.addEventListener("click", function () {
    handleSubmitClick(inputFullNameRef.value, inputAddressRef.value);
  });
  btnSubmitID.removeEventListener;
};
