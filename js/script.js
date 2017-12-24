document.getElementById('ekran').value = "";
var ekrn = document.getElementById('ekran');

function addvalue(x){   // funkcja addvalue bierze value z kazdego inputa z ta funkcja onclick
  ekrn.value += x;
  if(x==="c"){    // dla value c #ekran kasuje wartosci
    ekrn.value = "";
  }
};

function rownasie(){  // funkcja dla =
  x = ekrn.value   // zmienna x bierze wartość aktualnie 'wyklikana' w #ekran
  x = eval(x);    // slowo kluczowe eval oblicza argument znajdujacy sie w #ekran
  ekrn.value = x; // po obliczeniu wrzucany jest wynik w #ekran
}
