// name, domaine, description, logo_src, stand, carte

/* export const data = [
  { name: "entreprise1", domaine: "domaine7" },
  { name: "entreprise2", domaine: "domaine5" },
  { name: "entreprise3", domaine: "domaine5" },
  { name: "entreprise4", domaine: "domaine10" },
  { name: "entreprise5", domaine: "domaine5" },
  { name: "entreprise6", domaine: "domaine10" },
  { name: "entreprise7", domaine: "domaine8" },
  { name: "entreprise8", domaine: "domaine1" },
  { name: "entreprise9", domaine: "domaine7" },
  { name: "entreprise10", domaine: "domaine10" },
  { name: "entreprise11", domaine: "domaine9" },
  { name: "entreprise12", domaine: "domaine2" },
  { name: "entreprise13", domaine: "domaine9" },
  { name: "entreprise14", domaine: "domaine4" },
  { name: "entreprise15", domaine: "domaine5" },
  { name: "entreprise16", domaine: "domaine8" },
  { name: "entreprise17", domaine: "domaine10" },
  { name: "entreprise18", domaine: "domaine9" },
  { name: "entreprise19", domaine: "domaine10" },
  { name: "entreprise20", domaine: "domaine8" },
]; */

export const data = [
    {
      name: "entreprise1",
      domaine: "domaine5",
      description: "description1",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 1,
      carte: "",
    },
    {
      name: "entreprise2",
      domaine: "domaine3",
      description: "description2",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 2,
      carte: "",
    },
    {
      name: "entreprise3",
      domaine: "domaine1",
      description: "description3",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 3,
      carte: "",
    },
    {
      name: "entreprise4",
      domaine: "domaine1",
      description: "description4",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 4,
      carte: "",
    },
    {
      name: "entreprise5",
      domaine: "domaine3",
      description: "description5",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 5,
      carte: "",
    },
    {
      name: "entreprise6",
      domaine: "domaine8",
      description: "description6",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 6,
      carte: "",
    },
    {
      name: "entreprise7",
      domaine: "domaine6",
      description: "description7",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 7,
      carte: "",
    },
    {
      name: "entreprise8",
      domaine: "domaine6",
      description: "description8",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 8,
      carte: "",
    },
    {
      name: "entreprise9",
      domaine: "domaine4",
      description: "description9",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 9,
      carte: "",
    },
    {
      name: "entreprise10",
      domaine: "domaine9",
      description: "description10",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 10,
      carte: "",
    },
    {
      name: "entreprise11",
      domaine: "domaine7",
      description: "description11",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 11,
      carte: "",
    },
    {
      name: "entreprise12",
      domaine: "domaine5",
      description: "description12",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 12,
      carte: "",
    },
    {
      name: "entreprise13",
      domaine: "domaine5",
      description: "description13",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 13,
      carte: "",
    },
    {
      name: "entreprise14",
      domaine: "domaine9",
      description: "description14",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 14,
      carte: "",
    },
    {
      name: "entreprise15",
      domaine: "domaine9",
      description: "description15",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 15,
      carte: "",
    },
    {
      name: "entreprise16",
      domaine: "domaine6",
      description: "description16",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 16,
      carte: "",
    },
    {
      name: "entreprise17",
      domaine: "domaine1",
      description: "description17",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 17,
      carte: "",
    },
    {
      name: "entreprise18",
      domaine: "domaine8",
      description: "description18",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 18,
      carte: "",
    },
    {
      name: "entreprise19",
      domaine: "domaine5",
      description: "description19",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 19,
      carte: "",
    },
    {
      name: "entreprise20",
      domaine: "domaine3",
      description: "description20",
      logo: require("../assets/image/buildings-regular-72.png"),
      stand: 20,
      carte: "",
    },
  ];
  
  function searchByName(searchName) {
    const searchData = [];
    data.forEach((entreprise) => {
      if (
        entreprise.name.toUpperCase().includes(searchName.toUpperCase().trim())
      ) {
        searchData.push(entreprise);
      }
    });
  
    return searchData;
  }
  
  function searchByDomaine(searchDomaine, searchedByName) {
    const searchData = [];
    searchedByName.forEach((entreprise) => {
      if (
        entreprise.domaine
          .toUpperCase()
          .includes(searchDomaine.toUpperCase().trim())
      ) {
        searchData.push(entreprise);
      }
    });
  
    return searchData;
  }
  
  export function search(searchName, searchDomaine) {
    const byName = searchByName(searchName);
    const searchResult = searchByDomaine(searchDomaine, byName);
  
    return searchResult;
  }
