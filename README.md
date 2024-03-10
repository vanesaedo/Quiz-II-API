# Quiz-II-API

# Introducción #

1. Realizar un juego de preguntas y respuestas múltiples aplicando los conocimientos de JavaScript aprendidos hasta el momento. 

2.Enviar el URL del repositorio en el que lo hayáis subido. A ser posible publicarlo utilizando GitHub Pages y compartir el enlace (o ponerlo en el fichero Readme).

## Objetivo ##
El Quiz constará de 10 preguntas. 
Cada pregunta tendrá 4 opciones y sólo una de ellas será la correcta.
Podrán ser preguntas nuestras y preguntas que vengan de https://opentdb.com/
La aplicación tendrá que ser una. Sólo una pregunta cada vez en pantalla.
Requisitos
Manipulación dinámica del DOM
Crear una página SPA para las preguntas
Manejo de ES6
Asincronía. Usar API de preguntas https://opentdb.com/
APIs HTML5: Uso de Local storage y gráficas, etc...
Uso de Firebase Auth y Firebase Firestore
Sin frameworks ni librerias externas en la medida de lo posible
Gestión del proyecto con  Github 
Código limpio, buenas prácticas
Desplegar la app en gitHub Pages
https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_feb24_MAD/blob/main/teoria/js_avanzado/quiz.md

## Pasos a seguir ##
1[ ]. Crear index.html (Presentación del Quiz)
    - Botón "Iniciar quizz"
    - [ ] Título del Quizz
2[ ]. Crear quiz.html que incluya:
    - [ ] Etiqueta donde alojar las preguntas y respuestas que generaremos desde el archivo .js con atributo id.
    - [ ] Botón "Siguiente".
    - [ ] Contador de respuestas acertadas y no acertadas.
    - [ ] Título del Quizz
3.[X] Crear un script que tome los datos de la API https://opentdb.com/.


4.[X]Crear un script que genere el html correspondiente a cada pregunta y sus respuestas completándose con los datos de la API.
5. Añadir estilos CSS.


-------

# SCRIPT #

## 1. Getting data ##

Tomamos los datos de la API https://opentdb.com/. Url correspondiente a "Cultura general", "Nivel medio". (Modificable).

2. Se crea un array de objetos objQuizAll, donde cada objeto contiene la información necesaria para cada pregunta y sus respuestas. Esta es la estructura de la promesa recibida: 

        ObjQuizAll = [{   
            category: "General Knowledge",
            correct_answer: "Southeast",    
            difficulty:"medium",
            incorrect_answers:['Southwest', 'Northwest', 'Northeast'],
            question:"What direction does the Statue of Liberty face?",
            type: "multiple"
            }, 
            {
            ...
            }]
    
3. Creado el script que genere el html correspondiente a cada pregunta y sus respuestas completándose con los datos de la API. Para ello hemos creado un bucle for que:
    - Crea un bloque html con la pregunta y sus respuestas (datos tomados de la API). 
    - En las respuestas se llama a la función shaker() para combinar de forma aleatoria las respuestas correctas e incorrectas en el mismo array.
    - Pinta en el DOM una pregunta y sus posibles respuestas. Dentro de este bucle se llama a la función shaker(), que incluirá, en una posición aleatoria, un item que corresponde con la respuesta correcta


# FUNCTIONS #

const shaker = (arr,add) => {

    let num = Math.floor(Math.random()* arr.length);
    arr.splice(num,0,add);
    return arr;
}


This function includes the correct answer in a random positition into the incorrect_answers' array.

Returns this: 

What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012? 
(4) ['Fiestas', 'Bullfighting', 'Flamenco', 'Mariachi']