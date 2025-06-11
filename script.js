// skript.js

/**
 * See funktsioon lisab uue ülesande nimekirja.
 * Võtab väärtuse sisendväljalt ja lisab selle <ul> elemendi sisse.
 */
function lisaUusUlesanne() {
    // Leia sisendväli ja võta selle väärtus
    const sisendiVäli = document.getElementById('ulesandeSisend');
    const ulesandeTekst = sisendiVäli.value.trim();

    // Kontrolli, et tekst ei oleks tühi
    if (ulesandeTekst !== '') {
        // Leia nimekiri, kuhu ülesanne lisada
        const nimekiri = document.getElementById('ulesanneteNimekiri');

        // Loo uus listi element (li)
        const uusElement = document.createElement('li');
        uusElement.textContent = ulesandeTekst;

        // Lisa uus element nimekirja
        nimekiri.appendChild(uusElement);

        // Tühjenda sisendväli peale lisamist
        sisendiVäli.value = '';
    }
}
