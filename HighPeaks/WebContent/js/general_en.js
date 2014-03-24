function espanol(){
	document.location.href='index.html';
	
}

function ingles(){
	document.location.href='index_en.html';
	
}

function verFoto(ruta,titulo){
	window.open(ruta,titulo,'width=600,height=455,scrollbars=no,toolbar=no,location=no,statusbar=no,menubar=no,resizable=yes');
}	

function escribirMenu(){
	
	var ie = (document.all) ? true:false
	var n6 = (document.getElementById) ? true:false
	
	var texto = '<ul>  	<li><a href="http://highpeaks.es/index_en.html" title="Home"><span>Home</span></a></li>'
 +' <li><a href="http://highpeaks.es/en/espana.html" title="Hunting in Spain"><span>Hunting in Spain</span></a></li>'
 +' <li><a href="http://highpeaks.es/en/polonia.html" title="Hunting in Poland"><span>Poland</span></a></li>'
 +' <li><a href="http://highpeaks.es/en/rusia.html" title="Hunting in Russia"><span>Russia</span></a></li>'
 +' <li><a href="http://highpeaks.es/en/asia.html" title="Hunting in Asia"><span>Asia</span></a></li>'
 +' <li><a href="http://highpeaks.es/en/africa.html" title="Hunting in Africa"><span>Africa</span></a></li>'
 +' </ul>'
 
 
	if (ie == true) {
		//IE 4+
		document.all.tabsJ.innerHTML = texto
	}else if(n6 == true) {
		//NS 6
		document.getElementById("tabsJ").innerHTML = texto
	} 
	
	
}

function escribirCabecera(){
	
	var ie = (document.all) ? true:false
	var n6 = (document.getElementById) ? true:false
	
	var texto = '<div id="cabecera">'
		+' <div id="titulo"> <table> <tr>'
		+' <th><h2>High Peaks</h2></th>'
		+' <th><img alt="High Peaks" src="../imagenes/logomini.gif"></th>'
		+' </tr></table></div>'
		+' <div id="banderas"> <table> <tr>'
		+' <th>&nbsp; &nbsp;</th> <th>&nbsp; &nbsp;</th> <th>&nbsp; &nbsp;</th> <th>&nbsp; &nbsp;</th>'
		+' <th><a href="http://highpeaks.es/index.html"><img alt="Español" src="../imagenes/spain.gif"></a></th>'
		+' <th><a href="http://highpeaks.es/index_en.html"><img alt="English" src="../imagenes/uk.gif"></a></th>'
		+' </tr> </table> </div>'
 
 
	if (ie == true) {
		//IE 4+
		document.all.cabecera.innerHTML = texto
	}else if(n6 == true) {
		//NS 6
		document.getElementById("cabecera").innerHTML = texto
	} 
		
}

function escribirContacto(){
	
	var ie = (document.all) ? true:false
	var n6 = (document.getElementById) ? true:false
	
	var texto = '<b>Contact us</b><br>'
		+' phone: 607198550 <br>'
		+' fax: 983549167<br>'
		+' e-mail: <a href="mailto:jesus@highpeaks.es" title="Send information">jesus@highpeaks.es</a><br>'
 
 
	if (ie == true) {
		//IE 4+
		document.all.contacto.innerHTML = texto
	}else if(n6 == true) {
		//NS 6
		document.getElementById("contacto").innerHTML = texto
	} 
	
	
}