// First Name Script --------------------------------
const name1 = document.querySelector("#firstName");
const textError1 = document.querySelector(".firstName-error");
name1.addEventListener("input", function () {
  let nameRegex = RegExp("[A-Z]{1}[a-z]{3}");
  if (nameRegex.test(name1.value)) {
    textError1.textContent = "";
  } else {
    textError1.textContent = "Invalid";
  }
});
// Last Name Script -----------------------------------
const name2 = document.querySelector("#lastName");
const textError2 = document.querySelector(".lastName-error");
name2.addEventListener("input", function () {
  let nameRegex = RegExp("[A-Z]{1}[a-z]+");
  if (nameRegex.test(name2.value)) {
    textError2.textContent = "";
  } else {
    textError2.textContent = "Invalid";
  }
});
//Password Script -----------------------------------------
const password1 = document.querySelector("#pass");
const textError3 = document.querySelector(".password-error");
password1.addEventListener("input", function () {
  let passwordRegex = RegExp("[A-Z]{1}[a-z]{1,}[@,#,&,*]{1}[0-9]{1,}");
  if (passwordRegex.test(password1.value)) {
    textError3.textContent = "";
  } else {
    textError3.textContent =
      "<Invalid> Requirement of Password: 1 Uppercase,1 lowercase,1 SpecialChar,length: min 8";
  }
});

//Mobile number Script -----------------------------------------
const contact = document.querySelector("#mobnum");
const textError4 = document.querySelector(".mobnum-error");
contact.addEventListener("input", function () {
  let mobNumRegex = RegExp("^(0|91)?[7-9][0-9]{9}$");
  if (mobNumRegex.test(contact.value)) {
    textError4.textContent = "";
  } else {
    textError4.textContent = "Invalid";
  }
});

//Email ID Script -----------------------------------------
const email = document.querySelector("#emailId");
const emailError = document.querySelector(".email-error");
email.addEventListener("input", function () {
  let emailIdRegex = RegExp("^[A-Z a-z 0-9]+[@][a-z]+[._-]{1,2}[a-z]{3}");
  if (emailIdRegex.test(email.value)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Invalid";
  }
});
// Salary Range Script -----------------------------------
const salary = document.querySelector("#salaryLabel");
const output = document.querySelector(".salary-output");
salaryLabel.addEventListener("input", function () {
  output.textContent = salary.value;
});

const save = () => {
  try {
    let employeeParollData = createEmployeePayroll();
  } catch (e) {
    return;
  }
};

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = getInputValueById("#name");
  } catch (e) {
    setTextValue(".firstName-errorr", e);
    throw e;
  }
  employeePayrollData.firstName = getInputElementById("[firstName]").pop();
  employeePayrollData.lastName = getInputValueById("[lastName]").pop();
  employeePayrollData.password = getInputValueById("[pass]").pop();
  employeePayrollData.mobNum = getInputValueById("[mobNum]").pop();
  employeePayrollData.salary = getInputValueById("[salaryLabel]");

  alert(employeePayrollData.toString());
  return employeePayrollData;
};

// Helper Methods ----------------------------

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let setItems = [];

  allItems.forEach(item => {
    if(item.checked) setItems.push(item.value); 
  });
return setItems;
}
const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}
//Old Feature to support older browser version-------------
const getInputElementById = (id) => {
  let value = document.getElementById(id).value;
  return value;
}