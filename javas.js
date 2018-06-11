var haslo = new Array(101);
haslo[0] = "Wolnoć Tomku w swoim domku";
haslo[1] = "Bez pracy nie ma kołaczy";
haslo[2] = "Być albo nie być";
haslo[3] = "Jak trwoga to do Boga";
haslo[4] = "Znać się jak łyse konie"; 
haslo[5] = "Informatyka wciąga";
haslo[6] = "Matematyka jest jak kurz";
haslo[7] = "Gdyby kózka nie skakała";
haslo[8] = "Głodnemu chleb na myśli"; 
haslo[9] = "Pierwsze koty za płoty"; 
haslo[10] = "Głupi ma zawsze szczęście"; 
haslo[11] = "Co dwie głowy to nie jedna";
haslo[12] = "Cicha woda brzegi rwie";
haslo[13] = "Cnota naukę przechodzi";
haslo[14] = "Metoda na głoda";
haslo[15] = "Gdzie drwa rąbią tam wióry lecą";
haslo[16] = "Fortuna kołem się toczy";
haslo[17] = "Apetyt rośnie w miarę jedzenia";
haslo[18] = "Biednemu zawsze wiatr w oczy";
haslo[19] = "Pracowity jak pszczoła";
haslo[20] = "Cisza jak makiem zasiał";
haslo[21] = "Co dwie głowy to nie jedna";
haslo[22] = "Co kraj to obyczaj";
haslo[23] = "Co ma piernik do wiatraka";
haslo[24] = "Idzie luty podkuj buty";
haslo[25] = "Jaka praca taka płaca";
haslo[26] = "Jak kamień w wodę";
haslo[27] = "Jak Kuba Bogu tak Bóg Kubie";
haslo[28] = "Komu w drogę temu czas";
haslo[29] = "Kto pierwszy ten lepszy";
haslo[30] = "Kto się czubi ten się lubi";
haslo[31] = "Kuj żelazo póki gorące";
haslo[32] = "Leje jak z cebra";
haslo[33] = "Lepszy rydz niż nic";
haslo[34] = "Mądry polak po szkodzie";
haslo[35] = "Nie dolewaj oliwy do ognia";
haslo[36] = "Pieniądze szczęścia nie dają";
haslo[37] = "Pierwsze koty za płoty";
haslo[38] = "Prawda w oczy kole";
haslo[39] = "Pod latarnią najciemniej";
haslo[40] = "Strach ma wielkie oczy";
haslo[41] = "Strzeżonego Pan Bóg strzeże";
haslo[42] = "Szukajcie a znajdziecie";
haslo[43] = "Mieć kuku na muniu";
haslo[44] = "W marcu jak w garncu";
haslo[45] = "Trafić z deszczu pod rynnę";
haslo[46] = "Raz na wozie raz pod wozem";
haslo[47] = "Wyszło szydło z worka";
haslo[48] = "W zdrowym ciele zdrowy duch";
haslo[49] = "Szukać igły w stogu siana";
haslo[50] = "Kupić kota w worku";
haslo[51] = "Niedaleko pada jabłko od jabloni";
haslo[52] = "Zapomniał wół jak cielęciem był";
haslo[53] = "Patrzy jak cielę na malowane wrota";
haslo[54] = "Baba z wozu koniom lżej";
haslo[55] = "I wilk syty i owca cała";
haslo[56] = "Trafiło się ślepej kurze ziarno";
haslo[57] = "Dzieci i ryby głosu nie mają";
haslo[58] = "Głową muru nie przebijesz";
haslo[59] = "Kłamstwo ma krótkie nogi";
haslo[60] = "Kruk krukowi oka nie wykole";
haslo[61] = "Co z oczu to z serca";
haslo[62] = "Czas leczy rany";
haslo[63] = "Czas to pieniądz";
haslo[64] = "Gniew jest złym doradcą";
haslo[65] = "Potrzeba jest matką wynalazków";
haslo[66] = "Co nagle to po diable";
haslo[67] = "Gdzie diabeł nie może tam babę pośle";
haslo[68] = "Potrzebny jak dziura w moście";
haslo[69] = "Każdy kij ma dwa końce";
haslo[70] = "Zamienił stryjek siekierę na kijek";
haslo[71] = "Kto mieczem wojuje od miecza ginie";
haslo[72] = "Nie wywołuj wilka z lasu";
haslo[73] = "Polak węgier dwa bratanki";
haslo[74] = "Pieniądze nie śmierdzą";
haslo[75] = "Szewc bez butów chodzi";
haslo[76] = "Nie porywaj się z motyką na slońcę";
haslo[77] = "Wybiera się jak sójka za morze";
haslo[78] = "Uderz w stół a nożyce się odezwą";
haslo[79] = "Ten się smieje kto się śmieje ostatni";
haslo[80] = "Do wesela się zagoi";
haslo[81] = "Przyjdzie kryska na matyska";
haslo[82] = "Co się odwlecze to nie uciecze";
haslo[83] = "Być kulą u nogi";
haslo[84] = "Cisza jak makiem zasiał";
haslo[85] = "Co kraj to obyczaj";
haslo[86] = "Jak cię widzą tak cię piszą";
haslo[87] = "Kto pierwszy ten lepszy";
haslo[88] = "Ni z gruszki ni z pietruszki";
haslo[89] = "Kupić kota w worku";
haslo[90] = "Nie wszystko złoto co się świeci";
haslo[91] = "Wszędzie dobrze ale w domu najlepiej";
haslo[92] = "Lato zarobi zima zje";
haslo[93] = "Cudza praca nie wzbogaca";
haslo[94] = "Żadna praca nie hańbi";
haslo[95] = "Na jesieni świat się mieni";
haslo[96] = "Od wódki rozum krótki";
haslo[97] = "Kto pyta nie błądzi";
haslo[98] = "Słuchaj starszego a unikniesz złego";
haslo[99] = "Kwiecień plecień";
haslo[100] = "Poznasz głupiego po śmiechu jego";
haslo[101] = "Z górki na pazórki";

var los = 0;															// zmienna odpowiedzialna za losowanie hasla
var haslo1 = "";													// zmienna "czyszczaca" mi haslo
var dlugosc = 0;													// zmienna wskazujaca na dlugosc hasla
var ile_skuch = 0;													// zmienna liczaca skuchy
var runda = 1;														// zmienna wskazujaca na ilosc rozegranych rund
var punkty = 0;													// zmienna licząca punkty 
var ile_dobrych = 0;												// zmienna liczaca prawidlowe litery podane przez gracza
var ile = 0;

//Dzwieki do odpowiednich ruchow w grze
var yes = new Audio("okej.mp3");							// dzwiek na dobrze dobrana literke 				
var no = new Audio("zle.mp3");							// dzwiek na zle dobrana literke
var win = new Audio("wygrana.mp3");					// dziek na wygrana wygrana rozgrywke
var lose = new Audio("przegrana.mp3");				// dzwiek na przegrana rozgrywke 
var end = new Audio("koniec.mp3");						// dzwiek na konieck rozgrywki 

// zmienne do zmiany w zaleznosci od ochoty grajacego 
var etap_gry = 1;					// ile chcesz zagrac rund
var punkty_plus = 1;				// punkty za odgadnieta litere
var punkty_minus = 1;			// punkty za zle podana litere
var nagroda = 15;				// nagroda punktowa za wygrana
var kara = 10;						// kara punktowa za przegrana

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
	var tresc_diva = "";					// dokladnie to diva "alfabet"
	los = Math.floor(Math.random()*101);	// zmienna los dostaje pseudolosowa wartosc od zera do 101
	haslo[los]= haslo[los].toUpperCase();		// zamiana liter w hasle na wielkie - UpperCase
	dlugosc = haslo[los].length;				// zmiennej dlugosc przypisuje dlugosc hasla
	document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" />';
	document.getElementById('przebieg').innerHTML = "Ilość punktów: "+punkty+"&nbsp&nbsp&nbspEtap gry:"+runda+"/"+etap_gry;		// wypisanie na dole etapu gry i ilosci punktow
	
	for(i=0; i<dlugosc; i++){			
		if(haslo[los].charAt(i) == " ") haslo1 = haslo1 + " ";			// prowizorycznie, badam kazdy znak hasla po kolei i jezeli jest przerwa pomiedzy slowami to dodaje przerwe
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
	ile++;
	return this.substr(0, miejsce) + znak + this.substr(miejsce+1);	// ta funkcja zwraca mi ciag znakow w moim hasle ktory widze na ekranie na podciąg znakow (substr) poczawszy od zerowej literki do miejsca w ktorym wystepuje trafiona literka (czyli mojego "i" w funkcji sprawdz.. nastepnie doklejam znak - czyli literke - moje litery[nr] w funkcji sprawdz a na koniec musze dopisac reszte hasla1 tyle że muszę już zacząć od mojego miejsca gdzie przerwałem o jeden większego 
}

function sprawdz(nr){
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++){	
		if (haslo[los].charAt(i) == litery[nr]) // jezeli trafilem litere czyli jezeli znak z mojego hasla wystepuje w mojej latblicy liter o podanym parametrze "nr" ktory podalem na onclick to:
		{
			haslo1 = haslo1.ustawZnak(i, litery[nr]);	// wyglad mojego hasla na ekranie zamieni sie w to samo haslo ale dodatkowo jeszcze zmieni je funkcja typu object.prototype, która otrzymuje dwa parametry (numer litery w hasle poczawszy od poczatku, kliknieta litera)
			trafiona = true;		// jezeli trafilem literke to ustawiam moja flage trafiona na wartosc "prawda"
		}
	}
	
	if(trafiona == true){		// w zaleznosci od tego czy trafilem literke mam odpowiedni jej wyglad 
		ile_dobrych++;
		punkty = punkty + punkty_plus;
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		
		document.getElementById(element).setAttribute("onclick", ";");		// funkcja "wyłączająca" mi atrybut onclick przy wybranej juz literce by nie naliczac lub odejmowac niepotrzebnie punkty przy ponownym jej kliknięciu 
		wypisz_haslo();
		if(haslo[los] != haslo1)					// dzieki temu unikne ponownego dzwieku przy wygranej (ostatnia literka wywola muzyke na wygrana rozgrywke
			yes.play();
	}
	else{
		punkty = punkty - punkty_minus;
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";
		
		document.getElementById(element).setAttribute("onclick", ";");
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';		// na kazda skuche wyswietla sie odpowiedni fragment wisielca
		if(ile_skuch <9)								// podobnie jak w warunku na trafiona litekre powyzej
			no.play();
	}
	document.getElementById('przebieg').innerHTML = "Ilość punktów: "+punkty+"&nbsp&nbsp&nbspEtap gry:"+runda+"/"+etap_gry;
	
	
	//wygrana
	if (haslo[los] == haslo1)
	{
		ile_dobrych = 0;
		win.play();
		runda++;
		punkty = punkty + nagroda;
		ile_skuch = 0;
		document.getElementById("alfabet").innerHTML  = "Hura!<br/>Podano prawidłowe hasło:<br/>"+haslo[los]+'<br/><br/><span class="reset" onclick="start()">NOWE HASŁO!</span>';
		if(runda > etap_gry){
			document.getElementById('alfabet').innerHTML = "Hura!<br/> Podano prawidłowe hasło: <br/>"+haslo[los]+'<br/><br/><span class="reset" onclick="koniec()">PODSUMOWANIE</span>';
		}
	}
	
	//przegrana
	if(ile_skuch >= 9)
	{
		ile_dobrych = 0;
		lose.play();
		runda++;
		punkty = punkty - kara;
		ile_skuch = 0;
		document.getElementById("alfabet").innerHTML  = "Przegrana!<br/>Prawidłowe hasło to:<br/>"+haslo[los]+'<br/><br/><span class="reset" onclick="start()">NOWE HASŁO!</span>';
		if(runda > etap_gry){
			document.getElementById('alfabet').innerHTML = "Przegrana!<br/>Prawidłowe hasło to: <br/>"+haslo[los]+'<br/><br/><span class="reset" onclick="koniec()">PODSUMOWANIE</span>';
		}
	}
}

function koniec(){
	end.play();
	document.getElementById('pojemnik').innerHTML = '<br/><br/><br/><br/><br/><span class="koniec">Koniec gry</span><br/><br/> Twoje punkty:<br/><span class="punkty">'+punkty+'</span><br/><br/><span class="reset" onclick="location.reload()">ZAGRAJ PONOWNIE</span>';
	document.getElementById('przebieg').innerHTML = "";
}