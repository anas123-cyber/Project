const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";


const dropdowns = document.querySelectorAll(".dropdown select");

const button = document.querySelector("button");

const fromCurr = document.querySelector(".from select ");

const toCurr = document.querySelector(".to select ");

let msg = document.querySelector(".msg");


for(let select of dropdowns){
    for(currencyCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        select.append(newOption);//yaha pe sare country jo country list me hai unko option(select ka option) me convert kiya aur add kardiya select me.
        if(select.name === "from" && currencyCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currencyCode === "INR") {
            newOption.selected = "selected";
        }
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {//updateFlag is called with select element as argument.
    //inside updateflag it accesses the value of the selected option using element.value and stores it inside currencyCode.
    let currencyCode = element.value;
    console.log(currencyCode);
    //jaise change hoga uska country wo country ka currencycode print ho jayega.

    let countryCode = countryList[currencyCode];//INR: IN , EUR: EU.
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;//agar IN hoga to india ka image de dega ,US raha to to USA ka de dega image.
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}



button.addEventListener("click", async (evt) => {
    evt.preventDefault();//removes the default submission property of the form.

    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1; 
        amount.value = "1";
    }

    // console.log(fromCurr.value.toLowerCase(),toCurr.value.toLowerCase());
    const URL = `${BASE_URL}/${fromCurr.value}_${toCurr.value}.json`;//this gives the value in uppercase convert into lower case so that the API works.
    //fetch the data from API i.e reciever the exchanged data from API
    console.log(URL);

    let response = await fetch(URL);
    
    let data = await response.json();
    console.log(data);
    let rate = data.rate;

    console.log(data.rate);

    let finalVal = (amtVal/rate).toFixed(2);
    console.log(finalVal);

    msg.innerText = `${amtVal} ${data.fromCurrency} = ${finalVal} ${data.toCurrency}`;
});