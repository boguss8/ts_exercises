export type Raport = {
  efektywność: number;
  priorytet: string;
};

export type RaportPracownika = Raport & {
  obniżonaEfektywność: boolean;
  spadekPensji: number;
};

export type RaportPracowników = Record<number, RaportPracownika>;

export type RaportPieseczka = Raport & {
  szczekanie: true;
  isPies: true;
  aKtoToJestTakimSłodkimPieseczkiem: true;
};
