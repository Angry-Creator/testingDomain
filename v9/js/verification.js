const residentVerficationSelection = document.getElementById("template-application-resident-verification");
residentVerficationSelection.addEventListener("change", () => {
    const selectedValue = residentVerficationSelection.value;
    const idMeEmail = document.getElementById("ID.ME_email");
    const idMePassword = document.getElementById("ID.ME_password");
    const utilityBill = document.getElementById("utility_bill");
    const mortgageLetter = document.getElementById("mortgage_letter");
    if (selectedValue === "ID.ME") {
        utilityBill.style.display = "none";
        mortgageLetter.style.display = "none";
        idMeEmail.style.display = "block";
        idMePassword.style.display = "block";
    } else if (selectedValue == "Utility Bill") {
        idMeEmail.style.display = "none";
        idMePassword.style.display = "none";
        mortgageLetter.style.display = "none";
        utilityBill.style.display = "block";
    } else if (selectedValue == "Mortgage Letter") {
        idMeEmail.style.display = "none";
        idMePassword.style.display = "none";
        utilityBill.style.display = "none";
        mortgageLetter.style.display = "block";
    }
});


//Submition of the form
const all_forms = document.getElementsByTagName("form");
for (let i = 0; i < 2; i++) {
    // console.log(formValues);
}

// const fileReader = new FileReader();
// fileReader.onload = function () {
//     const fileData = fileReader.result;
//     const modifiedFile = new Blob([fileData], { type: fileInput.type });

//     // Create a new file with the modified name
//     const modifiedFileWithNewName = new File([modifiedFile], newFileName, { type: fileInput.type });

//     console.log(modifiedFileWithNewName);

//     // You can now perform operations with the modified file, such as uploading it to a server or saving it locally.
// };

// fileReader.readAsArrayBuffer(fileInput);


// fetch('/upload', {
//     method: 'POST',
//     body: formData
// })
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//["template-application-driver-license-back"]
//["template-application-driver-license-front"]
//["template-application-mortgage-letter"]
//["template-application-utility-bill"]



const formData = new FormData(all_forms[1]);
const formValues = Object.fromEntries(formData.entries());
const driverLicenseBack = formData.get("template-application-driver-license-back");
const driverLicenseFront = formData.get("template-application-driver-license-front");
const mortagegeLetter = formData.get("template-application-mortgage-letter");
const utilityBill = formData.get("template-application-utility-bill");
console.log(!driverLicenseBack);
console.log(!driverLicenseFront);
console.log(!mortagegeLetter);
console.log(!utilityBill);

const submitBtn = document.getElementById("btn2");
all_forms[1].addEventListener("submit", () => submitDetails());

function submitDetails() {
    alert("Done!");
}