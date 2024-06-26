let dialogue = [
    {"ACTION" : "WAIT", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "Te acercas a la ventana, buscando esperanza en la luz.", "TEMP": 5},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Al tocar el cristal, esperas sentir el fresco de la mañana, pero solo encuentra frío.", "TEMP": 7},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Al mirar más de cerca, te das cuenta que algo iba mal...", "TEMP": 7},
    {"ACTION": "TEXT", "TEXT": `"¡La vista es falsa!"`, "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": `"¡La vista es <b style="color:red">falsa!</b>"`, "TEMP": 3},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": `"Esto no es real... ¿Estoy atrapado aquí?"`, "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": "Piensa [nombre], sintiendo miedo pero también con firmeza.", "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": `"Si esto es <b style="color:red">mentira</b>, ¿qué más descubriré?"`, "TEMP": 5},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": `"No quiero ir allí."`, "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": "Dices mirando a la puerta entre abierta de la habitación.", "TEMP": 6},
    {"ACTION": "PLAY", "MUSIC" : "/game/sounds/0_0_1.mp3", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "Apretando a tu peluche buscando algo de seguridad, mientras,<br> tu mente se llena de imágenes de sombras acechantes y ruidos desconocidos.", "TEMP": 7},
    //{"ACTION" : "PLAYMUSIC", "TEMP": 1},
    {"ACTION": "PLAY", "MUSIC" : "/game/sounds/0_0_7.mp3", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `Apretando a tu peluche buscando algo de seguridad, mientras,<br> tu mente se llena de imágenes de <b style="color:red">sombras acechantes</b> y ruidos desconocidos.`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `Apretando a tu peluche buscando algo de seguridad, mientras,<br> tu mente se llena de imágenes de <b style="color:red">sombras acechantes</b> y <b style="color:red">ruidos desconocidos</b>.`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red">sombras acechantes</b> y <b style="color:red">ruidos desconocidos</b>.`, "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Ruidos desconocidos</b>.`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Sombras acechantes</b>.`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Ruidos desconocidos</b>.`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Sombras acechantes</b>.`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Ruidos desconocidos</b>.`, "TEMP": 0.4},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Sombras acechantes</b>.`, "TEMP": 0.4},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Ruidos desconocidos</b>.`, "TEMP": 0.3},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Sombras acechantes</b>.`, "TEMP": 0.3},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Ruidos desconocidos</b>.`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Sombras acechantes</b>.`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Ruidos desconocidos</b>.`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Sombras acechantes</b>.`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw">Ruidos desconocidos</b>.`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(1px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(1px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(2px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(2px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(3px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(3px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(4px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(4px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(5px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(5px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(6px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(6px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(7px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(7px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(8px)">Sombras acechantes</b>`, "TEMP": 0.2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; font-size:3vw; filter: blur(8px)">Ruidos desconocidos</b>`, "TEMP": 0.2},
    {"ACTION": "STOPPLAY", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "", "TEMP": 0.2},
    {"ACTION" : "WAIT", "TEMP": 5},
    //{"ACTION" : "STO`PMUSIC", "TEMP": 1},
    {"ACTION": "TEXT", "TEXT": `Pero... `, "TEMP": 3},
    {"ACTION": "TEXT", "TEXT": `¿Y si es la única forma de salir de aquí? ¿Y si hay alguien ahí fuera que pueda ayudarme a volver a casa?`, "TEMP": 7},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": `Piensas detenidamente, mientras respiras profundamente:`, "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": `Está bien...`, "TEMP": 3},
    {"ACTION": "TEXT", "TEXT": `Puedo hacer esto...`, "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": `Tengo que hacerlo`, "TEMP": 3},
    {"ACTION": "TEXT", "TEXT": `Tengo que hacerlo.`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `Tengo que hacerlo..`, "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": `Tengo que hacerlo...`, "TEMP": 0.5},
    {"ACTION": "SELECT", "TEXT": "Tengo que hacerlo", "TEMP": 0, 
    "LINKS": [{"TEXT": "Explorar la puerta abierta", "TAG": "1_0_0_eP"}]},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION" : "CHANGETAG", "TEMP": 0},

    //{"ACTION" : "PLAYIMG", "TEMP": 1},


];
export default dialogue;