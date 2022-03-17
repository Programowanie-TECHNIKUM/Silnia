/*
Tutaj mozesz pisac swoj wspanialy program :)
Przypominam aby sprawdzic czy wszystko dziala nalezy kliknac kombinacje CTRL + Shift + I i wejsc w konsole :)

Milej zabawy <3
*/


function hunek(){
    var szymon = Number(document.getElementsByName("liczba")[0].value);

    if(!isNaN(szymon) && szymon && szymon !='0' && szymon !='1' && szymon !='2') {
        document.getElementById("podanaliczba").innerHTML = `Wpisales liczbe: ${szymon}`;

        var i = 1;
        var silnia = 1;
        while (i <= szymon) silnia *= i++;

        if(silnia == 'Infinity') {
            document.getElementById("silnia").innerHTML = `LICZBA JEST ZA DUZA!`;
            document.getElementById("mnozenie").innerHTML = ``
        } else {
            document.getElementById("silnia").innerHTML = `${szymon}! = ${silnia}`;
            mnozenie();
        }

    

    } else {
        document.getElementById("podanaliczba").innerHTML = `BLAD SPRÓBUJ PONOWNIE!`;
    }
}

function mnozenie(){
    var szymon = Number(document.getElementsByName("liczba")[0].value);

    var matematyka = Array.from({length: szymon}, (_, i) => i + 1)
    
    document.getElementById("mnozenie").innerHTML = `Razem trzeba pomnozyc liczby ${matematyka}`;

}