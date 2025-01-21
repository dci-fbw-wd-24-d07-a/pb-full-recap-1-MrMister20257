// Diese Aufgabe war wirklich sehr seltsam beschrieben!

// Man nehme alle Zutaten und legt sich alle Utensilien zurecht. In diesem Fall eine Pfanne in der man Kocht und drei Teller.
const zutatenListe = ["Reis", "Paprika", "Schmand", "Putenfilet", "Salz und Pfeffer", "Sambal Oelek"];
let bearbeiteteZutatenListe = []; // <= Pfanne
let bearbeiteteZutatenListe1 = []; // <= Teller#1
let bearbeiteteZutatenListe2 = []; // <= Teller#2
let bearbeiteteZutatenListe3 = []; // <= Teller#3

//Reis kochen!
for (let i = 0; i < 16; i++) {
    if (i === 0) {
        console.log("Beginne damit den Reis zu kochen.")
    } else if (i > 0 && i < 15) {
        console.log("blubber");
    } else if (i === 15) {
        console.log("Der Reis ist gekocht!")
        bearbeiteteZutatenListe.push("gekochter Reis")
        console.log(`Aktuelle Zutatenliste: ${bearbeiteteZutatenListe.join(", ")}.\n`);
    };
};

//Paprika schippeln!
for (let i = 0; i < 50; i++) {
    if (i === 0) {
        console.log("Jetzt werden die Paprikas geschnitten.")
    } else if (i > 0 && i < 15) {
        console.log("schnippel");
    } else if (i === 15) {
        console.log("Die Paprikas sind geschnitten!")
        bearbeiteteZutatenListe.push("geschnittene Paprika")
        console.log(`Aktuelle Zutatenliste: ${bearbeiteteZutatenListe.join(", ")}.\n`);
    };
};

//Putenfilet klein schneiden!
for (let i = 0; i < 50; i++) {
    if (i === 0) {
        console.log("Putenfleisch wird jetzt in Streifen geschnitten.")
    } else if (i > 0 && i < 10) {
        console.log("schnippel");
    } else if (i === 10) {
        console.log("Autsch! Das war der Finger!")
    } else if(i > 10 && i < 15) {
        console.log("schnippel");
    } else if (i === 15) {
        console.log("Wunderschöne Putenstreifen!")
        bearbeiteteZutatenListe.push("Putenstreifen")
        console.log(`Aktuelle Zutatenliste: ${bearbeiteteZutatenListe.join(", ")}.\n`);
    };
};

//Schmand rein!
for (let i = 0; i < 5; i++) {
    if (i === 0) {
        console.log("Nun fügen wir Schmand hinzu.")
    } else if (i > 0 && i < 4) {
        console.log("Löffel voll Schmand, schräg auf den Rand der Pfanne schlag. Booong!");
    } else if (i === 4) {
        console.log("Schmand, isda!")
        bearbeiteteZutatenListe.push("geschmolzener Schmand")
        console.log(`Aktuelle Zutatenliste: ${bearbeiteteZutatenListe.join(", ")}.\n`);
    };
};

//Pfeffer/Salz!
for (let i = 0; i < 10; i++) {
    if (i === 0) {
        console.log("Jetzt noch Pfeffer und Salz hinzugeben.")
    } else if (i > 0 && i < 4) {
        console.log("Streu ");
    } else if (i === 9) {
        console.log("Hmm.. schmeckt schon richtig gut!")
        bearbeiteteZutatenListe.push("Pfeffer und Salz Mischung")
        console.log(`Aktuelle Zutatenliste: ${bearbeiteteZutatenListe.join(", ")}.\n`);
    };
};

//On fire!
for (let i = 0; i < 3; i++) {
    if (i === 0) {
        console.log("Jetzt noch Trick 17: Sambal Oelek!")
    } else if (i > 0 && i < 2) {
        console.log("blubb");
    } else if (i === 2) {
        console.log("")
        bearbeiteteZutatenListe.push("Sambal Oelek")
        console.log(`Aktuelle Zutatenliste: ${bearbeiteteZutatenListe.join(", ")}.\n`);
    };
};

//Funktion zum umrühren/sortieren!
function umrühren(vorher, nachher) {
    let verfügbareZutaten = [...vorher];

    for (let i = 0; i < vorher.length; i++) {
        let randomIndex = Math.floor(Math.random() * verfügbareZutaten.length);
        let zutat = verfügbareZutaten[randomIndex];
        nachher.push(zutat);
        verfügbareZutaten.splice(randomIndex, 1);
    }
};

let counter = 0; // <= wir zählen laut mit!

//Schleife zum umrühren!
while (counter < 5) {
    if (counter === 1) {
        umrühren(bearbeiteteZutatenListe, bearbeiteteZutatenListe1);
    } else if (counter === 2) {
        umrühren(bearbeiteteZutatenListe, bearbeiteteZutatenListe2);
    }  else if (counter === 3) {
        umrühren(bearbeiteteZutatenListe, bearbeiteteZutatenListe3);
    }
    console.log(`Rühre um ${counter + 1}`)
    counter++
}

//Essensausgabe!
console.log("Original zusammensetzung: ", zutatenListe)
console.log("Teller #1: ", bearbeiteteZutatenListe1)
console.log("Teller #2: ", bearbeiteteZutatenListe2)
console.log("Teller #3: ", bearbeiteteZutatenListe3)



