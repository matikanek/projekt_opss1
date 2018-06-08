
var haslo = "Wolnoć Tomku w swoim domku";		// tymczasowe haslo do odgadniecia
var haslo1 = "";													// zmienna "czyszczaca" mi haslo
var dlugosc = 0;													// zmienna wskazujaca na dlugosc hasla


function wypisz_haslo(){
	document.getElementById("plansza").innerHTML = haslo1;		// funkcja wypisujaca aktualny stan hasla 
}

window.onload = start;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

function start(){
	haslo1 = "";								// robie "cls" w divie plansza
	haslo= haslo.toUpperCase();		// zamiana liter w hasle na wielkie - UpperCase
	dlugosc = haslo.length;				// zmiennej dlugosc przypisuje dlugosc hasla
	var tresc_diva = "";					// dokladnie to diva "alfabet"
	document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" />';
	
	for(i=0; i<dlugosc; i++){			
		if(haslo.charAt(i) == " ") haslo1 = haslo1 + " ";			// prowizorycznie, badam kazdy znak hasla po kolei i jezeli jest przerwa pomiedzy slowami to dodaje przerwe
		else haslo1 = haslo1 + "-";										// jezeli nie ma przerw miedzy slowami to kazda litera otrzymuje znak "-"
	}
	
	for(i=0; i<35; i++){
		var element = "lit"+i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';		// nadaje kazdej literce id lit(i) korzystając z utwożonej klasy w css "litera"
		if((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'				// co 7 liter zaczynam wypisywac je od nowego wiersza
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;		// po zebraniu liter zmienna tresc_diva zostaje wyswietlana na ekran 
	
	wypisz_haslo();				// funkdja wypisuaca haslo, wypisuje je
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	return this.substr(0, miejsce) + znak + this.substr(miejsce+1);	// ta funkcja zwraca mi ciag znakow w moim hasle ktory widze na ekranie na podciąg znakow (substr) poczawszy od zerowej literki do miejsca w ktorym wystepuje trafiona literka (czyli mojego "i" w funkcji sprawdz.. nastepnie doklejam znak - czyli literke - moje litery[nr] w funkcji sprawdz a na koniec musze dopisac reszte hasla1 tyle że muszę już zacząć od mojego miejsca gdzie przerwałem o jeden większego 
}

function sprawdz(nr){
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++){	
		if (haslo.charAt(i) == litery[nr]) // jezeli trafilem litere czyli jezeli znak z mojego hasla wystepuje w mojej latblicy liter o podanym parametrze "nr" ktory podalem na onclick to:
		{
			haslo1 = haslo1.ustawZnak(i, litery[nr]);	// wyglad mojego hasla na ekranie zamieni sie w to samo haslo ale dodatkowo jeszcze zmieni je funkcja typu object.prototype, która otrzymuje dwa parametry (numer litery w hasle poczawszy od poczatku, kliknieta litera)
			trafiona = true;		// jezeli trafilem literke to ustawiam moja flage trafiona na wartosc "prawda"
		}
	}
	
	if(trafiona == true){		// w zaleznosci od tego czy trafilem literke mam odpowiedni jej wyglad 
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		wypisz_haslo();
	}
	else{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";
		
	}
}