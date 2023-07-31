// #CRUD Map
  // getTotal
  // ## C
    // create product
    // save to local storage
    // clear inputs
  // ## R
    // read
    // count
  // ## U
    // update
  // ## D
    // delete
    // search
    // clean data
// -----------------------------

// catch elements
let title = document.querySelector('.title');
let price = document.querySelector(".price");
let taxes = document.querySelector(".taxes");
let ads = document.querySelector(".ads");
let discount = document.querySelector(".discount");
let total = document.querySelector("#total");
let count = document.querySelector(".count");
let category = document.querySelector(".category");
let create = document.querySelector(".create");
let search = document.querySelector(".search");
let searhByTitleBtn = document.querySelector(".titleSearch");
let searhByCategoryBtn = document.querySelector(".categorySearch");


let inputsArr = [title, price, taxes, ads, discount, total, count, category, create, search, searhByTitleBtn, searhByCategoryBtn]



// get total
function getTotal () {
  if (price.value != '') {
    total.innerHTML = (+price.value + +taxes.value + +ads.value) - +discount.value
    total.style.backgroundColor = "red"
  } else {
    total.innerHTML = "0"
    total.style.backgroundColor = "green"
  }
}
// create

let productsData;
if (localStorage.products !== null) {
  productsData = JSON.parse(localStorage.products)
} else {
  productsData = [];
}

create.onclick = function() {
  let newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    category: category.value,
  }
  productsData.push(newProduct)
  console.log(productsData);

  // save to local storage
  localStorage.setItem("products", JSON.stringify(productsData))

  clearInputs()
}


// clear inputs

function clearInputs() {
  title.value = '';
  price.value = '';
  taxes.value = '';
  ads.value = '';
  discount.value = '';
  count.value = '';
  category.value = '';
}






