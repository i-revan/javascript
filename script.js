var submit = document.querySelector("button");
var nameInput = document.querySelector("#name");
var surname = document.querySelector("#surname");
var age = document.querySelector("#age");
var mail = document.querySelector("#email");
var tbody = document.querySelector("tbody");
var genderList = document.getElementsByName("gender");
submit.addEventListener("click", function () {
  var gender;
  for (let index = 0; index < genderList.length; index++) {
    if (genderList[index].checked) {
      gender = genderList[index].value;
      genderList[index].checked = false;
    }
  }
  if (
    nameInput.value.trim() != "" &&
    surname.value.trim() != "" &&
    age.value != "" &&
    mail.value.trim() != "" &&
    gender != undefined
  ) {
    tbody.innerHTML += `<tr>
    <td>${nameInput.value}</td>
    <td>${surname.value}</td>
    <td>${age.value}</td>
    <td>${gender}</td>
    <td>${mail.value}</td>
    </tr>`;
  }
  nameInput.value = "";
  surname.value = "";
  age.value = "";
  mail.value = "";
});
