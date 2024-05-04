let dialogue = [
    {"ACTION" : "WAIT", "TEMP": 0.5},
    {"ACTION": "PLAY", "MUSIC" : "/game/sounds/0_0_14.mp3", "TEMP": 0.1},
    {"ACTION": "BACKGROUND", "COLOR": "#9b3535", "TEMP": 0.1},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_20.mp3", "TEMP": 0.1},
    //{"ACTION": "PLAY", "MUSIC" : "/game/sounds/0_0_10.mp3", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": "Corres todo lo que puedes.", "TEMP":5},
    {"ACTION": "TEXT", "TEXT": "Piensas que tal vez esconderte es una buena opción y <br/> metes en una habitación entre abierta.", "TEMP": 9},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_9.mp3", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "Cierras la puerta.", "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": "Vuelves a notar que alguien te esta observando.", "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": "", "TEMP": 2},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_15.mp3", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Al escuchar ese grito, decides acercarte para ver mejor lo que esta pasando.", "TEMP": 6},
    {"ACTION": "STOPPLAY", "TEMP": 0.1},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "BACKGROUND", "COLOR": "transparent", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": "Te encuentras con un escenario que desafía toda lógica.", "TEMP": 3},
    {"ACTION": "BACKGROUND", "COLOR": "black", "TEMP": 4},
    {"ACTION" : "IMG", "IMAGE" : "/game/img/1_0_6.png", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": "Un niño gritando y agitándose violentamente atado firmemente a la cama", "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": "La escena es perturbadora, el niño muestra signos de una fuerza y desesperación sobrehumanas.", "TEMP": 7},
    {"ACTION": "SELECT", "TEXT": "", "TEMP": 0, 
    "LINKS": [{"TEXT": "Intentar ayudarle", "TAG": "1_0_0_c_a"}]},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION" : "CHANGETAG", "TEMP": 0},



];
export default dialogue