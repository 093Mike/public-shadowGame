let dialogue = [
    {"ACTION" : "WAIT", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "Con la esperanza de encontrar refugio o quizás una salida oculta, decides entrar a la habitación más cercana.", "TEMP": 5},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_2.mp3", "TEMP": 4},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_9.mp3", "TEMP": 1},
    {"ACTION": "TEXT", "TEXT": "El aire es ligeramente más fresco. Te da un breve respiro.", "TEMP": 7},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Sin embargo,", "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": "cuando tus ojos se ajustan a la luz tenue, un escalofrío recorre tu espina dorsal.", "TEMP": 7},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_5.mp3", "TEMP": 2},
    {"ACTION" : "IMG", "IMAGE" : "/game/img/1_0_3.png", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": "Las paredes están forradas con pantallas,", "TEMP": 5},
    //{"ACTION" : "PLAYMUSIC", "TEMP": 1},
    {"ACTION": "TEXT", "TEXT": "algunas mostrando la habitación de donde despertaste, y en otras exhibiendo a niños en otras habitaciones.", "TEMP": 7},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": `<b style="color:red; text-decoration: underline red;">Te ves a tí mismo en varias de ellas.</b>`, "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": `"No estoy solo."`, "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": `"¿quién más sabe que estoy aquí?"`, "TEMP": 6},
    {"ACTION" : "IMG", "IMAGE" : "", "TEMP": 0.1},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "De repente, una pantalla capta tu atención por completo.", "TEMP": 6},
    {"ACTION": "PLAY", "MUSIC" : "/game/sounds/0_0_10.mp3", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "Muestra a un niño que no reconoces, claramente en peligro, rodeado por figuras amenazantes.", "TEMP": 7},
    {"ACTION": "TEXT", "TEXT": "Otras pantallas muestran a niños en una sala blanca, otros colapsan bajo la presión de pruebas crueles.", "TEMP": 10},
    {"ACTION": "TEXT", "TEXT": "La impotencia y la frustración se acumulan dentro de ti pero no sabes que hacer.", "TEMP": 7},
    {"ACTION": "SELECT", "TEXT": "¿Que deberia de hacer [nombre]?", "TEMP": 0, 
    "LINKS": [{"TEXT": "Intentar rescatar al niño en peligro", "TAG": "1_0_0_mH_iR"},
              {"TEXT": "Confrontar la situación", "TAG": "1_0_0_mH_cS"}]},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION" : "CHANGETAG", "TEMP": 0},

];
export default dialogue;