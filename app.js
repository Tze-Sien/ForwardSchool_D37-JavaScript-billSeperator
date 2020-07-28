let amount          = document.getElementById('amount');
let billTotal       = document.getElementById('billTotal');
let peopleAmount    = document.getElementById('peopleAmount');
let giveTip         = document.getElementById('giveTip');
let close           = document.getElementById('close');
let tipForm         = document.getElementById('tipForm');
let percentOrAmount = document.getElementById('percentOrAmount');
let payByPercent    = document.getElementById('payByPercent');
let payByAmount     = document.getElementById('payByAmount');
let computeBtn      = document.getElementById('computeBtn');
let resetBtn        = document.getElementById('resetBtn');
let validations     = document.getElementById('validations');

// Display tipForm
giveTip.onclick = () => {
    tipForm.setAttribute('class', 'display');
    close.setAttribute('class', 'display');
}

// Hide tipForm
close.onclick = () => {
    tipForm.setAttribute('class', 'none');
    close.setAttribute('class', 'none');
}

// tipForm - byPercent or Amount
percentOrAmount.onchange = ( event ) => {
    if( event.target.value == "percentage" ) {
        payByPercent.setAttribute('class', 'display');
        payByAmount.setAttribute('class', 'none');
    }else {
        payByPercent.setAttribute('class', 'none');
        payByAmount.setAttribute('class', 'display');
    }
}

// reset function
const reset = (name) => {
    name.value = "";
}

// reset implementation
resetBtn.onclick = () => {
    reset(amount);
    reset(billTotal);
    reset(peopleAmount);
    reset(payByPercent);
    reset(payByAmount);
}

// calculations
computeBtn.onclick = () => {
    // validations
    if( billTotal.value.trim().length == 0 ){
        validations.innerText = "Please enter Total";
    } else if ( peopleAmount.value.trim().length == 0 || parseInt(peopleAmount.value) < 1 ) {
        validations.innerText = "Please enter the right people amount";
    } else {
        validations.innerText = "";
    }

    // Calculations
    if(percentOrAmount.value.length == 0) {
        let totalUp = parseInt(billTotal.value) / parseInt(peopleAmount.value);
        amount.innerText = `RM ${totalUp}`;
    }else if( percentOrAmount.value == "percentage" ) {
        if(payByPercent.value.trim().length == 0) {
            validations.innerText = "Please Enter the Tips percentage!";
        }else{
            validations.innerText = "";
            let percentage = 100 + parseInt(payByPercent.value)
            let afterPercent = ( parseInt(billTotal.value) * percentage ) / 100;
            let totalUp = afterPercent / parseInt(peopleAmount.value);
            amount.innerText = `RM ${totalUp}`;
        }
    } else if ( percentOrAmount.value == "amount" ) {
        if(payByAmount.value.trim().length == 0) {
            validations.innerText = "Please Enter the Tips Amount!";
        }else{
            validations.innerText = "";
            let afterAmount = parseInt(billTotal.value) + parseInt(payByAmount.value);
            let totalUp = afterAmount / parseInt(peopleAmount.value);
            amount.innerText = `RM ${totalUp}`;
        }
    }
}


