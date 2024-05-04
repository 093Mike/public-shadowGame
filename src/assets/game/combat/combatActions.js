let combatActions = {
    "telekinesis": {
        "ATK" : {
            0: {"ATK": 12, "MP": 12, "name": "Impulso Telekinético"},
            1: {"ATK": 8, "MP": 9, "name": "Escudo Telekinético"},
            2: {"ATK": 32, "MP": 30 , "HP": 35, "name": "Destrucción Telekinética" , "special":true},
            3: {"ATK": 12, "MP": 0, "name": "Golpear"},
        } 
    },
    "electromagnesis":{
        "ATK" : {
            0: {"ATK": 20, "MP": 17, "name": "Absorción eléctrica"},
            1: {"ATK": 13, "MP": 11, "name": "Magnetismo"},
            2: {"ATK": 42, "MP": 40 , "HP": 35, "name": "Tormenta Oscura", "special":true},
            3: {"ATK": 12, "MP": 0, "name": "Golpear"},
        }
    },
    "barreras":{
        "ATK" : {
            0: {"ATK": 16, "MP": 12, "name": "Muro de defensa"},
            1: {"ATK": 13, "MP": 12, "name": "Cúpula de ataque"},
            2: {"ATK": 32, "MP": 40 , "HP": 35, "name": "Claustrofobia", "special":true},
            3: {"ATK": 12, "MP": 0, "name": "Golpear"},
        }
    },
    "umbrakinesis":{
        "ATK" : {
            0: {"ATK": 16, "MP": 12, "name": "Manto de sombras"},
            1: {"ATK": 13, "MP": 12, "name": "Explosión de oscuridad"},
            2: {"ATK": 32, "MP": 40 , "HP": 35, "name": "Oscuridad envuelta", "special":true},
            3: {"ATK": 12, "MP": 0, "name": "Golpear"},
        }
    },

}

export default combatActions;