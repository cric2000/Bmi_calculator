
function myFUN() {
    
    var height = Number(document.getElementById("height").value);

    var weight = Number(document.getElementById("weight").value);

    var BMI = Math.round(weight / Math.pow(height, 2) * 10000);

    if(weight<=0 || height<=0){
    alert('Invalid values');                       // after invalid value it will reset
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("Show").innerText = "....";
    document.getElementById("output").innerText="?";
    return 0;
    }
    
    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;
    

    var ans = Math.round(BMI * 100) / 100
    
    if (ans < 18.5 && ans > 0)
        document.getElementById("Show").innerText = "Underweight , start eating  but remember not to eat junk food";
    else if (ans >= 18.5 && ans <= 25)
        document.getElementById("Show").innerText = "Normal , Hey Congrats keep it up";
    else if (ans >= 25 && ans <= 30)
        document.getElementById("Show").innerText = "Overweight , not good for your health";
    else if (ans > 30 && ans <40 )
        document.getElementById("Show").innerText = "Obese , health is wealth now go and hit the gym";
    else if (ans >= 40)
        document.getElementById("Show").innerText = "Danger  !!!!  pls take care of health";
    
    
}
