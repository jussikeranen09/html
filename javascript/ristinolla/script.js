let vuoro = "X";
let peliOhi = false;

const painikkeet = document.querySelectorAll("#peli button");
const tilanne = document.querySelector("#tilanne");

const voitot = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function käsitteleKlikkaus(event) {
    if (peliOhi) return;

    const painike = event.target;

    if (painike.textContent !== "") return;

    painike.textContent = vuoro;

    const voitto = voitot.some(rivi =>
        rivi.every(indeksi => painikkeet[indeksi].textContent === vuoro)
    );

    if (voitto) {
        tilanne.textContent = `Voittaja: ${vuoro}`;
        peliOhi = true;
        return;
    }

    const tasapeli = [...painikkeet].every(painike =>
        painike.textContent !== ""
    );

    if (tasapeli) {
        tilanne.textContent = "Tasapeli";
        peliOhi = true;
        return;
    }

    vuoro = vuoro === "X" ? "O" : "X";
    tilanne.textContent = `Vuoro: ${vuoro}`;
}

painikkeet.forEach(painike => {
    painike.addEventListener("click", käsitteleKlikkaus);
});