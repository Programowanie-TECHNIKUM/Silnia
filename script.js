/*
Tutaj mozesz pisac swoj wspanialy program :)
Przypominam aby sprawdzic czy wszystko dziala nalezy kliknac kombinacje CTRL + Shift + I i wejsc w konsole :)

Milej zabawy <3
*/

zablokowanie = 30

function clear() {
    document.getElementById("mnozenie").innerHTML = ``
    document.getElementById("silnia").innerHTML = ``;
}


function hunek(){
    var szymon = Number(document.getElementsByName("liczba")[0].value);
if(szymon <= zablokowanie) {

    if(!isNaN(szymon) && szymon && szymon !='0' && szymon !='1' && szymon !='2') {
        document.getElementById("podanaliczba").innerHTML = `Wpisales liczbe: ${szymon}`;

        var i = 1;
        var silnia = 1;
        while (i <= szymon) silnia *= i++;

        if(silnia == 'Infinity') {
            document.getElementById("podanaliczba").style.color = "red"
            document.getElementById("silnia").innerHTML = `LICZBA JEST ZA DUZA! (infinity)`;
           clear()
        } else {
            document.getElementById("silnia").innerHTML = `${szymon}! = ${silnia}`;
            mnozenie();
        }

    

    } else {
        clear();
        document.getElementById("podanaliczba").style.color = "red"
        document.getElementById("podanaliczba").innerHTML = `BLAD SPRÓBUJ PONOWNIE!`;
    }

} else {
    clear();
    document.getElementById("podanaliczba").style.color = "red"
    document.getElementById("podanaliczba").innerHTML = `LICZBA JEST ZA DUZA! Wpisz mniejsza liczbe`;
}
}

function mnozenie(){
    var szymon = Number(document.getElementsByName("liczba")[0].value);

    var matematyka = Array.from({length: szymon}, (_, i) => i + 1)
    
    document.getElementById("mnozenie").innerText = `Razem trzeba pomnozyc liczby ${matematyka}`;

}