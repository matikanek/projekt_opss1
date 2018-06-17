function wypisz_haslo(){
	document.getElementById("plansza").innerHTML = haslo1;		// funkcja wypisujaca aktualny stan hasla 
}

window.onload = start;


function start(){
	ile = 0
	haslo1 = "";													// robie "cls" w divie plansza
	var tresc_diva = "";										
	los = Math.floor(Math.random()*101);			
	haslo[los]= haslo[los].toUpperCase();				// wielkie litery
	dlugosc = haslo[los].length;							// dlugosc hasla
	document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" />';
	document.getElementById('przebieg').innerHTML = "Ilość punktów: "+punkty+"&nbsp&nbsp&nbspEtap gry:"+runda+"/"+etap_gry;		// stan gry
	
	for(i=0; i<dlugosc; i++){			
		if(haslo[los].charAt(i) == " ") haslo1 = haslo1 + " ";			// badanie znaku
		else haslo1 = haslo1 + "-";												// kamuflaż hasla
	}
	
	for(i=0; i<35; i++){
		var element = "lit"+i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';		// nadanie id literom
		if((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'													// przejscie co 7
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;		// wyswietlenie na ekran
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	ile++;
	return this.substr(0, miejsce) + znak + this.substr(miejsce+1);	// pisanie hasla po kawalku 
}

function sprawdz(nr){
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++){	
		if (haslo[los].charAt(i) == litery[nr]) 					// sprawdzenie czy litera jest w hasle
		{
			haslo1 = haslo1.ustawZnak(i, litery[nr]);		// wywolanie zmiany wygladu hasla
			trafiona = true;											// flaga
		}
	}
	
	if(trafiona == true){
		ile_dobrych++;
		punkty = punkty + punkty_plus;
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		
		document.getElementById(element).setAttribute("onclick", ";");		// wyłaczam onclicka
		wypisz_haslo();
		if(haslo[los] != haslo1)					// unikniecie powtorki dzwieku
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
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';		// aktualizacja obrazu
		if(ile_skuch <9)	
			no.play();
	}
	document.getElementById('przebieg').innerHTML = "Ilość punktów: "+punkty+"&nbsp&nbsp&nbspEtap gry:"+runda+"/"+etap_gry;
	
	
	//wygrana
	if (haslo[los] == haslo1)
	{
		ile = dlugosc;
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
	document.querySelector('canvas') = "";
}