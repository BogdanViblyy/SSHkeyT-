// Laadib ülesanded localStorage-st lehe laadimisel
document.addEventListener('DOMContentLoaded', laeUlesanded);

function lisaUusUlesanne() {
    const sisendiVäli = document.getElementById('ulesandeSisend');
    const ulesandeTekst = sisendiVäli.value.trim();
    const veateade = document.getElementById('viga');
    veateade.textContent = ''; // tühjenda eelmine veateade

    // Kontrolli, et tekst oleks vähemalt 3 tähemärki pikk
    if (ulesandeTekst.length < 3) {
        veateade.textContent = 'Palun sisesta ülesanne vähemalt 3 sümboliga.';
        return;
    }

    const nimekiri = document.getElementById('ulesanneteNimekiri');
    const uusElement = looUlesanneElement(ulesandeTekst);

    nimekiri.appendChild(uusElement);
    salvestaUlesanded();

    sisendiVäli.value = ''; // puhasta sisendväli
}

function looUlesanneElement(tekst, tehtud = false) {
    const li = document.createElement('li');
    li.textContent = tekst;
    if (tehtud) li.classList.add('tehtud');

    // Kliki peal märgib tehtuks/mitte tehtuks
    li.addEventListener('click', () => {
        li.classList.toggle('tehtud');
        salvestaUlesanded();
    });

    // Kustutamise nupp
    const kustutaBtn = document.createElement('span');
    kustutaBtn.textContent = '✖';  // X märk
    kustutaBtn.className = 'kustuta';
    kustutaBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // takistab ülesande märkimist tehtuks, kui klikid kustutamisel
        li.remove();
        salvestaUlesanded();
    });

    li.appendChild(kustutaBtn);
    return li;
}

function salvestaUlesanded() {
    const ülesanded = [];
    document.querySelectorAll('#ulesanneteNimekiri li').forEach(li => {
        ülesanded.push({
            tekst: li.firstChild.textContent.trim(),
            tehtud: li.classList.contains('tehtud')
        });
    });
    localStorage.setItem('ulesanded', JSON.stringify(ülesanded));
}

function laeUlesanded() {
    const andmed = localStorage.getItem('ulesanded');
    if (andmed) {
        const ulesanded = JSON.parse(andmed);
        const nimekiri = document.getElementById('ulesanneteNimekiri');
        ulesanded.forEach(ul => {
            const li = looUlesanneElement(ul.tekst, ul.tehtud);
            nimekiri.appendChild(li);
        });
    }
}