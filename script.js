/* ================= PRODUCTOS ================= */

const productos=[
{nombre:"Carlota Limón",precio:35,img:"carlotalim.png"},
{nombre:"Carlota Café",precio:40,img:"cafe.png"},
{nombre:"Gelatina Fresa",precio:30,img:"fresa.png"},
{nombre:"Gelatina Mosaico",precio:30,img:"mosaico.png"},
{nombre:"Mousse de Galleta",precio:30,img:"galleta.png"},
{nombre:"Tapioca",precio:45,img:"tapioca.png"}
];

const grid=document.getElementById("grid");
const cartItems=document.getElementById("cartItems");

let carrito=[];

/* ================= RENDER PRODUCTOS ================= */

productos.forEach((p,i)=>{

grid.innerHTML+=`
<div class="product">
<img src="${p.img}">
<div class="info">
<h3>${p.nombre}</h3>
<div class="price">$${p.precio}</div>
<button class="btn" onclick="addCart(${i})">Agregar</button>
</div>
</div>
`;

});

/* ================= AGREGAR AL CARRITO ================= */

function addCart(index){

carrito.push(productos[index]);

actualizarCarrito();

}

/* ================= ACTUALIZAR CARRITO ================= */

function actualizarCarrito(){

cartItems.innerHTML="";

let total=0;

carrito.forEach((item,i)=>{

total+=item.precio;

cartItems.innerHTML+=`
<div class="cartItem">
${item.nombre} - $${item.precio}
<button onclick="eliminar(${i})">❌</button>
</div>
`;

});

cartItems.innerHTML+=`<h3>Total: $${total}</h3>`;

document.getElementById("count").innerText=carrito.length;

}

/* ================= ELIMINAR PRODUCTO ================= */

function eliminar(index){

carrito.splice(index,1);

actualizarCarrito();

}

/* ================= ABRIR/CERRAR CARRITO ================= */

function toggleCart(){

document.getElementById("cartPanel").classList.toggle("active");

}

/* ================= SLIDER DINAMICO ================= */

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function mostrarSlide(i){

slides.forEach(s=>s.classList.remove("active"));

slides[i].classList.add("active");

}

function siguiente(){

index++;

if(index>=slides.length){
index=0;
}

mostrarSlide(index);

}

function anterior(){

index--;

if(index<0){
index=slides.length-1;
}

mostrarSlide(index);

}

next.addEventListener("click",siguiente);
prev.addEventListener("click",anterior);

/* AUTO SLIDE */

setInterval(siguiente,4000);
