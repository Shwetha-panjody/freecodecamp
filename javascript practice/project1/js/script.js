let addedproduct = [];
const alldishs = [
  {
    id: '1',
    name: "tasty food",
    image: "images/burger1.png",
    price: 15,
    star: 4,
    count: 0,
  },
  {
    id: '2',
    name: "tasty food",
    image: "images/icecream1.png",
    price: 11.99,
    star: 4,
    count: 0,
  },
  {
    id: '3',
    name: "tasty food",
    image: "images/burger1.png",
    price: 19,
    star: 4,
    count: 0,
  },
  {
    id: '4',
    name: "tasty food",
    image: "images/icecream1.png",
    price: 26,
    star: 4,
    count: 0,
  },
  {
    id: '5',
    name: "tasty food",
    image: "images/burger1.png",
    price: 5,
    star: 4,
    count: 0,
  },
  {
    id: '6',
    name: "tasty food",
    image: "images/icecream1.png",
    price: 50,
    star: 4,
    count: 0,
  },
  {
    id: '7',
    name: "delicious food",
    image: "images/protine bowl3.png",
    price: 1.99,
    star: 3,
    count: 0,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium."
  },
  {
    id: '8',
    name: "delicious food",
    image: "images/fried ckin no bg.png",
    price: 8.99,
    star: 3,
    count: 0,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium."
  },
  {
    id: '9',
    name: "delicious food",
    image: "images/protine bowl2.png",
    price: 22.4,
    star: 3,
    count: 0,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium."
  },
  {
    id: '10',
    name: "delicious food",
    image: "images/pizza-removebg-preview.png",
    price: 6.9,
    star: 3,
    count: 0,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium."
  },
  {
    id: '11',
    name: "delicious food",
    image: "images/ramen bowl 2.png",
    price: 9,
    star: 3,
    count: 0,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium."
  }
];

function totalProductInCart()  //returns only product which has qty > 0
{
  let count = 0;
  for (let i = 0; i < alldishs.length; i++) {
    if (alldishs[i].count > 0) {
      count += alldishs[i].count;
    }
  }
  return count;
}


let pd = 6;
const populardishes = () => {
  for (let i = 0; i < pd; i++) {
    let item = alldishs[i];

    document.getElementsByClassName('box-container')[0].innerHTML +=
      `<div class="box">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
                <img src="${item.image}" alt="">
                <h3>${item.name}</h3>
                <div class="starts">
                    <i class="fas fa-star ${item.star > 0 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 1 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 2 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 3 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 4 ? 'fa-gold ' : 'fa-empty'}"></i>
                </div>
                <span class="price">$${item.price}</span>
                <button class="btn" id="dish${item.id}" onclick="addtocart(${item.id - 1})">add to cart</button>
            </div>`
  }
}
populardishes();

const todayspecial = () => {
  for (let i = pd; i < alldishs.length; i++) {
    let item = alldishs[i];

    document.getElementsByClassName('box-container')[1].innerHTML +=
      `<div class="box">
                <div class="image">
                    <img src="${item.image}" alt="">
                    <a href="" class="fas fa-heart"></a>
                </div>

                <div class="content">
                    <div class="stars">
                    <i class="fas fa-star ${item.star > 0 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 1 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 2 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 3 ? 'fa-gold' : 'fa-empty'}"></i>
                    <i class="fas fa-star ${item.star > 4 ? 'fa-gold ' : 'fa-empty'}"></i>
                    </div>
                    <h3>${item.name}</h3>
                    <p>${item.content}</p>
                    <button class="btn" id="dish${item.id}" onclick="addtocart(${item.id - 1})">add to cart</button>
                    <span class="price">$${item.price}</span>
                </div>
            </div>`
  }
}
todayspecial();

function addtocart(cardid) // cardid = index of arr-obj
{
  event.preventDefault();
  // addedproduct.push(cardid);
  alldishs[cardid].count = alldishs[cardid].count + 1;
  document.getElementById('cartitem').innerHTML = totalProductInCart();
  // alert("   counter "+alldishs[cardid].count);
}


// min max order date ---------------------------------------------------------

var today = new Date().toISOString().slice(0, 16);
document.getElementsByName("ordertime")[0].min = today;

var todaysdate = new Date();
var newtodaysdate = todaysdate.setMonth(todaysdate.getMonth() + 1);  //returns date in numbers

var maxdate = new Date(newtodaysdate).toISOString().slice(0, 16);
document.getElementsByName("ordertime")[0].max = maxdate;

// --------------------------------------------------------------------------------

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
//---------------------------------------------------------------------------
menu.onclick = () => {
  menu.classList.toggle('fa-times');

  navbar.classList.toggle('active');
}
//---------------------------------------------------------------------------
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active'); 
}

//---------------------------------------------------------------------------
document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}
function emptycart() {
  //no item in cart yet
  document.getElementById("mainbgcart").innerHTML = `
  <div class="cartheding">
    <div>
        <h1>Selected items</h1>
        <i class="fas fa-times" id="close2"></i>
    </div>
    
  </div>
  
  <div class="no-item-cart">
      <img src="images/output-onlinegiftools.gif" style="width:20%" alt="">
      <span>NO ITEMS</span>
    </div>`;

    document.querySelector('#close2').onclick = () => {

      document.documentElement.style.overflowY = 'auto';
      document.querySelector('#mainbgcart').classList.remove('active');
  
    }
}
//---------------------------------------------------------------------------
document.querySelector('#cart-icon').onclick = () => {
  document.documentElement.style.overflowY = 'hidden';
  document.querySelector('#mainbgcart').classList.toggle('active');
  emptycart();
  
  if (totalProductInCart() == 0) {
    emptycart();
    document.querySelector('#close2').onclick = () => {

      document.documentElement.style.overflowY = 'auto';
      document.querySelector('#mainbgcart').classList.remove('active');

    }
  }
  else {
    openaddeditem();
  }
}

function generateitems(i, type) {
  if (type == "added") {  //first time items added to cart
    document.getElementsByClassName("bgcart")[0].innerHTML +=
      `<div class="cartitem" id="added_dish${alldishs[i].id}">
            <h3>${alldishs[i].name}</h3>
            <div class="products">
                <img src="${alldishs[i].image}" alt="">
                <label for="">${alldishs[i].price} X ${alldishs[i].count}</label>
                <button class="btn" id="remove${alldishs[i].id}" onclick="removefromcart(${alldishs[i].id - 1})">remove</button>
                <label for="">${Math.round((alldishs[i].price * alldishs[i].count) * 100)/100}</label>
            </div>
        </div>`;
    grandtotal += Math.round((alldishs[i].price * alldishs[i].count) * 100)/100
    
  }
  else if (type == "remove") {   //removed from cart
    if (alldishs[i].count == 0) {
      console.log(alldishs[i].count);
      if (totalProductInCart() == 0) {  //no item in cart
        emptycart();
      }
      else {
        document.getElementById("added_dish" + alldishs[i].id).innerHTML = "";
        document.getElementById("added_dish" + alldishs[i].id).style.display = "none";
        // alldishs[cardid].count = alldishs[cardid].count - 1;

        // grandtotal -= Math.round(alldishs[i].price * 100)/100;
        grandtotal -= alldishs[i].price;
          grandtotal = grandtotal.toFixed(2);

        document.getElementsByClassName('total')[0].innerHTML = 
          `<label for="">Total Amount</label>
            <label for="" id="total">$${grandtotal}</label>`;
      }

      
    }
    else {
      document.getElementById("added_dish" + alldishs[i].id).innerHTML =
        `
            <h3>${alldishs[i].name}</h3>
            <div class="products">
                <img src="${alldishs[i].image}" alt="">
                <label for="" >${alldishs[i].price} X ${alldishs[i].count}</label>
                <button class="btn" id="remove${alldishs[i].id}" onclick="removefromcart(${alldishs[i].id - 1})">remove</button>
                <label for="">${Math.round((alldishs[i].price * alldishs[i].count) * 100)/100}</label>
            </div>`;
            grandtotal -= alldishs[i].price;
          grandtotal = grandtotal.toFixed(2)

          document.getElementsByClassName('total')[0].innerHTML = 
          `<label for="">Total Amount</label>
            <label for="" id="total">$${grandtotal}</label>`;
    }

    

  }

}


let grandtotal = 0;
function openaddeditem() {
  if (grandtotal != 0) {
    grandtotal = 0;
  }
  document.getElementById("mainbgcart").innerHTML = `
    <div class="cartheding">
      <div>
          <h1>Selected items</h1>
          <i class="fas fa-times" id="close2"></i>
      </div>
    </div>
    <div class="bgcart">

    </div>`;

  for (let i = 0; i < alldishs.length; i++) {
    if (alldishs[i].count != 0) {
      generateitems(i, "added");
    }
  }
  document.getElementById("mainbgcart").innerHTML +=
    `<div class="total">
            <label for="">Total Amount</label>
            <label for="" id="total">$${grandtotal}</label>
        </div>`;

  document.querySelector('#close2').onclick = () => {

    document.documentElement.style.overflowY = 'auto';
    document.querySelector('#mainbgcart').classList.remove('active');

  }

}
//-----------------------------------------------------------------
function removefromcart(cardid) {
  event.preventDefault();
  // addedproduct.pop();
  alldishs[cardid].count = alldishs[cardid].count - 1;
  if (totalProductInCart() == 0) // page refreshing
  {
    emptycart();
  }
  else {
    generateitems(cardid, "remove");

  }
  document.getElementById('cartitem').innerHTML = totalProductInCart();

}
//-------------------------------------------------------------
































//---------------------------------------------------------------------------

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});