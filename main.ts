/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
const cena: number = 6.75

type Odber = {
    time: number; //cas sekundy
    prikon: number //watt 6,75
}

const data: Array<Odber> = [
    { time: 600, prikon: 3500 },
    { time: 120, prikon: 0 },
    { time: 300, prikon: 1700 },
    { time: 600, prikon: 0 },
    { time: 800, prikon: 1500 },

]
let celek: number = 0
for (let i: number = 0; i < data.length; i++) {
    celek += data[i].time
    if (i === 4) {
        celek /= 3600
    }
}
let celek2: number = 0
for (let j: number = 0; j < data.length; j++) {
    celek2 += data[j].prikon
    if (j === 4) {
        celek2 /= 1000
        console.log(celek2 * celek / 5 + "" + " prumerna cena v Kč")
        console.log(celek * celek2 * cena + "" + " cena v Kč")
    }
}