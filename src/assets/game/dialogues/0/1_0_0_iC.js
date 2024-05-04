let dialogue = [
    {"ACTION" : "WAIT", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "A pesar del miedo que te inunda, algo dentro de ti quiere creer que no estás solo en esto,", "TEMP": 9},
    {"ACTION": "TEXT", "TEXT": "que tal vez...", "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": "hay alguien más ahí fuera que pueda ayudarte...", "TEMP": 6},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Con una voz temblorosa:", "TEMP": 5},
    {"ACTION": "PLAY", "MUSIC" : "/game/sounds/0_0_12.mp3", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": `"¿Hola?"`, "TEMP": 3},
    {"ACTION": "TEXT", "TEXT": `"¡¿Hay alguien ahí?!"`, "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": ``, "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": `No hay respuesta, solo el eco de tu propia llamada.`, "TEMP": 5},
    {"ACTION": "BACKGROUND", "COLOR": "#9b3535", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": `La frustración y la impotencia se apoderan de ti, alimentando tu fiebre.`, "TEMP": 7},
    {"ACTION": "TEXT", "TEXT": "", "TEMP": 4},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_13.mp3", "TEMP": 3},
    {"ACTION": "TEXT", "TEXT": "Escuchas una voz que no es humana", "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": "Entras en panico", "TEMP": 5},
    {"ACTION": "PLAY", "MUSIC" : "/game/sounds/0_0_14.mp3", "TEMP": 0.1},
    {"ACTION": "SELECT", "TEXT": "", "TEMP": 0, 
    "LINKS": [{"TEXT": "Correr", "TAG": "1_0_0_correr"}]},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION" : "CHANGETAG", "TEMP": 0},

];


export default dialogue;