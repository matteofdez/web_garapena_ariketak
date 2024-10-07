let erantzunZuzena = 0;
let erantzunOkerra = 0;

const galderak = [
    { kategoria: "Geografia", galdera: "Ze hiriburu du Frantziak?", erantzuna: "Paris" },
    { kategoria: "Artea", galdera: "Nor pintatu zuen 'La Gioconda'?", erantzuna: "Leonardo da Vinci" },
    { kategoria: "Ikuskizunak", galdera: "Nork zuzendu zuen 'E.T.' filma?", erantzuna: "Steven Spielberg" },
    { kategoria: "Historia", galdera: "Noiz amaitu zen II. Mundu Gerra?", erantzuna: "1945" },
    { kategoria: "Zientziak", galdera: "Zein da uraren kimika-formula?", erantzuna: "H2O" },
    { kategoria: "Kirolak", galdera: "Nor izan zen 2022ko futbol munduko txapelduna?", erantzuna: "Argentina" }
];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("jokoaBotoia").addEventListener("click", jokoaHasi, false);
})

function jokoaHasi() {
    erantzunZuzena = 0;
    erantzunOkerra = 0;
    galderaEgin();
}

function galderaEgin() {
    let galderaZerrenda = "Aukeratu galdera bat zenbakiaren bidez:\n";
    for (let i = 0; i < galderak.length; i++) {
        galderaZerrenda += `${i + 1}. ${galderak[i].kategoria} - ${galderak[i].galdera}\n`;
    }

    const erabiltzaileAukera = parseInt(prompt(galderaZerrenda)) - 1;

    if (erabiltzaileAukera >= 0 && erabiltzaileAukera < galderak.length) {
        const galdera = galderak[erabiltzaileAukera];
        const erabiltzaileErantzuna = prompt(`Kategoria: ${galdera.kategoria}\nGaldera: ${galdera.galdera}`);

        if (erabiltzaileErantzuna.toLowerCase() === galdera.erantzuna.toLowerCase()) {
            alert("Oso ondo!");
            erantzunZuzena++;
        } else {
            alert(`Ez! Erantzun zuzena: ${galdera.erantzuna}`);
            erantzunOkerra++;
        }

        galderak.splice(erabiltzaileAukera, 1);
    } else {
        alert("Aukera ez da baliozkoa. Saiatu berriro.");
    }

    if (!jokoaAmaitu()) {
        galderaEgin();
    }
}

function jokoaAmaitu() {
    if (erantzunZuzena >= 4) {
        alert(`Irabazi duzu! ${erantzunZuzena} galdera zuzen erantzun dituzu.`);
        return true;
    } else if (erantzunOkerra >= 3) {
        alert(`Galdu duzu! ${erantzunOkerra} galdera oker erantzun dituzu.`);
        return true;
    }
    return false;
};
