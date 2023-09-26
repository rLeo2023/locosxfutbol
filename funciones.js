var preguntas = [];

var opciones1 = [];
var opciones2 = [];
var opciones3 = [];

var correctas = [];

preguntas[0] = "¿En que año nació Leo Messi?";
preguntas[1] = "¿En que año Inglaterra gano un mundial?";
preguntas[2] = "¿Cual es la seleccion que mas finales jugó?";
preguntas[3] = "¿Que jugador disputo mas partidos en la Copa del Mundo?";
preguntas[4] = "¿En que año Diego Maradona hizo el gol del siglo?";
preguntas[5] = "¿Cual es la Seleccion Con Mas Mundiales?"
preguntas[6] = "¿Que jugador es el unico que tiene el Super Balon De Oro?"
preguntas[7] = "¿Cual es el jugador con mas Balones De Oro?"
preguntas[8] = "¿Que jugador es el unico en hacer 3 goles en una final del mundo?"
preguntas[9] = "¿Cual fue el partido con mas espectadoresen la historia de los mundiales?"
preguntas[10] = "¿Quien es el segundo jugador mas joven en jugar un mundial?"

opciones1[0] = "1987";
opciones1[1] = "1966";
opciones1[2] = "Italia";
opciones1[3] = "Lothar Mattaus";
opciones1[4] = "1978";
opciones1[5] = "Alemania"
opciones1[6] = "Di Stefano"
opciones1[7] = "Cristiano Ronaldo"
opciones1[8] = "Pele"
opciones1[9] = "2014 Final Argentina vs Alemania"
opciones1[10] = "Pele"

opciones2[0] = "1986";
opciones2[1] = "1958";
opciones2[2] = "Brasil";
opciones2[3] = "Miroslav Klose";
opciones2[4] = "1986";
opciones2[5] = "Italia"
opciones2[6] = "Diego Maradona"
opciones2[7] = "Messi"
opciones2[8] = "Geoff Hurst"
opciones2[9] = "2010 Final España vs Holanda"
opciones2[10] = "Pablo Gavi"


opciones3[0] = "1988";
opciones3[1] = "1970";
opciones3[2] = "Alemania";
opciones3[3] = "Paolo Maldini";
opciones3[4] = "1990";
opciones3[5] = "Brasil"
opciones3[6] = "Pele"
opciones3[7] = "Michel Platini"
opciones3[8] = "George Best"
opciones3[9] = "1950 Uru vs Bra"
opciones3[10] = "Youssoufa Moukoko"

correctas[0] = "1987";
correctas[1] = "1966";
correctas[2] = "Alemania";
correctas[3] = "Lothar Mattaus";
correctas[4] = "1986";
correctas[5] = "Brasil"
correctas[6] = "Di Stefano"
correctas[7] = "Messi"
correctas[8] = "Geoff Hurst"
correctas[9] = "1950 Uru vs Bra"
correctas[10] = "Youssoufa Moukoko"


/*DIVISION*/


var inicio = `
<h1 id="quiz">¿Estas listo para comenzar el Quiz de Futbol?</h1>
<img id="fulbo" src="img/4.gif" alt=""><br>
<button onclick="cargar(pregunta)">Comenzar</button><br>

`;
var pregunta =`
<section id="preguntas">
<h2>Primera pregunta</h2>

</section>
<section id="opciones">
<button id="opcion1" onclick="evaluar(this.innerHTML)">opcion 1</button>
<button id="opcion2" onclick="evaluar(this.innerHTML)">opcion 2</button>
<button id="opcion3" onclick="evaluar(this.innerHTML)">opcion 3</button>

`;

var info = `
    <h3 id="intro">Introduccion:</h3>
    <br>
    <h4 id="inf">
    Esta aplicacion esta basada en el famoso juego "Preguntados", 
    El objetivo consiste en responder 10 preguntas acerca de la historia del futbol en el menor tiempo posible.
    Creadores: Martin y Benja. <br>
    <br>
    Version 0.90 (Beta) <br> Reversion Año 2023 (OG. NOV 2022)</h4>
    <br>
    <img id="imag" src="img/img1 (1).jpeg" alt="">
`;

var puntos = `
    <h2>Resultado final</h2>
    <br>
    <p id="hol">Correctas:</p> <p id="aciertos"></p>
    <p id="hol">Incorrectas:</p> <p id="fallos"></p>
    <img id="image" src="img/img5.png" alt="">

`;

var npregunta = 0;
var aciertos = 0;
var fallos = 0;


function cargar(contenido){
    document.getElementById("principal").innerHTML = contenido;
    
    if(contenido == pregunta){
        mostrarPregunta();

    }


}

function mostrarPregunta(){

    document.getElementById("preguntas").innerHTML = preguntas[npregunta];
    document.getElementById("opcion1").innerHTML = opciones1[npregunta];
    document.getElementById("opcion2").innerHTML = opciones2[npregunta];
    document.getElementById("opcion3").innerHTML = opciones3[npregunta];

}

function evaluar(opcion){
    if(opcion == correctas[npregunta]){
    alert("correcto");
    aciertos = aciertos + 1;
    }else{
        alert("incorrecto");
        fallos = fallos + 1;
    }

    npregunta = npregunta + 1;

    if(npregunta == 11){
        cargar(puntos);
        document.getElementById("aciertos").innerHTML = aciertos;
        document.getElementById("fallos").innerHTML = fallos;
        reiniciarVariables();
    }else{
        cargar(pregunta);
    }
}
function reiniciarVariables(){
    npregunta = 0;
    aciertos = 0;
    fallos = 0;
}
const button = document.querySelector("button");
