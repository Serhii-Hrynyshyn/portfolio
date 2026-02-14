let formCheckboxIsCHECK = document.querySelector('.form-checkbox');
let inputNameParam = document.querySelector('.student-name');
let inputEmailParam = document.querySelector('.teacher-email');

//turn ON/OFF input fields into checkbox
formCheckboxIsCHECK.addEventListener('click', function () {

    if (formCheckboxIsCHECK.checked) {
        inputNameParam.disabled = true;
        inputEmailParam.disabled = true;
    }
    else {
        inputNameParam.disabled = false;
        inputEmailParam.disabled = false;
    }

})


let menuOptions = document.querySelectorAll('a');

menuOptions.forEach(element => {

    element.addEventListener('click', function () {
        let taskType = element.className;
        var nameOfFile;
        if (formCheckboxIsCHECK.checked) {
            inputNameParam.disabled = true;
            let getNameParam = inputNameParam.value;
            let getEmailParam = inputEmailParam.value;
           
            nameOfFile = `./tasks.html?taskType=${taskType}&name=${getNameParam}&email=${getEmailParam}`;
        } else {
            nameOfFile = `./tasks.html?taskType=${taskType}`;
        }
        
        window.open(`${nameOfFile}`, "_blank");

    })
});


 function eleven() {
    alert('11');
}