const psetSlugs = ["osn-2022", "ksn-2021", "ksn-2020", "osn-2019", "osn-2018"];

const usernames = [
  "Ackhava",
  "akram1717",
  "bagasangga",
  "palpale",
  "Ryan_Ethan_Halim",
  "cly0402",
  "faeilana",
  "kayna",
  "worthytacos",
  "Sentreb",
  "glenaoi",
  "trianandaharahap",
  "MikiMiku",
  "MuhammadFakhryZaki",
  "Mitty_123",
  "Jesslyn_nathania19",
  "harzuqi",
  "davinpwk",
  "matthewhutama",
  "Sokuzo21",
  "eur",
  "Michael_H",
  "Raoul",
  "lalaiing",
  "syfa",
  "dhapin",
  "Rayhanrizqy",
  "Fon1as",
  "vinren",
  "Yazid_H",
  "habib_rizqi",
  "adamnooriman",
  "DhimasPutra ",
  "felejunelus",
  "bananade",
  "HannanAfif",
  "AdrielJ",
  "Miko",
  "IDika",
  "MoonLord",
  "O_O",
  "Lenvil",
  "Lucia",
  "Nothing123",
  "Kloce",
];

const usernameToUserDataMap = {
  arifkhalfani: {
    name: "Muhammad Arif Khalfani Ismail",
    province: "Prov. Aceh",
    group_number: 1,
  },
  Ackhava: {
    name: "Ackhava Adam Malonda",
    province: "Prov. Bali",
    group_number: 5,
  },
  devitoSans: {
    name: "Devito Sanjaya Putra",
    province: "Prov. Bali",
    group_number: 4,
  },
  Anand07: {
    name: "I Ketut Anand Amertha",
    province: "Prov. Bali",
    group_number: 2,
  },
  Satria11: {
    name: "Satria Edafausta Tjiaman",
    province: "Prov. Bali",
    group_number: 2,
  },
  Seeplusplus: {
    name: "Faiz Rizki Ramadhan",
    province: "Prov. Banten",
    group_number: 2,
  },
  Hyroft: {
    name: "Hayyan Ahmad Al Ghifary",
    province: "Prov. Banten",
    group_number: 2,
  },
  hamizghanii1706: {
    name: "Muhammad Hamiz Ghani Ayusha",
    province: "Prov. Banten",
    group_number: 5,
  },
  akram1717: {
    name: "Nashiruddin Akram",
    province: "Prov. Banten",
    group_number: 4,
  },
  Bearylover: {
    name: "Nathaniel Farrell Irawan",
    province: "Prov. Banten",
    group_number: 2,
  },
  Fid_spin: {
    name: "Muhammad Hawari Tsabit",
    province: "Prov. Bengkulu",
    group_number: 1,
  },
  Troll321: {
    name: "Atila Ghulwani Altamis",
    province: "Prov. D.I. Yogyakarta",
    group_number: 4,
  },
  bagasangga: {
    name: "Bagas Anggareksa Irsyad Dhanisywara",
    province: "Prov. D.I. Yogyakarta",
    group_number: 1,
  },
  palpale: {
    name: "Hanif Achdan Pietoyo",
    province: "Prov. D.I. Yogyakarta",
    group_number: 5,
  },
  Ryan_Ethan_Halim: {
    name: "Ryan Ethan Halim",
    province: "Prov. D.I. Yogyakarta",
    group_number: 2,
  },
  cly0402: {
    name: "Clayton Luther Young",
    province: "Prov. D.K.I. Jakarta",
    group_number: 4,
  },
  faeilana: {
    name: "Fae Ilana Negoro",
    province: "Prov. D.K.I. Jakarta",
    group_number: 5,
  },
  kayna: {
    name: "Kayna Mufidah",
    province: "Prov. D.K.I. Jakarta",
    group_number: 5,
  },
  worthytacos: {
    name: "Kevin Cornellius Widjaja",
    province: "Prov. D.K.I. Jakarta",
    group_number: 5,
  },
  Sentreb: {
    name: "Mochammad Fathirrazi Nafisandy",
    province: "Prov. D.K.I. Jakarta",
    group_number: 3,
  },
  evanrusly: {
    name: "Rainer Evan Rusly",
    province: "Prov. D.K.I. Jakarta",
    group_number: 5,
  },
  glenaoi: {
    name: "Stanislaus Harglen Utama Sitompul",
    province: "Prov. D.K.I. Jakarta",
    group_number: 4,
  },
  trianandaharahap: {
    name: "Triananda Marsya Harahap",
    province: "Prov. Jambi",
    group_number: 3,
  },
  CodeKev: {
    name: "Clement Kevin Tanadi",
    province: "Prov. Jawa Barat",
    group_number: 3,
  },
  Imperion: {
    name: "Jefferson Abraham Dermawan",
    province: "Prov. Jawa Barat",
    group_number: 4,
  },
  MikiMiku: {
    name: "Jonathan Irvin Susanto",
    province: "Prov. Jawa Barat",
    group_number: 4,
  },
  MuhammadFakhryZaki: {
    name: "Muhammad Fakhry Zaki",
    province: "Prov. Jawa Barat",
    group_number: 3,
  },
  Mitty_123: {
    name: "Muhammad Fatih Irkham Mauludi",
    province: "Prov. Jawa Barat",
    group_number: 4,
  },
  Jesslyn_nathania19: {
    name: "Nathania Jesslyn",
    province: "Prov. Jawa Barat",
    group_number: 4,
  },
  harzuqi: {
    name: "Azzam Harzuqi",
    province: "Prov. Jawa Tengah",
    group_number: 5,
  },
  davinpwk: {
    name: "Davin Pandya Wala Khotob",
    province: "Prov. Jawa Tengah",
    group_number: 5,
  },
  EarlyOcean: {
    name: "Dhimas Early Oceandy",
    province: "Prov. Jawa Tengah",
    group_number: 3,
  },
  ffalih_: {
    name: "Faishal Falih",
    province: "Prov. Jawa Tengah",
    group_number: 3,
  },
  matthewhutama: {
    name: "Matthew Hutama Pramana",
    province: "Prov. Jawa Tengah",
    group_number: 3,
  },
  Sokuzo21: {
    name: "Muhammad Daffa Daneswara",
    province: "Prov. Jawa Tengah",
    group_number: 4,
  },
  NafisMath: {
    name: "Muhammad Nafis Habibi",
    province: "Prov. Jawa Tengah",
    group_number: 4,
  },
  William40: {
    name: "William Notowibowo",
    province: "Prov. Jawa Tengah",
    group_number: 3,
  },
  Abel_Dean: {
    name: "Abel Dean Eberhard",
    province: "Prov. Jawa Timur",
    group_number: 4,
  },
  eur: {
    name: "Annabel Kayla Talitha",
    province: "Prov. Jawa Timur",
    group_number: 5,
  },
  Michael_H: {
    name: "Michael Hartono",
    province: "Prov. Jawa Timur",
    group_number: 4,
  },
  lanangz: {
    name: "Muhammad Lanang Zalkifla Harits",
    province: "Prov. Jawa Timur",
    group_number: 5,
  },
  Raoul: {
    name: "Raoul Corrinthian",
    province: "Prov. Jawa Timur",
    group_number: 2,
  },
  lalaiing: {
    name: "Stella Ling Raharjo",
    province: "Prov. Jawa Timur",
    group_number: 2,
  },
  syfa: { name: "Syauqi Faza", province: "Prov. Jawa Timur", group_number: 5 },
  D4: {
    name: "Yazdi Dzunurrayn Ahmadi",
    province: "Prov. Kalimantan Selatan",
    group_number: 1,
  },
  Viole: {
    name: "Muhammad Qhoirul",
    province: "Prov. Kalimantan Tengah",
    group_number: 1,
  },
  just_06: {
    name: "Justin Stevenson Theodorus",
    province: "Prov. Kalimantan Timur",
    group_number: 2,
  },
  dhapin: {
    name: "Muhammad Dhafin Al Khairy",
    province: "Prov. Kalimantan Timur",
    group_number: 1,
  },
  Rayhanrizqy: {
    name: "Rayhan Rizky Ramadhan",
    province: "Prov. Kalimantan Utara",
    group_number: 1,
  },
  inizaza: {
    name: "Zakary Nareswara Tulus Sinudewangga Hatmadipura",
    province: "Prov. Kepulauan Bangka Belitung",
    group_number: 1,
  },
  Fon1as: {
    name: "Fatih Naufal Habibillah",
    province: "Prov. Lampung",
    group_number: 3,
  },
  vinren: {
    name: "Vincent Valentino Oei",
    province: "Prov. Maluku",
    group_number: 5,
  },
  Yazid_H: {
    name: "Yazid Aqila Haikal",
    province: "Prov. Nusa Tenggara Barat",
    group_number: 2,
  },
  Ntha: {
    name: "Nathalia Dwiyanti Talnoni",
    province: "Prov. Nusa Tenggara Timur",
    group_number: 1,
  },
  habib_rizqi: {
    name: "Habib Firjatulah Rizqi",
    province: "Prov. Papua Barat",
    group_number: 1,
  },
  adamnooriman: {
    name: "Adam Nooriman",
    province: "Prov. Papua Selatan",
    group_number: 1,
  },
  DhimasPutra: {
    name: "Dhimas Putra Sulistio",
    province: "Prov. Riau",
    group_number: 4,
  },
  felejunelus: {
    name: "Felesia Junelus",
    province: "Prov. Riau",
    group_number: 4,
  },
  bananade: {
    name: "Franklin Filbert Irwan",
    province: "Prov. Riau",
    group_number: 3,
  },
  HannanAfif: {
    name: "Hannan Afif Darmawan",
    province: "Prov. Riau",
    group_number: 3,
  },
  splaypancake: {
    name: "Ahmad Dzaky",
    province: "Prov. Sulawesi Barat",
    group_number: 1,
  },
  AdrielJ: {
    name: "Adriel Jansen Siahaya",
    province: "Prov. Sulawesi Selatan",
    group_number: 3,
  },
  Miko: {
    name: "Michael Widjaja",
    province: "Prov. Sulawesi Selatan",
    group_number: 3,
  },
  "Pangeran.mubaraq": {
    name: "Muhammad Pangeran Mubaraq",
    province: "Prov. Sulawesi Tenggara",
    group_number: 1,
  },
  IDika: {
    name: "Andika Pratama Putra Nugraha",
    province: "Prov. Sulawesi Utara",
    group_number: 2,
  },
  ExPrime_: {
    name: "Sidney C. J. Karundeng",
    province: "Prov. Sulawesi Utara",
    group_number: 2,
  },
  MoonLord: {
    name: "Ahmad Fauzan Putra",
    province: "Prov. Sumatera Barat",
    group_number: 3,
  },
  O_O: {
    name: "Bermulya Anugrah Putra",
    province: "Prov. Sumatera Barat",
    group_number: 5,
  },
  Leapofod: {
    name: "Ittihadi Ramadhan",
    province: "Prov. Sumatera Barat",
    group_number: 2,
  },
  Zilet: {
    name: "Christivan Komah",
    province: "Prov. Sumatera Selatan",
    group_number: 3,
  },
  Lenvil: {
    name: "Leroy Ben Orvill",
    province: "Prov. Sumatera Selatan",
    group_number: 2,
  },
  Lucia: {
    name: "Lucia Giovani",
    province: "Prov. Sumatera Selatan",
    group_number: 5,
  },
  Nothing123: {
    name: "Vergeo Valentino Gunawan",
    province: "Prov. Sumatera Selatan",
    group_number: 2,
  },
  andrewM: {
    name: "Andrew Matthian",
    province: "Prov. Sumatera Utara",
    group_number: 5,
  },
  Frolentika: {
    name: "Frolentika",
    province: "Prov. Sumatera Utara",
    group_number: 3,
  },
  JavierEW: {
    name: "Javier Enrique Wong",
    province: "Prov. Sumatera Utara",
    group_number: 3,
  },
  Kloce: {
    name: "Kloce Paul William Saragih",
    province: "Prov. Sumatera Utara",
    group_number: 4,
  },
  "32MDT077": {
    name: "Mikhael Danise Tumanggor",
    province: "Prov. Sumatera Utara",
    group_number: 2,
  },
};

// For OSN page only. Check "NEXT_HARDCODE_PROBLEM_ALIASES" variable in .env file.
const hardcodedProblemAliases = ["1A", "1B", "1C", "2A", "2B", "2C"];

export { usernames, usernameToUserDataMap, psetSlugs, hardcodedProblemAliases };
