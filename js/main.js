function calculator() {
    const DARABÁR = 1000;
    let adatok = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let darab = parseInt(adatok.value);
    if (isNaN(darab))
        darab = 0; 
    limit(DARABÁR,darab,showAmount);
}

function hazhozszallitas(total) {
    const SZALLITAS = 500;
    const MINIMUM = 5000;
    if (total < MINIMUM)
    {
        total += SZALLITAS; 
        alert(SZALLITAS+"Ft szállítási díjat felszámoltunk, hiszen "+ MINIMUM +" Ft alatt vásárolt!");
    }
    console.log(total);
    return total;
}

function limit(DARABÁR,darab,showAmount) {
    if (darab < 1)
    {
        alert("Minimum 1 hamburgert kell rendelnie!");
        return;
    }
    else if (darab > 10)
    {
        alert("Maximum 10 hamburgert rendelhet!");
    }
    else 
    {
        let total = darab * DARABÁR;
        showAmount.innerHTML = hazhozszallitas(total);
    }
}
