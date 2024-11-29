import { dodajNowegoPracownika, dodajPracownika, dodajPracownikówZListy } from "./pracownicy.js";
import { generujRaport } from "./raporty.js";
import { Pracownik, PaniBasia, Waluta } from "./types/pracownikTypes.js";
import { RaportPracownika, RaportPracowników, RaportPieseczka } from "./types/raportTypes.js";

export const listaPracowników: Pracownik[] = [];

const paniBasia: PaniBasia = {
    id: 0,
    imie: "Basia",
    nazwisko: "Kowalska",
    stanowisko: "pani basia",
    pensja: [5000, Waluta.Złoty_Polski_Peelen],
    pseudonim: "Basia",
    graNaSkrzypcach: "pięknie",
    bezNiejTenZakładUpadnie: true,
    zwolnij: (...powody) => {
        powody.forEach(powód => {
            if (typeof powód === "number") {
                console.log("Zwolniono z powodu numer: " + powód);
            } else if (typeof powód === "string") {
                console.log("Zwolniono z powodu: " + powód);
            } else {
                console.log("NIE UDAŁO SIĘ ZWOLNIĆ, ZOSTAJĘ W TYM GRAJDOŁKU!");
            }
        });
    }
};

const uruchomDzieńPracy = async () => {
    dodajNowegoPracownika("Jan", "Kowalski", "podbutnik", [3000, Waluta.Złoty_Polski_Peelen]);
    dodajPracownikówZListy();
    dodajPracownika(paniBasia);

    const efektyPracy: RaportPracownika = {
        efektywność: 80,
        priorytet: "brak",
        obniżonaEfektywność: true,
        spadekPensji: 1000
    };
    const raportPracownika: RaportPracownika = await generujRaport(efektyPracy, 80, "brak");
    const raportPracowników: RaportPracowników = await generujRaport({
        0: efektyPracy,
        1: efektyPracy
    }, 80, "brak");
    const raportPieseczka: RaportPieseczka = await generujRaport({
        efektywność: 80,
        priorytet: "brak",
        szczekanie: true,
        isPies: true,
        aKtoToJestTakimSłodkimPieseczkiem: true
    }, 80, "brak");

    if(raportPieseczka.isPies){
        console.log("Dobra psinka!");
    }
}

uruchomDzieńPracy();