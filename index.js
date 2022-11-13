var clicked = false;
var sec = 0;
const pocetok = 1;
const kraj = 70;
var zelkaLokacija = 1;
var zajakLokacija = 1;
var zajak;	
var zelka;


function startClock() {
    if (clicked === false) {
        clock = setInterval("stopWatch()", 1000);
        clicked = true;
    }
    else if (clicked === true) {
    }
}

function stopWatch() {
    sec++;

    document.getElementById("timer").innerHTML = sec;
    document.getElementById("zelka").innerHTML = "Tortoise location: " + zelkaLokacija;
    document.getElementById("zajak").innerHTML = "Hare location: " + zajakLokacija;


    zajak = Math.floor(Math.random()*2 + 1);
    zelka = Math.floor(Math.random()*4 + 1);

    if(zelkaLokacija!=kraj && zajakLokacija!=kraj){
        switch(zelka){
            case 1:
                zajakLokacija += 0;
                break;
            case 2:
                zajakLokacija += 9;
                break;
            case 3:
                if(zajakLokacija!=1){
                    zajakLokacija -= 12;
                }
                break;
            case 4:
                zajakLokacija += 1;
                break;
            case 5:
                if(zajakLokacija!=1){
                    zajakLokacija -= 2;
                }
                break;
            default:
                zajakLokacija += 0;
                break;
        }
        switch(zajak){
            case 1:
                zelkaLokacija += 3;
                break;
            case 2:
                if(zelkaLokacija!=1){
                    zelkaLokacija -= 6;
                }
                break;
            case 3:
                zelkaLokacija += 1;
                break;
            default:
                zelkaLokacija += 0;
                break;
        }
    }

    if(zelkaLokacija==zajakLokacija && sec!=1){
        alert("OUCH!");
    }
    if(zelkaLokacija >= kraj){
        document.getElementById('zelka').innerText = "Tortoise won";
        clearInterval(clock);
    }
    if(zajakLokacija >= kraj){
        document.getElementById('zajak').innerText = "Hare won";
        clearInterval(clock);
}
}
