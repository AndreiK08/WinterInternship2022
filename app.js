// Form Validation without the "required" field inside input element
console.log("All good");

// Elements Check Values
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const addressOne = document.getElementById('addressOne');
const addressTwo = document.getElementById('addressTwo');
const city = document.getElementById('city');
const zip = document.getElementById('zip');
const phone = document.getElementById('phone');
const email = document.getElementById('email');




form.addEventListener('submit', (e) => {
    
    console.log("Data will be stored in new window");
    // first Name
    if(firstName.value === '' || firstName.value == null)  {
        // console.log("Empty values");
        firstName.classList.add('error');
        e.preventDefault();
    } else {
        // console.log("Ok values");
        firstName.classList.add('success');
    }
    // last Name
    if(lastName.value === '' || lastName.value == null)  {
        lastName.classList.add('error');
        e.preventDefault();
    } else {
        lastName.classList.add('success');
    }
    // address One
    if(addressOne.value === '' || addressOne.value == null)  {
        addressOne.classList.add('error');
        e.preventDefault();
    } else {
        addressOne.classList.add('success');
    }
    // address Two
    if(addressTwo.value === '' || addressTwo.value == null)  {
        addressTwo.classList.add('error');
        e.preventDefault();
    } else {
        addressTwo.classList.add('success');
    }
    // city
    if(city.value === '' || city.value == null)  {
        city.classList.add('error');
        e.preventDefault();
    } else {
        city.classList.add('success');
    }
    // zip
    if(zip.value === '' || zip.value == null)  {
        zip.classList.add('error');
        e.preventDefault();
    } else {
        zip.classList.add('success');
    }
    // phone
    if(phone.value === '' || phone.value == null)  {
        phone.classList.add('error');
        e.preventDefault();
    } else {
        phone.classList.add('success');
    }
    // email
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ;
    if(email.value === '' || email.value == null || !email.value.match(validRegex))  {
        email.classList.add('error');
        e.preventDefault();
    } else {
        email.classList.add('success');
    }

 
})



// *** Buttons action *****
// Join Us btn opens div - page Two (Form)
function openPageTwo() {
    var x = document.getElementById("pageTwo");
    var y = document.getElementById("pageOne");
    console.log('ok');
    if (x.style.display = 'none'){
        x.style.display = "flex";
        y.style.display = "none";
    }   else {
        x.style.display = "none";
        y.style.display = "flex";
    }



}


// Logo on click opens div - page one
// function openPageOne();



// open page three and print form Data btn??!