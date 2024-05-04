let dialogue = [
    {"ACTION" : "WAIT", "TEMP": 0.5},
    {"ACTION": "TEXT", "TEXT": "La impotencia y la frustración se acumulan dentro de ti.", "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": "El enfado que tienes contigo mismo por no poder hacer nada, <br> crea en tí algo en tu ser", "TEMP": 7},
    //{"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_17.mp3", "TEMP": 0.1},
    {"ACTION" : "WAIT", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Una energía pura fluye de ti, ", "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": "interrumpiendo las pantallas y causando un caos en el laboratorio.", "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": "Los dispositivos electrónicos chisporrotean y se apagan intermitentemente", "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": "", "TEMP": 4},
    {"ACTION": "BACKGROUND", "COLOR": "black", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": "", "TEMP": 4},
    {"ACTION": "EFFECT", "IMAGE" : "/game/sounds/0_0_17.mp3", "TEMP": 0.1},
    {"ACTION": "TEXT", "TEXT": "Tras romper algunos televisores", "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": "Se crea un silencio incomodo", "TEMP": 4},
    {"ACTION": "TEXT", "TEXT": "", "TEMP": 2},
    {"ACTION": "TEXT", "TEXT": "Sientes cómo el mundo se desvanece nuevamente en la oscuridad, ya que tu cansancio te vence.", "TEMP": 9},
    {"ACTION": "TEXT", "TEXT": "Te caes al suelo por debilitamiento", "TEMP": 5},
    {"ACTION": "TEXT", "TEXT": "Observando como las pantallas se han apagado una por una progresivamente", "TEMP": 7},
    {"ACTION" : "WAIT", "TEMP": 6},
    {"ACTION": "TEXT", "TEXT": "<b>Acabas de obtener los poderes de Electromagnesis</b>", "TEMP":7},
    {"ACTION" : "WAIT", "METHOD":[2 , {poder: "electromagnesis"}],  "TEMP": 6},
    {"ACTION" : "NEXTPROGRESS", "TEMP": 2},  


];
export default dialogue;