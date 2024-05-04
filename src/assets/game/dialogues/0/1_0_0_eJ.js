let dialogue = [
    {"ACTION" : "WAIT", "TEMP": 0.5},
    {"ACTION": "STOPPLAY", "TEMP": 0.5},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_3.mp3", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Entre los juguetes esparcidos, ves a tu peluche, un compañero constante desde que eras pequeño.", "TEMP": 7},
    //{"ACTION" : "PLAYMUSIC", "TEMP": 1},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "[nombre] decide acercarse y cogerlo, buscando un poco de consuelo en lo familiar.", "TEMP": 7},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Mientras lo abrazas, te preguntas si los demás juguetes podrían ocultar algo más, pistas sobre dónde estás y por qué.", "TEMP": 7},
    {"ACTION": "TEXT", "TEXT": "Decides buscar hacia otro lado.", "TEMP": 5},
    {"ACTION": "SELECT", "TEXT": "", "TEMP": 0, 
    "LINKS": [{"TEXT": "Acercarse a la ventana", "TAG": "1_0_0_eJ_aV"}]},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION" : "CHANGETAG", "TEMP": 0},

];


export default dialogue;