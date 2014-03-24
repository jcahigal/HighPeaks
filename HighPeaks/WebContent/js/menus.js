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
	var texto = "<p>Cuenta con años de expereincia en"
 +" la caza del corzo en Polonia.</p>	<br>		<p>Cac"
 +"ería de jabalies en grupo</p><p>Rececho de biso"
 +"nte europeo y venado.</p>	<br>"
		
 +"<p>A continuaci&oacute;n se pueden ver algunos de los"
 +" trofeos conseguidos:</p>"

	cambiarTexto(texto);
	var texto2= "<br> <img src=\"imagenes/polonia/mini1.jpg\" align=\"middle\">"
 +"<br> <img src=\"imagenes/polonia/mini2.gif\" align=\"middle\">"
 +"<br> <img src=\"imagenes/polonia/mini3.jpg\" align=\"middle\">"
}

function aEspana() {
	var texto = "<p>Monterias de venado, gamo y jabal"
 +"i.</p> <p>Rececho de cabra hispanica, arrui, reb"
 +"eco, mufl&oacute;n y venado.</p>	<p>Caza menor: p"
 +"erdices y conejos al salto y ojeos de perdiz.</p>"
 +"		<br>"

	cambiarTexto(texto);
	
}

function aRusia() {
	var texto = "<p>Urogallos y gallos lira</p>		<p>"
 +"Oso pardo y oso grizlee.</p>		<p>Carneros de monta"
 +"ña y lobo.</p>		<br>"

	cambiarTexto(texto);
	
}

function aAsia() {
	var texto = "<p>Marco polo e ibex.</p>		<br>"
 
	cambiarTexto(texto);
	
}

function aAfrica() {
	var texto = "<p>Caza en floresta: bongo, elefante"
 +", sitatunga, duikers, etc.</p>		<p>Caza en sabana"
 +"s: los 5 grandes (leon, leopardo, bufalo cafre, el"
 +"efante y rinoceronte) y hasta veinte variedades de"
 +" antilopes.</p>		<br>"
 
	cambiarTexto(texto);
	
}



