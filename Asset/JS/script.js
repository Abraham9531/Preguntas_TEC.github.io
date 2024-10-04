

let Preguntas = readtext("Asset/JS/Preguntas.json")
let interprete_bp = JSON.parse(Preguntas)
let Pregunta
let posibles_Respuestas
let btn_correspondiente=[
	select_id("btn1"),
	select_id("btn2"),	
	select_id("btn3"),
	select_id("btn4")
	]

Aleatorio()

function Aleatorio(){

	escogerPregunta(Math.floor(Math.random()*interprete_bp.length));

}

function escogerPregunta(n){

	Pregunta = interprete_bp[n]
	select_id("Categoria").innerHTML = Pregunta.categoria
	select_id("Pregunta").innerHTML = Pregunta.pregunta
	select_id("Imagen").setAttribute("src", Pregunta.imagen)
	style("Imagen").objectFit = Pregunta.objectFit;
	desordenarRespuestas(Pregunta)
	if (Pregunta.imagen) {
		style("Imagen").height="200px"
	}else{
		style("Imagen").height="0px"
	}

}

let btns = [
	select_id("btn1"),
	select_id("btn2"),	
	select_id("btn3"),
	select_id("btn4")
	]

function desordenarRespuestas(Pregunta){
	posibles_Respuestas = [
		Pregunta.respuesta,
		Pregunta.incorrecta1,
		Pregunta.incorrecta2,
		Pregunta.incorrecta3
		];
	posibles_Respuestas.sort(()=>Math.random()-0.5)
	select_id("btn1").innerHTML = posibles_Respuestas[0]
	select_id("btn2").innerHTML = posibles_Respuestas[1]
	select_id("btn3").innerHTML = posibles_Respuestas[2]
	select_id("btn4").innerHTML = posibles_Respuestas[3]

}

function oprimir_btn(i){

	if (posibles_Respuestas[i] == Pregunta.respuesta) {

		btn_correspondiente[i].style.background="lightgreen";
	}else{
		btn_correspondiente[i].style.background="pink";
	}
	setTimeout(() => {
		reiniciar()
	}, 3000);

}

function reiniciar(){
	for (const btn of btn_correspondiente) {
		btn.style.background = "";
	}
	Aleatorio()
}

function select_id(id){
	return document.getElementById(id)
}

function style(id){
	return select_id(id).style
}

function readtext(ruta_local){

	var texto = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", ruta_local, false);
	xmlhttp.send();
	if (xmlhttp.status == 200) {
		texto = xmlhttp.responseText;
	}
	return texto;

}