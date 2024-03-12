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
   <input id="idforInput1" type="radio" name="respName" value="${answersAll[0]}"/>
   <label for="idforInput1">${answersAll[0]}</label>
   <input id="idforInput2" type="radio" name="respName" value="${answersAll[1]}"/>
   <label for="idforInput">${answersAll[1]}</label>
   <input id="idforInput3" type="radio" name="respName" value="${answersAll[2]}"/>
   <label for="idforInput3">${answersAll[2]}</label>
   <input id="idforInput4" type="radio" name="respName" value="${answersAll[3]}"/>
   <label for="idforInput4">${answersAll[3]}</label>
   </section>`

    document.getElementById("quiz").innerHTML = preg;
}

function radioChecked(e, f, g, h) {

    if (e.checked ) {
        return true;
    } else if (f.checked) {
        return true;
    } else if (g.checked) {
        return true;
    } else if (h.checked) {
        return true;
    }else {
        return false;
    }
}

function radioSelected(a, b, c, d) {

    if (a.checked == true) {
        return inp1.answersAll[0];
    } else if (b.checked == true) {
        return inp2.answersAll[1];
    } else if (c.checked == true) {
        return inp3.answersAll[2];
    } else if (d.checked == true) {
        return inp4.answersAll[3];
    }else {
        return false;
    }
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

        document.getElementById("btn-next").addEventListener("click", function (event) {
            event.preventDefault();

          
            let countCorrectas = 0;
            let countIncorrectas = 0;


          
            let inp1 = document.getElementById("idforInput1");
            let inp2 = document.getElementById("idforInput2");
            let inp3 = document.getElementById("idforInput3");
            let inp4 = document.getElementById("idforInput4");

            console.log(radioSelected())

            if (radioChecked(inp1,inp2,inp3,inp4) == false ){
                alert("Please, select one option")
            }

            if (radioSelected(inp1, inp2, inp3, inp4) == completeQuestion.correct_answer) {
                countCorrectas++;
            } else {
                countIncorrectas++;
            }

           
            console.log(countCorrectas,countIncorrectas)
        });
     }

    )
}






runQuiz();
