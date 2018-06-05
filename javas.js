
var haslo = "Wolnoć Tomku w swoim domku";		// tymczasowe haslo do odgadniecia
var haslo1 = "";													// zmienna "czyszczaca" mi haslo
var dlugosc = 0;													// zmienna wskazujaca na dlugosc hasla


function wypisz_haslo(){
	document.getElementById("plansza").innerHTML = haslo1;		// funkcja wypisujaca aktualny stan hasla 
}

window.onload = start;


function start(){
	haslo1 = "";								// robie "cls" w divie plansza
	haslo= haslo.toUpperCase();		// zamiana liter w hasle na wielkie - UpperCase
	dlugosc = haslo.length;				// zmiennej dlugosc przypisuje dlugosc hasla
	document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" />';
	
	for(i=0; i<dlugosc; i++){			
		if(haslo.charAt(i) == " ") haslo1 = haslo1 + " ";			// prowizorycznie, badam kazdy znak hasla po kolei i jezeli jest przerwa pomiedzy slowami to dodaje przerwe, zabieg  tzw. konkatenacji 
		else haslo1 = haslo1 + "-";										// jezeli nie ma przerw miedzy slowami to kazda litera otrzymuje znak "-"
	}
	
	wypisz_haslo();				// funkdja wypisuaca haslo, wypisuje je
}
