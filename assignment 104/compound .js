function calculateCompoundInterest() {

    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);
    var frequency = parseFloat(document.getElementById('frequency').value);


    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency)) {
        document.getElementById('result').innerText = 'Please enter valid numbers';
        return;
    }

    var amount = principal * Math.pow((1 + (rate / (frequency * 100))), frequency * time);
    var interest = amount - principal;

    document.getElementById('result').innerText = 'The compound interest is: ' + interest.toFixed(2);
}