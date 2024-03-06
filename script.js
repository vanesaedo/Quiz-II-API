const preguntas = ["¿Quién es considerado el hombre que inventó el teléfono?", "Este planeta gira más rápido, completando una rotación completa en solo 10 horas. ¿Qué planeta es?", "¿Cuál es la sustancia natural más dura de la Tierra?", "¿Cuántos dientes tiene un ser humano adulto?", "Este animal fue el primero en ser lanzado al espacio. La ataron a la nave espacial soviética Sputnik 2 que fue enviada al espacio exterior el 3 de noviembre de 1957. ¿Cuál era su nombre?", "¿Quién fue la primera mujer en el espacio?", "¿En qué parte del cuerpo humano se encuentran la mayoría de las glándulas sudoríparas?", "¿cuánto tarda la luz del sol en llegar a la Tierra?", "¿Cuántos huesos hay en el cuerpo humano?", "¿Cómo se llama el proceso de descomposición de los alimentos?"];

const respuestas = ["Graham Bell", "Júpiter", "Diamante", "32", "Laika", "Valentina tereshkova", "Parte inferior de los pies", "8 minutos", "206", "Digestión"];

const respuesFalsas = ["Newton", "Tesla", "Manolo de Telefonica", "Marte", "Pandora", "Tatooine", "Hulk", "Titanio", "Adamantium", "23", "58", "1024", "Lassie", "Scooby-DO", "Snoopy", "Capitana Marvel", "Belén Esteban", "Marie Curie", "Las axilas", "Los ojos", "Las pestañas", "8 horas", "8 dias", "8 nanosegundos", "207", "307", "308", "Implosión", "Desintegración", "Hadouken"]



function shuffle (array){                 // funcion para solucionar el probelma de mezclar las posiciones de las respuestas
    array.sort(()=> Math.random() -0.5);
}

function pintarTablas() {  

    let contador = 0

    for (let i = 0; i < preguntas.length; i++) {

        let respuestasAleatorias = [];
        
        respuestasAleatorias.push(respuestas[i])
        respuestasAleatorias.push(respuesFalsas[contador++])
        respuestasAleatorias.push(respuesFalsas[contador++])
        respuestasAleatorias.push(respuesFalsas[contador++])
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
    
    let cont=0

    for (let i = 0; i < respUsuario.length; i++) {
        if (respUsuario[i] == respuestas[i]) {
        msj += `Has acertado, la respuesta correcta es ${respuestas[i]} \n`;
        cont++
       } 
       else if(respUsuario[i] == "") {
        msj += `No has marcado la respuesta ${[i]} \n`;
       } 
       else{
        msj += `Has fallado, la respuesta correcta es ${respuestas[i]} \n`;
       }
        
    }
    alert("YEAHH!! VAMOS A VER TUS RESULTADOS!!\n" + `Has acertado ${cont}/10!!\n`+"Este es el resultado por preguntas:\n" + msj)
    event.target.submit();
});


pintarTablas();