const psetSlugs = ["osn-2022", "ksn-2021", "ksn-2020", "osn-2019", "osn-2018"];

const usernames = ["kal_el", "fushar", "faishol01"];

const usernameToUserDataMap = {
  kal_el: { name: "Samuel", province: "Prov. DKI Jakarta", groupNumber: 1 },
  fushar: { name: "Ashar", province: "Prov. Jawa Barat", groupNumber: 2 },
  faishol01: { name: "Faishol", province: "Prov. Jawa Timur", groupNumber: 3 },
};

// For OSN page only. Check "NEXT_HARDCODE_PROBLEM_ALIASES" variable in .env file.
const hardcodedProblemAliases = ["1A", "1B", "1C", "2A", "2B", "2C"];

export { usernames, usernameToUserDataMap, psetSlugs, hardcodedProblemAliases };
