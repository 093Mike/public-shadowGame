let dialogue = [
{"ACTION" : "WAIT", "TEMP": 0.5},
{"ACTION": "STOPPLAY", "TEMP": 0.5},
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
{"ACTION": "SELECT", "TEXT": `"Si esto es <b style="color:red">mentira</b>, ¿qué más descubriré?"`, "TEMP": 0, 
"LINKS": [{"TEXT": "Examinar los Juguetes", "TAG": "1_0_0_aV_eJ"}]},
{"ACTION" : "WAIT", "TEMP": 2},
{"ACTION" : "CHANGETAG", "TEMP": 0},

];
export default dialogue;
