function calculateSimpleInterest() {

    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);


    var interest = (principal * rate * time) / 100;


    document.getElementById('result').innerText = 'Result: ' + interest;
}