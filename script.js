
const shaker = (arr,add) => {

    let num = Math.floor(Math.random()* arr.length);
    arr.splice(num,0,add);
    return arr;
}
//1. Getting data
async function getQuiz() {
    let petition = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    let rest = await petition.json()
 
    let objQuizAll = rest.results;
   
//Introducing correct answer in a random positition into incorrect_answers array.

    for (let i = 0; i < objQuizAll.length; i++) {
        //Array con todas las respuestas posibles
        //let answersAll = [objQuizAll.correct_answer, objQuizAll.incorrect_answers[0], objQuizAll.incorrect_answers[1], objQuizAll.incorrect_answers[2]];
        //splice(desde_donde_cambia (el número aleatorio),cuántos quito(cero en mi caso), lo que añado)
        
        let allAnswers=shaker(objQuizAll.incorrect_answers,objQuizAll.correct_answer);
        console.log(allAnswers)
    }
    
        //función que genera un número aleatorio y lo asigna como primer argumento al método splice para cambiar uno de los ítems del array de posición.

       
    //question
    let quiz = `
        <fieldset>
                <section>
                <h1 class="pregunta">"${quizObjAll[i].question}" </h1>
                </section>
                <section>   
`
    //answers
    for (let j = 0; j < quizObj[i].answerAtts.length; j++) {

        let answer = `
        <div>
        <label for="${quizObj[i].answerAtts[j].inpFor_Id}">${quizObj[i].answerAtts[j].labText}</label>
        <input id="${quizObj[i].answerAtts[j].inpFor_Id}" name="${quizObj[i].answerAtts[j].inpName}" value="${quizObj[i].answerAtts[j].inpVal}" type="radio" required/>
        </div>
        `
        quiz += answer;

    }

    //---ADICIÓN DEL CIERRE DE BLOQUE DE RESPUESTAS
    quiz += `<article></fieldset>`

    //---PINTANDO EL QUIZ EN EL DOM
    document.getElementById('quizColors').innerHTML += quiz;

}

//---ADICIÓN DEL ELEMENTO SUBMIT AL DOM AL FINAL DEL QUIZ
document.getElementById('quizColors').innerHTML += `<input type="submit" value="Enviar respuestas"></input>`

//-------------------VALIDACIÓN-----------------------------


let msj //declaro msj para rellenarla con el mensaje a mostrar en cada caso más adelante.

//---OBJETO CON LAS RESPUESTAS CORRECTAS
const respuestas = {
    //clave = propiedad 'name', valor = 'value'
    'answ1': 'amarillo',
    'answ2': 'todas',
    'answ3': 'torrija',
    'answ4': 'pinguino',
    'answ5': 'otoño'
}

//---CREANDO EN EL DOM UN PÁRRAFO CON LOS ERRORES
let p = document.getElementById('errors')
p.style.color = "red";
p.style.fontSize = "16px";


//Añado listener y llamo al objeto event para leer las respuestas del usuario
document.querySelector('form').addEventListener('submit', function (event) {

    //Paralizo el envío del formulario
    event.preventDefault();

    //Asigno el valor de las respuestas del usuario a su respectiva variable
    let userAnsw1 = event.target.q1.value;
    let userAnsw2 = event.target.q2.value;
    let userAnsw3 = event.target.q3.value;
    let userAnsw4 = event.target.q4.value;

    msj = '';//incio msj como string vacío

    //Possible answer 1: Output errors

    if (userAnsw1 == respuestas.answ1) {
        msj += 'Q1: Correcto. ¡Enhorabuena!\n';
    } else {
        msj += 'Q1: Incorrecto. El limón no es de ese color.\n'
    }

    //Possible answer 2:  Output errors

    if (userAnsw2 == respuestas.answ2) {
        msj += 'Q2: Correcto. ¡Enhorabuena!\n';

    } else {
        msj += 'Q2: Incorrecto. Parece que necesitas descansar.\n';
    }
    //Possible answer 3: Output errors
    if (userAnsw3 == respuestas.answ3) {
        msj += 'Q3: Correcto. ¡Enhorabuena!\n';
    } else {
        msj += 'Q3: Incorrecto. Parece que necesitas descansar.\n';
    }

    //Possible answer 4: Output errors
    if (userAnsw4 == respuestas.answ4) {
        msj += 'Q4: Correcto. ¡Enhorabuena!\n';
    } else {
        msj += 'Q4: Incorrecto. Parece que necesitas descansar.\n';
    }
    p.innerHTML = msj;
    alert(msj);

    msj = '';

});  
//Lista de correcciones

/* 
1. inputs: flex
2. Simplificar errores 
3. Elegir estética
4. Elegir tema
5. Perfeccionar el archivo readme.md

*/



















      
    } 

console.log(quest)
console.log(corrAnsw)
console.log(incorrAnsw) 
}





function shuffle(array) {                 // funcion para solucionar el probelma de mezclar las posiciones de las respuestas
    array.sort(() => Math.random() - 0.5);
}

function pintarTablas() {

    let contador = 0

    for (let i = 0; i < preguntas.length; i++) {

        let respuestasAleatorias = [];

        respuestasAleatorias.push(respuestas[i])
        respuestasAleatorias.push(respuesFalsas[1])
        respuestasAleatorias.push(respuesFalsas[2])
        respuestasAleatorias.push(restults.respuesFalsas[3])
        shuffle(respuestasAleatorias)

        let template = `<section class="contPregunta">
                            <div>
                                <h2>${preguntas[i]}</h2>
                            </div>
                        </section>
                        <section class="tarjPregunta">
                                    <article>
                                        <div id="contResp1" class="botonRespu">
                                            <input type="radio" id="p${[i]}-r1" name="boton${[i]}" value="${respuestasAleatorias[0]}"/>
                                            <label for="p${[i]}-r1">${respuestasAleatorias[0]}</label>
                                        </div>
                                        <div id="contResp2" class="botonRespu">
                                            <input type="radio" id="p${[i]}-r2" name="boton${[i]}" value="${respuestasAleatorias[1]}"/>
                                            <label for="p${[i]}-r2">${respuestasAleatorias[1]}</label>
                                        </div>
                                    </article>
                                    <article>
                                        <div id="contResp3" class="botonRespu">
                                            <input type="radio" id="p${[i]}-r3" name="boton${[i]}" value="${respuestasAleatorias[2]}"/>
                                            <label for="p${[i]}-r3">${respuestasAleatorias[2]}</label>
                                            
                                        </div>
                                        <div id="contResp4" class="botonRespu">
                                            <input type="radio" id="p${[i]}-r4" name="boton${[i]}" value="${respuestasAleatorias[3]}"/>
                                            <label for="p${[i]}-r4">${respuestasAleatorias[3]}</label>
                                        </div>
                                    </article>
                        </section>`;

        document.getElementById("pregYRespu").innerHTML += template;

    }

}



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let respUsuario = [];

    let msj = ""

    respUsuario.push(event.target.boton0.value);
    respUsuario.push(event.target.boton1.value);
    respUsuario.push(event.target.boton2.value);
    respUsuario.push(event.target.boton3.value);
    respUsuario.push(event.target.boton4.value);
    respUsuario.push(event.target.boton5.value);
    respUsuario.push(event.target.boton6.value);
    respUsuario.push(event.target.boton7.value);
    respUsuario.push(event.target.boton8.value);
    respUsuario.push(event.target.boton9.value);

    let cont = 0

    for (let i = 0; i < respUsuario.length; i++) {
        if (respUsuario[i] == respuestas[i]) {
            msj += `Has acertado, la respuesta correcta es ${respuestas[i]} \n`;
            cont++
        }
        else if (respUsuario[i] == "") {
            msj += `No has marcado la respuesta ${[i]} \n`;
        }
        else {
            msj += `Has fallado, la respuesta correcta es ${respuestas[i]} \n`;
        }

    }
    alert("YEAHH!! VAMOS A VER TUS RESULTADOS!!\n" + `Has acertado ${cont}/10!!\n` + "Este es el resultado por preguntas:\n" + msj)
    event.target.submit();
});


pintarTablas();