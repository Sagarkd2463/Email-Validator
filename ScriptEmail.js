//parameters derived from email validation api stored in result 
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "sagarkd",
    "email": "deshpandesagar187@gmail.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

//getting all the refernces
const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");

//an event listener on submit button 
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`;
    let email = document.getElementById("username").value;
    let api_key = "ema_live_Or8oB9pUbLw7ARcjtXRMTNikmw9c4nAsgitNFdlo";
    //sending request to api for fetching data of email entered by user
    let api_url = `https://api.emailvalidation.io/v1/info?apikey=${api_key}&email=${email}`; 

    let res = await fetch(api_url);
    let result = await res.json();
    let str = ``;

    for(let key of Object.keys(result)) { //input field should not be empty to get api results 
        if(result[key] !== "" && result[key] !== " ") {
            str = str + `<div> ${key} : ${result[key]}</div>`;
        }
    }
    resultCont.innerHTML = str; 
});



