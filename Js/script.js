let phons = [
  { name: "iphone x", price: 400, qia: 10, total: 1 },
  { name: "iphone 15", price: 500, qia: 7, total: 19 },
  { name: "iphone 3", price: 600, qia: 15, total: 11 },
];

let showPhones = () => {
  let tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";
  phons.forEach((phone, index) => {
    tbody.innerHTML += `  
    <tr>
              <td>${index}</td>
              <td>${phone.name}</td>
              <td>${phone.price}$</td>
              <td>${phone.qia}</td>
              <td>${phone.price * phone.qia}$</td>
              <td>
              <button class="btn  btn-danger" onclick="RemovePhone(${index}) "> Remove Phone</button>
              </td>
              </tr>
    `;
  });
};

showPhones();

let addPhones = () => {
  let phoneName = document.getElementById("phoneName");
  let phonePrice = document.getElementById("phonePrice");
  let phoneQia = document.getElementById("phoneQia");
  let Complete = document.getElementById("Complete");
  let status;
  let nwephone = {
    name: phoneName.value,
    price: phonePrice.value,
    qia: phoneQia.value,
  };

  if (
    phoneName.value.trim() == "" ||
    phonePrice.value.trim() == "" ||
    phoneQia.value.trim() == ""
  ) {
    status = false;
  }

  if (
    phoneName.value.trim() == "" ||
    phonePrice.value.trim() == "" ||
    (phoneQia.value.trim() == "" && status == false)
  ) {
    Complete.style.display = "block";
  } else {
    status = true;
    phons.push(nwephone);
    showPhones();
    Complete.style.display = "none";
    phoneName.value = "";
    phonePrice.value = "";
    phoneQia.value = "";
  }
};

let RemovePhone = (indexDelete) => {
  let Q = confirm("You do well Remove a Phone?");
  if (Q == true) {
    phons.splice(indexDelete, 1);
    showPhones();
  } else {
    showPhones();
  }
};

let Edetindex = document.getElementById("EdetPhoneindex");
let EdetName = document.getElementById("EdetPhoneName");
let EdetPrice = document.getElementById("EdetPhonePrice");
let EdetQia = document.getElementById("EdetPhoneQia");
let CompleteData = document.getElementById("CompleteData");
let EdetPhone = () => {
  phons[Edetindex.value].name = EdetName.value;
  phons[Edetindex.value].price = EdetPrice.value;
  phons[Edetindex.value].qia = EdetQia.value;
  let statusEdet = true;

  if (statusEdet == true) {
    EdetName.value = "";
    EdetPrice.value = "";
    EdetQia.value = "";
    Edetindex.value = "";
    statusEdet = false;
  }
  showPhones();
};

let ImportData = () => {
  if (Edetindex.value.trim() == "") {
    CompleteData.style.display = "block";
  } else {
    EdetName.value = phons[Edetindex.value].name;
    EdetPrice.value = phons[Edetindex.value].price;
    EdetQia.value = phons[Edetindex.value].qia;
    CompleteData.style.display = "none";

  }
};
