# Lihtne Ülesannete Nimekiri Projekt

See on lihtne veebirakendus ülesannete haldamiseks. Kasutaja saab sisestada ülesande ja lisada selle nimekirja. Projekt on loodud HTML, CSS ja JavaScripti abil.

### Failide struktuur

*   `index.html` - Rakenduse põhistruktuur ja sisu.
*   `stiil.css` - Visuaalne kujundus ja stiilid.
*   `skript.js` - Rakenduse loogika ja interaktiivsus.

---

## TODO / Ülesanded Rühmaliikmele

Siin on nimekiri ülesannetest, mis tuleb ära teha, et rakendust täiendada.

1.  **Ülesande kustutamine:** Lisa igale nimekirja elemendile (`<li>`) kustutamise nupp (nt "X" ikoon). Nupule vajutades peab vastav ülesanne nimekirjast kaduma.

2.  **Ülesande "tehtuks" märkimine:** Täienda funktsionaalsust nii, et ülesandele klikkides märgitakse see "tehtuks". "Tehtud" ülesanne võiks visuaalselt erineda (nt. tekst tõmmatakse joonega läbi `text-decoration: line-through;` või muudetakse tausta värvi).

3.  **Andmete salvestamine `localStorage` abil:** Implementeeri `localStorage`, et lisatud ülesanded salvestuksid brauseri mällu. See tagab, et ülesanded ei kaoks lehe värskendamisel (refresh).

4.  **Sisendi valideerimine:** Lisa `skript.js` faili kontroll, et tühja või liiga lühikest (näiteks vähem kui 3 sümbolit) ülesannet ei saaks lisada. Kui kasutaja proovib, kuva talle vastav veateade.

5.  **Stiilide täiendamine ja responsiivsus:** Muuda `stiil.css` faili, et rakendus näeks visuaalselt parem välja. Tee kujundus responsiivseks, et see kohanduks korrektselt ka mobiilseadmete ekraanidega.
