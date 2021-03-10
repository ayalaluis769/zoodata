const zoo = [
  {
    id: { $oid: "60461f6efc13ae2ea6000000" },
    animal: "Painted stork",
    "scientific name": "Mycteria leucocephala",
    amount: 9,
    location: "Philadelphia",
  },
  {
    id: { $oid: "60461f6efc13ae2ea6000001" },
    animal: "Barbet, levaillant's",
    "scientific name": "Trachyphonus vaillantii",
    amount: 46,
    location: "Velikooktyabr’skiy",
  },
  {
    id: { $oid: "60461f6efc13ae2ea6000002" },
    animal: "Oryx, fringe-eared",
    "scientific name": "Oryx gazella callotis",
    amount: 56,
    location: "Registro",
  },
  {
    id: { $oid: "60461f6efc13ae2ea6000003" },
    animal: "Gila monster",
    "scientific name": "Heloderma horridum",
    amount: 8,
    location: "Trashigang",
  },
  {
    id: { $oid: "60461f6efc13ae2ea6000004" },
    animal: "Dove, laughing",
    "scientific name": "Streptopelia senegalensis",
    amount: 3,
    location: "Seattle",
  },
  {
    id: { $oid: "60461f6efc13ae2ea6000005" },
    animal: "Malagasy ground boa",
    "scientific name": "Acrantophis madagascariensis",
    amount: 12,
    location: "Yako",
  },
  {
    id: { $oid: "60461f6efc13ae2ea6000006" },
    animal: "Dunnart, fat-tailed",
    "scientific name": "Smithopsis crassicaudata",
    amount: 23,
    location: "Arvidsjaur",
  },
  {
    id: { $oid: "60461f6efc13ae2ea6000007" },
    animal: "Otter, african clawless",
    "scientific name": "Aonyx capensis",
    amount: 71,
    location: "Zhize",
  },
];

const zooElements = zoo.map((zoo) => {
    const attributeList = document.createElement("ol");
    const idElement = document.createElement("li");
    const animalElement = document.createElement("li");
    const amountElement = document.createElement("li");
    const locationElement = document.createElement("li");

    idElement.innerText = `ID Tag: ${zoo.id.$oid}`;
    animalElement.innerText = `Animal: ${zoo.animal}`;
    amountElement.innerText = `Amount: ${zoo.amount}`;
    locationElement.innerText = `Location: ${zoo.location}`;

    attributeList.appendChild(idElement);
    attributeList.appendChild(animalElement);
    attributeList.appendChild(amountElement);
    attributeList.appendChild(locationElement);

    return attributeList;
});

document.addEventListener("DOMContentLoaded", (event) =>{
    const zoo = document.querySelector(".zoo");
    zooElements.forEach((val) => zoo.appendChild(val));
});