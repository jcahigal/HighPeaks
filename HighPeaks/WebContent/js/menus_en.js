//functions to show information consider the menu tabs


function cambiarTexto(texto){
	
	var ie = (document.all) ? true:false
	var n6 = (document.getElementById) ? true:false
	if (ie == true) {
		//IE 4+
		document.all.cuerpo.innerHTML = texto
	}else if(n6 == true) {
		//NS 6
		document.getElementById("cuerpo").innerHTML = texto
	} 
	
	
}

function aPolonia() {
	var texto = "<p>Highpeaks has hunting roe-deer in Poland"
 +" since lots of year.</p>	<br>		<p>"
 +"Offers hunting of wild-boar for groups</p><p>Hunting of "
 +"european bison and deer.</p>	<br>"
		
 +"<p>Now you can see several huntig trophies win in Poland:</p>"
 
	cambiarTexto(texto);
	var texto2= "<br> <img src=\"imagenes/polonia/mini1.jpg\" align=\"middle\">"
 +"<br> <img src=\"imagenes/polonia/mini2.gif\" align=\"middle\">"
 +"<br> <img src=\"imagenes/polonia/mini3.jpg\" align=\"middle\">"
	
}

function aEspana() {
	var texto = "<p>Huntig of deer, fallow-deer, "
 +"wild-boar, Hispanicas goat, arrui, reb"
 +"eco, mouflon.</p>	<p>Shooting: "
 +"partridge and rabbit in game preserves and beats of partridge.</p>"
 +"		<br>"
 cambiarTexto(texto);
	
}

function aRusia() {
	var texto = "<p>Urogallos and lira cockerel.</p>		<p>"
 +"Brown and grizlee bear.</p>		<p>Mountain rams and wolf.</p>		<br>"
 
	cambiarTexto(texto);
	
}

function aAsia() {
	var texto = "<p>Marco polo and ibex.</p>		<br>"

	cambiarTexto(texto);
	
}

function aAfrica() {
	var texto = "<p>Hunting in the rain forest: bongo, elephant"
 +", sitatunga, duikers, etc.</p>		<p>Hunting in grassland"
 +": the bigs five (lion, leopard, buffalo, "
 +"elephant and rhinoceros) and until twenty antelopes varieties.</p>		<br>"
 
	cambiarTexto(texto);
	
}



