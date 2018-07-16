

### Feladatok

1. A kapott adatokat rendezd ár(cost_in_credits) szerint növekvő sorrendbe. (advanced bubble)

2. Töröld az összes olyan adatot (tehát az objektumot a tömbből), ahol a consumables értéke NULL. Fontos, hogy ne csak undefined-ra állítsd a tömbelemet!!!

3. Az összes NULL értéket (minden objektum minden tulajdonságánál) módosítsd "unknown"-ra

4. A shapceship-list class-ű divbe jelenítsd meg az így kapott hajók adatait, beleérve a képét is.

5. Ha valamelyik hajó adatait tartalmazó html elemre (pl.: a divre amibe benne van minden adata) rákattintunk,
akkor töltse be az adott hajó adatait a one-spaceship class-ű div-be.

6. Készítened kell egy statisztikát, mely a shapceship-list class-ű div aljára a következő adatokat fogja beleírni: 

* Egy fős (crew = 1) legénységgel rendelkező hajók darabszáma.
* A legnagyobb cargo_capacity-vel rendelkező hajó neve (model)
* Az összes hajó utasainak (passengers) összesített száma
* A leghosszabb(lengthiness) hajó képének a neve

7. Legyen lehetőség a hajókra rákeresni _model_ szerint.

* A keresett nevet paraméterként kapja a függvényed.
* A keresés nem case sensitive
* Nem csak teljes egyezést vizsgálunk, tehát ha a keresett szöveg szerepel a hajó nevében már az is találat
* Ha több találatunk is lenne, azt a hajót adjuk vissza, amelyiknek a neve ABC sorrendben a legelső lenne.
* Az adott hajó adatait a one-spaceship class-ű div-be kell megjeleníteni rendezett formában, képpel együtt.

## Git
Az ekészült munkádat tedd fel egy git repo-ba githubra. A repo neve az alábbi formátum szerint legyen megadva: vezeteknev-keresztnev-starwarsgyak.
Értelemszerűen a saját vezeték és keresztneved add meg.

