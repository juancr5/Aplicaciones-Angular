export interface Country {
    name:         Name;
    ccn3:         string;
    cca3:         string;
    independent:  boolean;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    any;
    translations: Translations;
    latlng:       number[];
    area:         number;
    flag:         string;
    population:   number;
    timezones:    string[];
    continents:   string[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    capitalInfo:  CapitalInfo;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages{
    afr: string;
    ara: string;
    aze: string;
    bos: string;
    bul: string;
    dan: string;
    eng: string;
    fin: string;
    fra: string;   
    ger: string;
    glg: string;
    hat: string;
    her: string;
    hif: string;
    hye: string;
    hrv: string;
    isl :string;
    ita: string;
    jpn: string;
    kor: string;
    mkd: string;
    mlt: string;
    nbl: string;
    nld: string;    
    nor: string;
    pol: string;
    por: string;
    ron: string;
    slk: string;
    slv: string;
    som: string;
    spa: string;
    srp: string;
    roh: string;
    rus: string;
    swe: string;
    tha: string;
    tso: string;
    zho: string;
    ukr: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: Translation;
}

export interface Translation {
    official: string;
    common:   string;
}

export interface Translations {
    ara: Translation;
    deu: Translation;
    fra: Translation;
    ita: Translation;
    kor: Translation;
    jpn: Translation;
    por: Translation;
    rus: Translation;
    spa: Translation;
    nld: Translation;
}