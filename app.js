// const num = [40,41,42,43,44,45,46,47,48,49,50];
// let filteredNum = num.filter((num)=> num > 40);
// console.log(filteredNum);
const contactArray = [
  {
    id: 1,
    name: "Sadaf Shahab",
    gmail: "sadafshahab123@yahoo.com",
  },
  {
    id: 2,
    name: "Ramla Eman",
    gmail: "whisper123@gmail.com",
  },
  {
    id: 3,
    name: "Maheen Ashraf",
    gmail: "veil123@gmail.com",
  },
  {
    id: 4,
    name: "Yousra Mairaj",
    gmail: "yousra123@gmail.com",
  },
  {
    id: 4,
    name: "Tayyaba",
    gmail: "tayyaba123@gmail.com",
  },

];

// const person = [
//   {
//     name: "Sadaf Shahab",
//     fatherName: "Muhammad Shahab",
//   },
//   {
//     name: "Fatima Shahid",
//     fatherName: "Shahid Ali",
//     batch: "Batch 2024",
//   },
//   {
//     name: "Ramla",
//     fatherName: "Khan",
//     batch: "Batch 2024",
//   },
//   {
//     name: "Maheen",
//     fatherName: "Ahmed",
//     batch: "Batch 2024",
//   },
//   {
//     name: "Aleena",
//     fatherName: "Faraz",
//     batch: "Batch 2024",
//   },
// ];

// for (const data of person) {
//   console.log(data);
// }
// const {id , name , email} = contactArray
// contactDiv.innerHTML = "<h1>Hi</h1>";
// let childappend =contactList.appendChild(contactDiv)
// console.log(contactDiv);
// console.log(childappend);
function renderContacts(contactArray) {
  const contactList = document.getElementById("contact-list");
  contactList.innerHTML = "";
  for (const contact of contactArray) {
    let contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
    <h2 class = "person">${contact.name}</h2>
    <p class = "gmail">${contact.gmail}</p>
    `;
    contactList.appendChild(contactDiv);
  }
}

function filterContacts() {
  const filterInput = document
    .querySelector(".filterInput")
    .value.toLowerCase();
  const filterContacts = contactArray.filter((contact) =>
    contact.name.toLowerCase().includes(filterInput)
  );
  renderContacts(filterContacts);
}
renderContacts(contactArray);
let filterBtn = document.querySelector(".filterBtn");
filterBtn.addEventListener("click", filterContacts);
