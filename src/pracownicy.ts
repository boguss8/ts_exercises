import pracownicy from "../dane/pracownicy.json" assert { type: "json" };
import { listaPracowników } from "./index.js";
import { Pracownik, Waluta } from "./types/pracownikTypes.js";

export const dodajPracownikówZListy = () => {
  pracownicy.forEach((pracownik) => {
    if ("id" in pracownik && typeof pracownik.stanowisko === "string") {
      const nowyPracownik: Pracownik = {
        ...pracownik,
        stanowisko: pracownik.stanowisko as
          | "szef"
          | "anetka"
          | "pani basia"
          | "podbutnik",
        pensja: pracownik.pensja as [number, Waluta],
        zwolnij: zwolnijGo,
      };
      dodajPracownika(nowyPracownik);
    } else if ("isPies" in pracownik && pracownik.isPies) {
      const nowyPies: Pracownik = {
        id: listaPracowników.length + 1,
        imie: pracownik.imie,
        nazwisko: "Pies",
        stanowisko: "podbutnik",
        pensja: [0, Waluta.Złoty_Polski_Peelen],
        pseudonim: "Piesek",
      };
      listaPracowników.push(nowyPies);
    } else {
      console.log("Nie udało się dodać pracownika: ", pracownik);
    }
  });
};

export const dodajNowegoPracownika = (
  imie: string,
  nazwisko: string,
  stanowisko: "szef" | "anetka" | "pani basia" | "podbutnik",
  pensja: [number, number],
  zwolnij?: (...powody: (string | number)[]) => void
) => {
  listaPracowników.push({
    id: listaPracowników.length + 1,
    imie,
    nazwisko,
    stanowisko,
    pensja,
    pseudonim: "",
    zwolnij,
  });
};

export const dodajPracownika = (pracownik: Pracownik) => {
  listaPracowników.push(pracownik);
};

export const zwolnijPracownika = (id: number, powód: string | number) => {
  const pracownik = listaPracowników.find((pracownik) => pracownik.id === id);
  if (pracownik && pracownik.zwolnij) {
    pracownik.zwolnij(powód);
  }
};

const zwolnijGo = (...powody: (string | number)[]) => {
  powody.forEach((powód) => {
    if (typeof powód === "number") {
      console.log("Zwolniono z powodu numer: " + powód);
    } else if (typeof powód === "string") {
      console.log("Zwolniono z powodu: " + powód);
    } else {
      console.log("NIE UDAŁO SIĘ ZWOLNIĆ, ZOSTAJĘ W TYM GRAJDOŁKU!");
    }
  });
};
