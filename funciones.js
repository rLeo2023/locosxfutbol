var preguntas = [];

var opciones1 = [];
var opciones2 = [];
var opciones3 = [];

var correctas = [];

preguntas[0] = "¿Cuando se retiro Diego Armando Maradona?";
preguntas[1] = "¿En que club debuto Cristiano Ronaldo?";
preguntas[2] = "¿A que seleccion goleo Argentina en el Mundial 78 para clasificar a la final?";
preguntas[3] = "¿Que jugador disputo mas partidos en la Copa del Mundo?";
preguntas[4] = "¿Jugador de 16 años que juegue actualmente en la primera del FC Barcelona?";
preguntas[5] = "¿Cuantas UEFA Champions League gano el AC Milan?"
preguntas[6] = "¿Que jugador es el unico que tiene el Super Balon De Oro?"
preguntas[7] = "¿En que club juega Karim Benzema?"
preguntas[8] = "¿Cual fue el resultado final del Argentina - Uruguay en el Mundial 1930?"
preguntas[9] = "¿Cual fue la cancion principal del Mundial 1998?"
preguntas[10] = "¿Messi contra el Arsenal, en la Champions del 2010-11 anoto..."
preguntas[11] = "¿Cuantos goles anoto Leo Messi durante el Mundial Qatar 2022?"
preguntas[12] = "¿Ronaldinho fue comprado por el FC Barcelona en...?"
preguntas[13] = "¿El ultimo club sudamericano en ganar el Mundial de Clubes fue...?"
preguntas[14] = "Cual de estas selecciones nunca se clasifico a un Mundial:"

opciones1[0] = "1997";
opciones1[1] = "Boavista";
opciones1[2] = "Brasil";
opciones1[3] = "Lothar Mattaus";
opciones1[4] = "Fermín López";
opciones1[5] = "5"
opciones1[6] = "Di Stefano"
opciones1[7] = "Al Ittihad"
opciones1[8] = "4-2 (ganó Uruguay)"
opciones1[9] = "La copa de la vida - Ricky Martin"
opciones1[10] = "6 goles"
opciones1[11] = "7"
opciones1[12] = "2003"
opciones1[13] = "Boca Juniors"
opciones1[14] = "Venezuela"

opciones2[0] = "2001";
opciones2[1] = "Sporting de Lisboa";
opciones2[2] = "Polonia";
opciones2[3] = "Messi";
opciones2[4] = "Lamine Yamal";
opciones2[5] = "8"
opciones2[6] = "Diego Maradona"
opciones2[7] = "Al Hilal"
opciones2[8] = "3-0 (ganó Argentina)"
opciones2[9] = "Song 2 - Blur"
opciones2[10] = "4 goles"
opciones2[11] = "9"
opciones2[12] = "2000"
opciones2[13] = "Corinthians"
opciones2[14] = "Irán"

opciones3[0] = "1995";
opciones3[1] = "Benfica";
opciones3[2] = "Perú";
opciones3[3] = "Paolo Maldini";
opciones3[4] = "Abdessamad Ezzalzouli";
opciones3[5] = "7"
opciones3[6] = "Pelé"
opciones3[7] = "Real Madrid"
opciones3[8] = "0-0 (empataron)"
opciones3[9] = "Time of our Lives - Il Divo"
opciones3[10] = "1 gol"
opciones3[11] = "5"
opciones3[12] = "2005"
opciones3[13] = "Gremio"
opciones3[14] = "El Salvador"

correctas[0] = "1997";
correctas[1] = "Sporting de Lisboa";
correctas[2] = "Perú";
correctas[3] = "Messi";
correctas[4] = "Lamine Yamal";
correctas[5] = "7"
correctas[6] = "Di Stefano"
correctas[7] = "Al Ittihad"
correctas[8] = "4-2 (ganó Uruguay)"
correctas[9] = "La copa de la vida - Ricky Martin"
correctas[10] = "4 goles"
correctas[11] = "7"
correctas[12] = "2003"
correctas[13] = "Corinthians"
correctas[14] = "Venezuela"


/*DIVISION*/


var inicio = `
<h1 id="quiz">¿Estas listo para comenzar el Quiz de Futbol?</h1>
<img id="fulbo" src="img/gol.gif" alt=""><br>
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
    <hr>
    <br>    
    <h4 id="inf">
    Este quiz se basa en el juego "Preguntados". <br>
    Acá se ponen a prueba tus conocimientos basicos de la historia del Futbol.<br>
    &copy; DEV: Martin y Benja.
    <br>
    <br>
    Version 1.0 <br> Ultima actualizacion 05/10/23 (VER. OG: NOV 2022)</h4>
    <br>
    <img id="imag" src="img/img2.jpeg" alt="">
    <style>
    body{
        background-image: url(img/bernabeu2.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    }
    </style>
`;

var puntos = `
    <h2>Resultado final</h2>
    <br>
    <hr>
    <br>
    <style>
    body{
        background-image: url(img/qatar.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-color: black;
        background-position: 50%;
        object-fit: contain;
    }
    </style>
    <p id="hol">Correctas:</p> <p id="aciertos"></p>
    <p id="hol">Incorrectas:</p> <p id="fallos"></p>
    <img id="image" src="img/campeon.gif" alt="">
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
        Swal.fire(
            'Felicidades',
            '¡Es correcto!',
            'success'
          )
    aciertos = aciertos + 1;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Ups!',
            text: '¡La respuesta fue incorrecta!',
          })
        fallos = fallos + 1;
    }

    npregunta = npregunta + 1;

    if(npregunta == 15){
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
