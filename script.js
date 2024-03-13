
let counter = 0;
let countCorrectas = 0;
let countIncorrectas = 0;
let countUnchecked = 0;
let userAnswersAll = [];


//This function includes the correct answer in a random positition into the incorrect_answers' array.
const shaker = (arr, add) => {
    let num = Math.floor(Math.random() * arr.length);
    //.splice(parámetro1:indica a partir de dónde introduzco el cambio(aquí pasamos el número aleatorio),parámetro 2: cuántos elementos elimino(en este caso ninguno, porque sólo quiero añadir), parámetro 3: lo que añado)
    arr.splice(num, 0, add);
    return arr;
}

function getCheckedInput (arrInp){
    
    if (arrInp.checked) {
        return arrInp.checked.value;
    } 
     
};

function printQuestion(completeQuestion) {
    // RANDOMIZAR OPCIONES

    let answersAll = shaker(completeQuestion.incorrect_answers, completeQuestion.correct_answer);
    //console.log(answersAll);

    // PINTAR PREGUNTA y OPCIONES RANDOMIZADAS
    let preg = `
   <section id="pregunta">
    <h3>${completeQuestion.question}</h3>
   </section>
   <section id="respuesta">

   <div><input id="idforInput1" type="radio" name="inpName" value="${answersAll[0]}"/>
   <label for="idforInput1">${answersAll[0]}</label></div>

   <div><input id="idforInput2" type="radio" name="inpName" value="${answersAll[1]}"/>
   <label for="idforInput2">${answersAll[1]}</label></div>

   <div><input id="idforInput3" type="radio" name="inpName" value="${answersAll[2]}"/>
   <label for="idforInput3">${answersAll[2]}</label></div>

   <div><input id="idforInput4" type="radio" name="inpName" value="${answersAll[3]}"/>
   <label for="idforInput4">${answersAll[3]}</label></div>
   </section>`

   document.getElementById("quiz").innerHTML = preg;
  

/*    const arrayInputs = document.querySelectorAll("input");
    //let inputChecked = getCheckedInput(arrayInputs);
    console.log(arrayInputs); */

      //Aquí recojo todos los inputs y los meto en una variable
      const arrayInputs = document.querySelectorAll("input");
      //el evento input hace que se produzca un cambio cada vez que el usuario modifique algo, es decir cada vez que cambie el valor
      // recorro todos los input 
      arrayInputs.forEach(function (input) {
          //le digo que este pendiente cada vez que el usuario haga input
          input.addEventListener("input", function (event) {
              //el evento input se acciona cuando el usuario hace cualquier cambio,cualquier cambio a cualquier valor
              //si checked es false
              arrayInputs.forEach(
                  function (input) {
                      //recorro de nuevo todos los inputs, los reviso y los pinto de color oscuro si estan checked
                      if (input.checked) {
                        userAnswersAll.push(input.value);
                          input.parentElement.style.backgroundColor = "rgb(249, 205, 60)";
                      } else {
                          input.parentElement.style.backgroundColor = " rgba(241, 243, 244, 0.5)";
                      }
                      //y ahora pintamelos claritos si no esta chequeado
                  })
          });
      });
  
      console.log(userAnswersAll);
      
  }

    /* userAnswersAll.push(getCheckedInput(arrayInputs));
    console.log(userAnswersAll); */




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

        //Validación
        document.getElementById("btn-next").addEventListener("click", function (event) {
           event.preventDefault();
                    
        printQuestion(questions[counter++])

        }); 
    })};

    runQuiz();