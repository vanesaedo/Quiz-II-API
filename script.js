//This function includes the correct answer in a random positition into the incorrect_answers' array.
const shaker = (arr, add) => {
    let num = Math.floor(Math.random() * arr.length);
    //.splice(parámetro1:indica a partir de dónde introduzco el cambio(aquí pasamos el número aleatorio),parámetro 2: cuántos elementos elimino(en este caso ninguno, porque sólo quiero añadir), parámetro 3: lo que añado)
    arr.splice(num, 0, add);
    return arr;
}


//1. Getting data from API
async function getQuiz() {
    let petition = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    let rest = await petition.json()
    //console.log(rest);
    let data = rest.results;
    return data;
}

    //2. Adding quiz (question + answers) to the DOM.

    //const createQuiz = (quest, incAnsw, corrAnsw, item) => { 
    //par1: question,
let i=0;
function createQuiz(i) {

    let quest = data[i].question;//variable que contiene la pregunta
    let corrAnswer = data[i].correct_answer;//variable que contiene la respuesta correcta
    let incAnswers = data[i].incorrect_answers;//variable que contiene las respuestas incorrectas
   
    //console.log(quest,corrAnswer,incAnswers);

    //Storing all answers in a random way
    let answersAll = shaker(incAnswers, corrAnswer);
    console.log(answersAll);

    let quiz = `            
    <article class="question">
    <h3 class="pregunta">${quest}</h3>
    </article>
    <article class="answers">`

    for (let j = 0; j < answersAll.length; j++) {

        let answers = `
        <label for="${answersAll[j]}">${answersAll[j]}</label>
        <input id="${answersAll[j]}" name="${corrAnswer}" value="${answersAll[j]}" type="radio" required/>
        `
        quiz += answers;
    }
    quiz += `</article>`
    document.getElementById('quiz').innerHTML += quiz;
}

async function startQuiz (){
    const preguntas = await getQuiz();
    createQuiz(preguntas);
}
startQuiz()

document.getElementById('nextButton').addEventListener('click', function(event){
    
    i++;
}
)




