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

let carrito=JSON.parse(localStorage.getItem("carrito")) || [];

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

let producto=productos[index];

let existente=carrito.find(p=>p.nombre===producto.nombre);

if(existente){

existente.cantidad++;

}else{

carrito.push({...producto,cantidad:1});

}

guardar();

mostrarToast();

}


/* ================= GUARDAR LOCAL ================= */

function guardar(){

localStorage.setItem("carrito",JSON.stringify(carrito));

actualizarCarrito();

}

/* ================= ACTUALIZAR CARRITO ================= */

function actualizarCarrito(){

cartItems.innerHTML="";

let total=0;

carrito.forEach((item,i)=>{

total+=item.precio*item.cantidad;

cartItems.innerHTML+=`

<div class="cartItem">

<div>
${item.nombre}<br>
$${item.precio}
</div>

<div class="qty">

<button onclick="restar(${i})">-</button>

<span>${item.cantidad}</span>

<button onclick="sumar(${i})">+</button>

<button onclick="eliminar(${i})">🗑</button>

</div>

</div>
`;

});

document.getElementById("total").innerText="Total: $"+total;

document.getElementById("count").innerText=
carrito.reduce((acc,p)=>acc+p.cantidad,0);

}

function sumar(index){

carrito[index].cantidad++;

guardar();

}

function restar(index){

carrito[index].cantidad--;

if(carrito[index].cantidad<=0){

carrito.splice(index,1);

}

guardar();

}

function eliminar(index){

carrito.splice(index,1);

guardar();

}


/* ================= ABRIR/CERRAR CARRITO ================= */

function toggleCart(){

document.getElementById("cartPanel").classList.toggle("active");

document.getElementById("overlay").classList.toggle("active");

}

/* ================= COMPRA WHATSAPP ================= */

function comprarWhatsapp(){

if(carrito.length===0){

alert("Tu carrito está vacío");

return;

}

let mensaje="Hola, quiero pedir:%0A";

let total=0;

carrito.forEach(item=>{

mensaje+=`- ${item.nombre} x${item.cantidad} = $${item.precio*item.cantidad}%0A`;

total+=item.precio*item.cantidad;

});

mensaje+=`Total: $${total}`;

let numero="5210000000000"; // cambia por tu número

window.open(`https://wa.me/${numero}?text=${mensaje}`);

}

/* ================= INICIO ================= */

actualizarCarrito();

function mostrarToast(){

const toast=document.getElementById("toast");

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

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


function mostrarToast(){

const toast=document.getElementById("toast");

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

}


/* ================= FORMULARIO CLIENTES ================= */

const form = document.getElementById("formCliente");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const cliente = {

nombre: document.getElementById("nombre").value,
telefono: document.getElementById("telefono").value,
email: document.getElementById("email").value,
direccion: document.getElementById("direccion").value,
mensaje: document.getElementById("mensaje").value,
fecha: new Date().toLocaleString()

};

// Obtener base existente
let baseClientes = JSON.parse(localStorage.getItem("clientes")) || [];

// Guardar nuevo cliente
baseClientes.push(cliente);

localStorage.setItem("clientes", JSON.stringify(baseClientes));

alert("Datos enviados correctamente 🍓");

form.reset();

});

}

/* ================= MODAL FORMULARIO ================= */

function abrirFormulario(){

document.getElementById("modalFormulario").classList.add("active");

}

function cerrarFormulario(){

document.getElementById("modalFormulario").classList.remove("active");

}





