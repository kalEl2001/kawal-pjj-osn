const psetSlugs = ["osn-2022", "ksn-2021", "ksn-2020", "osn-2019", "osn-2018"];

const usernames = ["kal_el", "fushar", "faishol01"];

const usernameToUserDataMap = {
  kal_el: { name: "Samuel", province: "Prov. DKI Jakarta" },
  fushar: { name: "Ashar", province: "Prov. Jawa Barat" },
  faishol01: { name: "Faishol", province: "Prov. Jawa Timur" },
};

// For OSN page only. Check "NEXT_HARDCODE_PROBLEM_ALIASES" variable in .env file.
const hardcodedProblemAliases = ["1A", "1B", "1C", "2A", "2B", "2C"];

export { usernames, usernameToUserDataMap, psetSlugs, hardcodedProblemAliases };
