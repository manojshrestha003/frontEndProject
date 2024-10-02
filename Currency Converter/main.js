
 const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

 const dropdown = document.querySelectorAll('.drop-down select');

 for(let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerHTML= currCode;
        newOption.value = currCode;
        select.append(newOption);
    }
 }
 

 
