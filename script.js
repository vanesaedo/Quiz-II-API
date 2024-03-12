let questions = []
let corrAnswer = []
let incorrAnswers = []
let counter = 0;

//This function includes the correct answer in a random positition into the incorrect_answers' array.
const shaker = (arr, add) => {
    let num = Math.floor(Math.random() * arr.length);
    //.splice(parámetro1:indica a partir de dónde introduzco el cambio(aquí pasamos el número aleatorio),parámetro 2: cuántos elementos elimino(en este caso ninguno, porque sólo quiero añadir), parámetro 3: lo que añado)
    arr.splice(num, 0, add);
    return arr;
}

function printQuestion(completeQuestion) {
    // RANDOMIZAR OPCIONES

    let answersAll = shaker(completeQuestion.incorrect_answers, completeQuestion.correct_answer);
    console.log(answersAll);

    // PINTAR PREGUNTA y OPCIONES RANDOMIZADAS
    let preg = `
   <section id="pregunta">
    <h3>${completeQuestion.question}</h3>
   </section>
   <section id="respuesta">
   <input type="radio" name="${completeQuestion.correct_answer}" value="${answersAll[0]}"/>
   <label for="${completeQuestion.correct_answer}">${answersAll[0]}</label>
   <input type="radio" name="${completeQuestion.correct_answer}" value="${answersAll[1]}"/>
   <label for="${completeQuestion.correct_answer}">${answersAll[1]}</label>
   <input type="radio" name="${completeQuestion.correct_answer}" value="${answersAll[2]}"/>
   <label for="${completeQuestion.correct_answer}">${answersAll[2]}</label>
   <input type="radio" name="${completeQuestion.correct_answer}" value="${answersAll[3]}"/>
   <label for="${completeQuestion.correct_answer}">${answersAll[3]}</label>
   </section>`

    document.getElementById("quiz").innerHTML = preg;
}


//1. Getting data from API: NO BORRAR: Extrae los datos de la API/archivo
async function getQuiz() {
    //let petition = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    //let rest = await petition.json();

    let dataset = await fetch("./dataset.json");
    let bloquePregunta = await dataset.json();

    console.log(bloquePregunta);
    return bloquePregunta;

}
//NO BORRAR: Esta función saca los datos de la función asíncrona.
async function getData() {
    const data = await getQuiz();
    console.log(data);
    return data;
    //createQuiz(bloquePregunta, counter);
}




async function runQuiz() {
    await getData().then(result => {
        const { results: questions } = result;
        console.log(questions);

        printQuestion(questions[counter])
        // Toda la lógica que necesite las preguntas






    });
}






//dataset ya tiene todos los datos que necesito
/* function arrQuiz(dataset){

for (let i = 0; i < dataset.length; i++) {

    questions.push(dataset.results[i].question);
    corrAnswer.push(dataset.results[i].correct_answer);
    incorrAnswers.push(dataset.results[i].incorrect_answers);

}
console.log(questions,corrAnswer,incorrAnwers)
return {questions,corrAnswer,incorrAnswers}
} */

//2. Adding quiz (question + answers) to the DOM.

//const createQuiz = (quest, incAnsw, corrAnsw, item) => { 
//par1: question,


//Pinta la pregunta y sus opciones

// Coge por parámetro la pregunta que debe pintar (un objeto)
// Randomiza las opciones
// Pinta en el DOM la pregunta y las opciones



/*  let quiz = `            
 <article class="question"> <h3 class="title-question">${question}</h3>`
 for (let j = 0; j < answersAll.length; j++) {
     let answer = `<button type="button" class="btn-answer" value="${answersAll[j]}">${answersAll[j]}</button>`
     quiz += answer;
 }
 quiz += `</article>`
 document.getElementById('quiz').innerHTML += quiz; */

//createQuiz()
/* async function startQuiz() {
    const pregunta = await getQuiz();
    console.log(pregunta);
    createQuiz(bloquePregunta, counter);
} */
//startQuiz() 
//getQuiz()
//createQuiz(bloquePregunta, counter);
//boton con evento que
//comprobar si hay alguna respuesta marcada
// si no hay respuesta marcada -> mensaje

// si hay respuesta marcada
//   comprobar si marcada coincide con correcta
//      si coincide +1 puntuación 
//      +1 contador (si falla o si acierta)

/* document.getElementById('nextButton').addEventListener('click', function(event){


    contador++;
    startQuiz(); 

    
}) */




runQuiz();
