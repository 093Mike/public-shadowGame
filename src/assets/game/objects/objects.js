import { GiTacos, GiSlicedBread, GiBanana, GiHamburger, GiPopcorn, GiHotDog, GiCannedFish, 
    GiGlassShot, GiWaterBottle, GiSodaCan, GiFullPizza, GiCookie, GiCarrot, 
    GiBottledBolt,
    GiBoltDrop,
    GiArmBandage} from "react-icons/gi";

let objects = {
    "FOOD":{
        0: {icon: <GiTacos />, hungry:15, text: "Tacos"},
        1: {icon: <GiCarrot />, hungry:15, text: "Verduras"},
        2: {icon: <GiSlicedBread />, hungry:15, text: "Tacos"},
        3: {icon: <GiBanana />, hungry:5, text: "Platanos"},
        4: {icon: <GiHamburger />, hungry:20, text: "Hamburguesa"},
        5: {icon: <GiPopcorn />, hungry:10, text: "Palomitas"},
        6: {icon: <GiHotDog />, hungry:10, text: "Frankfurt"},
        7: {icon: <GiCannedFish />, hungry:10 , text: "Lata de atun"},
        8: {icon: <GiFullPizza />, hungry:10, text: "Pizza"},
        9: {icon: <GiCookie />, hungry:15 , text: "Galleta"},
        10: {icon: <GiGlassShot />, thirsty:5, text: "Vaso de agua"},
        11: {icon: <GiWaterBottle />, thirsty:20, text: "Botella de agua"},
        12: {icon: <GiSodaCan />, thirsty:20, text: "Soda"},
    },
    "POWER":{
        0: {icon: <GiBottledBolt/>, MP:70, text:"Potenciador"},
        1: {icon: <GiBoltDrop/>, MP:40, text:"Bebida energetica"},
    },
    "LIFE":{
        0: {icon: <GiArmBandage/>, HP:120, text:"Vendaje"},
        1: {icon: <GiBoltDrop/>, HP:60, text:"Curación"},
    },
    "TOY":{
        
    }

}

export default objects;