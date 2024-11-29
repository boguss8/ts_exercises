export enum Waluta {
    Złoty_Polski_Peelen,
    Erło_jedne_niemieckie,
    Dolar_fajny_taki_amerykanski
}

export type Pracownik = {
    id: number;
    imie: string;
    nazwisko: string;
    stanowisko: "szef" | "anetka" | "pani basia" | "podbutnik";
    pseudonim: string;
    opis?: string;
    pensja: [number, Waluta];
    zwolnij: (...powody: (string | number)[]) => void; //opcjonalna
};

export type PaniBasia = Pracownik & { //nie powinna miec swojego typu
    graNaSkrzypcach: string;
    bezNiejTenZakładUpadnie: boolean;
};