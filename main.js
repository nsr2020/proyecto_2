import './style.css'
/* import './style.css' */

const productos = [
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700834561/Casa%20de%20comida/Spanish_Ham_Croquettes_Croquetas_de_Jam%C3%B3n_Serrano_-_Spanish_Sabores_wdp6lq.jpg",
    nombre: "Croquetas de Jamón",
    tipo: "Entrantes",
    precio: 7,
    vegetariano: false,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700834708/Casa%20de%20comida/Lasa%C3%B1a_de_calabac%C3%ADn_x8qpyt.jpg",
    nombre: "Lasaña Vegetal",
    tipo: "Entrantes",
    precio: 10,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700834821/Casa%20de%20comida/Easy_Chicken_Quesadillas_-_Yummy_Addiction_pbjshl.jpg",
    nombre: "Quesadillas",
    tipo: "Entrantes",
    precio: 7,
    vegetariano: false,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700834915/Casa%20de%20comida/Receta_de_ensaladilla_rusa_pv2rku.jpg ",
    nombre: "Ensaladilla Rusa",
    tipo: "Entrantes",
    precio: 8,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700834960/Casa%20de%20comida/Salmorejo_de_manzana_sin_pan_wtnqcz.jpg ",
    nombre: "Salmorejo",
    tipo: "Entrantes",
    precio: 7,
    vegetariano: false,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700840766/Casa%20de%20comida/ENSALADA_CON_MANZANA_QUESO_DE_CABRA_Y_NUECES_eulukx.jpg",
    nombre: "Ensalada Espinacas",
    tipo: "Entrantes",
    precio: 9,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700840985/Casa%20de%20comida/Bistec_en_cazuela_msnfhs.jpg",
    nombre: "Bistec en cazuela",
    tipo: "Principales",
    precio: 16,
    vegetariano: false,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841048/Casa%20de%20comida/Chipirones_en_su_tinta_con_arroz_kznf1s.jpg",
    nombre: "Arroz con chipirones",
    tipo: "Principales",
    precio: 10,
    vegetariano: false,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700923915/Casa%20de%20comida/1_4M_views_37K_reactions___Ensalada_de_at%C3%BAn___Ensalada_de_at%C3%BAn_extremadamente_deliciosa___By_Cocina_Guerrerense___Facebook_aellp5.jpg ",
    nombre: "Ensalada de atún",
    tipo: "Principales",
    precio: 10,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841256/Casa%20de%20comida/ENTRA%C3%91A_DE_TERNERA_A_LA_PARRILLA_CON_VERDURAS_y7zlhw.jpg",
    nombre: "Parrillada de carne",
    tipo: "Principales",
    precio: 15,
    vegetariano: false,
    boton:"🛒"
  },
  {img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841306/Casa%20de%20comida/WOK_DE_VERDURAS_CON_GAMBAS_Y_NOODLES_DE_ARROZ_receta_saludable_con_un_toque_oriental_cfoyvv.jpg",
    nombre: "Wok de gambas",
    tipo: "Principales",
    precio: 6,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841364/Casa%20de%20comida/Receta_casero_de_huevos_rotos_con_jam%C3%B3n_avqdyv.jpg ",
    nombre: "Huevos Rotos",
    tipo: "Principales",
    precio: 13,
    vegetariano: false,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841440/Casa%20de%20comida/Tarta_de_queso_para_Thermomix_sin_horno_Receta_de_Vicente_Moliner_itrvzq.jpg",
    nombre: "Tarta de queso",
    tipo: "Postres",
    precio: 6,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841497/Casa%20de%20comida/Como_Hacer_Brownie_de_Chocolate_Casero__Receta_Original_-_I_Cake_4_U_jb47a5.jpg",
    nombre: "Brownie de Chocolate",
    tipo: "Postres",
    precio: 6,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841561/Casa%20de%20comida/Copas_de_2_3_4_o_5_bolas_para_tomar_en_yaqqxq.jpg ",
    nombre: "Surtido de helados",
    tipo: "Postres",
    precio: 5,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841618/Casa%20de%20comida/Tarta_de_Santiago_-_Megasilvita_fvdiik.jpg",
    nombre: "Tarta de Santiago",
    tipo: "Postres",
    precio: 5,
    vegetariano: false,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841670/Casa%20de%20comida/Los_30_mejores_vinos_Ribera_del_Duero_ba5blb.jpg",
    nombre: "Vino de Rioja",
    tipo: "Vinos",
    precio: 13,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841757/Casa%20de%20comida/Estos_son_los_mejores_vinos_del_mundo_bueno_los_m%C3%A1s_caros_uqz96c.jpg",
    nombre: "Vino de Ribera",
    tipo: "Vinos",
    precio: 12,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700924434/Casa%20de%20comida/Vino_blanco_Jos%C3%A9_Pariente_Verdejo_Rueda_nrailc.jpg",
    nombre: "Vino de Rueda",
    tipo: "Vinos",
    precio: 11,
    vegetariano: true,
    boton:"🛒"
  },
  {
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1700841886/Casa%20de%20comida/5_vinos_rosados_por_menos_de_200_frescos_dulces_y_deliciosos_ojeyib.jpg",
    nombre: "Vino Rosado",
    tipo: "Vinos",
    precio: 12,
    vegetariano: true,
    boton:"🛒"
  },
  
];
const reviews =[
  {
    img:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1700958865/Casa%20de%20comida/8c31d2ec-88ad-47a5-9df9-2a74ae6746ea_qsguhg.jpg",
    name:"Don Ramon",
    valoracion:"Comí una lasaña y estaba muy buena!!! Sin duda voy a repetir.",
    recomendable:"😀"
  },
  {
    img:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1700958684/Casa%20de%20comida/O_QUE_%C3%89_CARICATURA____Portal_O_Ralho_e2zqfw.jpg",
    name:"Anne Hathaway",
    valoracion:"Lo mejor es el salmorejo, me ha encantado!!!",
    recomendable:"😋"
  },
  {
    img:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1700964637/Casa%20de%20comida/4056a80b-5be2-43d8-8c0c-1e48913119e4_y6r8j5.jpg",
    name:"Will Smith",
    valoracion:"Pedí un wok y estaba bueno, aunque tardaron mucho en servirlo.",
    recomendable:"😐"
  },
  {
    img:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1700959079/Casa%20de%20comida/Caricature_pggbew.jpg",
    name:"Angelina Jolie",
    valoracion:"El postre de tarta de queso dejó mucho que desear, se notaba que no era casero.",
    recomendable:"😒"
  },
]
const contactos =[
  {
    titulo:"¡¡No dudes en probar toda nuestra carta, es deliciosa!!",
    telefono: "912345678",
    email:"comida@comida-casera.com",
    animacion:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1701007230/Casa%20de%20comida/580b57fcd9996e24bc43c428_hho6k2.png",
    rrss: "Nos puedes seguir en nuestras redes sociales",
    img_fb:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1698927158/facebook_1_ae1mqf.png",
    img_in:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1698927338/instagram_mwzyd8.png",
    img_tw:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1698926985/gorjeo_rrtmcg.png",
    img_yt:"https://res.cloudinary.com/dnju3aw4b/image/upload/v1698927256/youtube_ofzkpo.png"
  }
]
const TIPOS = [] //Esto lo creamos para poder hacer una funcion y que los tipos no se repitan en el select

let SELECT = "";
let VALOR = 0;

//funcion de duplicado
const fillTipos = (tipos) =>{
  TIPOS.splice(0); // limpiamos el array por completo desde la posicion 0
  for( const tipo of tipos){
    if(!TIPOS.includes(tipo.tipo)){
        TIPOS.push(tipo.tipo)
      }
  }
  
}
fillTipos(productos)
//--------------------------------------filtos para el select para buscar por precio y por cambio de opcion



// Función para aplicar filtros dinámicos
/* const filtroSelect = () => {
  const filtered = productos.filter(producto => SELECT === '' || SELECT === producto.tipo)
console.log(filtered);
  createProductos(filtered);
};


const filtroPrecio = () => {
  const filtered = productos.filter(producto => VALOR === '' || producto.precio <= VALOR);
  console.log(filtered);
  createProductos(filtered);
}; */
// Función de filtro única
const filtro = (valor, tipo) => {
  if (tipo === "select") {
    const filtered = productos.filter(
      (producto) => valor === "" || valor === producto.tipo
    );
    console.log(filtered);
    createProductos(filtered);
  } else if (tipo === "precio") {
    const filtered = productos.filter(
      (producto) => valor === "" || producto.precio <= parseInt(valor)
    );
    
    createProductos(filtered);
  }
};


const filtroSelectAll = () =>{
  createProductos()
}

//Funcion para crear el navbar
const createNavBar = () => {
  
const header = document.querySelector(".header")
const img = document.createElement("img")
const h1 = document.createElement("h1")
const ul = document.createElement("ul")
const babrir = document.querySelector(".babrir")
const bcerrar = document.querySelector(".bcerrar")
const nav = document.querySelector("#nav")

img.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1701007442/Casa%20de%20comida/58a750d55ad0fd0b7fdd3375_wyeyql.png"
img.alt = "logo"
img.classList.add("claseimg")

h1.textContent ="Cocina de Siempre"
h1.classList.add("claseh1")
img.classList.add("imgnavbar")
ul.classList.add("claseul")

nav.style.display ="none"


const items = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Productos', href: '#productos' },
  { text: 'Comentarios', href: '#comentarios' },
  { text: 'Contacto', href: '#contacto' }
];

//creación de el contenido de los li>a
items.forEach(function (item) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.href;
  a.textContent = item.text;
a.classList =("clasea")
  
  ul.appendChild(li);
  li.appendChild(a);
});

// Agregar elementos al navbar
header.appendChild(img);
header.appendChild(h1);
header.appendChild(ul);



//EvenListener
babrir.addEventListener("click", ()=>{
  nav.style.display = "flex"
  babrir.style.display="none"
  bcerrar.style.display="flex"
  header.style.justifyContent= "flex-start";
})
bcerrar.addEventListener("click", () =>{
nav.style.display = "none"
bcerrar.style.display = "none"
babrir.style.display = "flex"
})
}





//funcion del aside()
const createAside = () => {
  const contacarro = document.querySelector(".contacarro")
  const divAside = document.querySelector(".container-filtros")
  const articulo = document.querySelector("articulo")
  const selectAside = document.createElement("select")
   const labelAside = document.createElement("label")
  const inputAside = document.createElement("input")
  const botonInput = document.createElement("button")
  const botonAside = document.createElement("button")

  selectAside.classList.add("selectAside")
  labelAside.classList.add("labelAside")
  inputAside.classList.add("inputAside")
  botonInput.classList.add("botonInput")
  botonAside.classList.add("botonAside")
  botonAside.textContent=("BORRAR")
  labelAside.textContent = "Precio"
  botonInput.textContent = ("🔎")

 // Agregar la opción "Todos" al principio del select
 const optionTodos = document.createElement("option")
 optionTodos.value = "Todos"
 optionTodos.textContent = "Todos"
 selectAside.appendChild(optionTodos)
  

for( const tipo of TIPOS){ //DE ESTA FORMA NO SE REPITEN LOS TIPOS EN LAS OPCIONES DEL SELECT
  const option = document.createElement("option")
  option.value = tipo
  option.textContent = tipo

  selectAside.appendChild(option)
}

 divAside.appendChild(selectAside)  
divAside.appendChild(labelAside)
divAside.appendChild(inputAside)
divAside.appendChild(botonInput)
divAside.appendChild(botonAside)

//addEven para limpiar los filtros

botonAside.addEventListener("click", ()=>{
  inputAside.value = ""
  contacarro.value = ""
  selectAside.value = "Todos"
  createProductos()
})
/* selectAside.addEventListener("change", (e) => {
  SELECT = e.target.value
  filtroSelect()
}) */
/* botonInput.addEventListener("click", () => filtroPrecio(inputAside.value)) */
document.querySelector(".selectAside").addEventListener("change", (event) => {
  SELECT = event.target.value;
  if (SELECT === "Todos"){
    filtroSelectAll()
  }else{
  filtro(SELECT, "select")
  }
});

/* document.querySelector(".botonInput").addEventListener("click", () => {
  VALOR = parseInt(document.querySelector(".inputAside").value);
  filtroPrecio();
}); */
document.querySelector(".botonInput").addEventListener("click", () => {
  const VALOR = document.querySelector(".inputAside").value;
  filtro(VALOR, "precio");
});

}

//funcion para inyectar todos los productos al main
const createProductos = (productosMostrar = productos) => {
const containerSection = document.querySelector(".menu")
const contacarro = document.querySelector(".contacarro")

containerSection.innerHTML = ""


productosMostrar.forEach(function(producto) {
  
  let articulo = document.createElement("article")
  let divImg = document.createElement("div")
  let img = document.createElement("img")
  let nombre = document.createElement("h4")
  let precio = document.createElement("p")
  let vegano = document.createElement("p")
  let btn = document.createElement("button")

  
  img.src = producto.img
  nombre.textContent = producto.nombre
  precio.textContent = `${producto.precio} €`
  vegano.textContent = "Vegetariano: " + (producto.vegetariano ? "✅" : "❌")
  btn.textContent = producto.boton

  articulo.classList.add("articulo")
  
  divImg.classList.add("divImg")
  img.classList.add("img")
  nombre.classList.add("nombre")
  precio.classList.add("precio")
  vegano.classList.add("vegano")
  btn.classList.add("botonSelect")


  divImg.appendChild(img)
  articulo.appendChild(divImg)
  articulo.appendChild(nombre)
  articulo.appendChild(precio)
  articulo.appendChild(btn)
  articulo.appendChild(vegano)
  containerSection.appendChild(articulo)
  // evenlistener para el contador del carrito
 btn.addEventListener("click", () => {
    
    let valorActual = parseInt(contacarro.value);
    if (!isNaN(valorActual)) {
     
      contacarro.value = valorActual + 1;
    } else {
      
      contacarro.value = 1;
    }
  });
 
})

}
//funcion para inyectar los comentarios de los clientes
const createComments = () => { 
  const containerComments = document.querySelector(".comments")
reviews.forEach(function(review) {
  let article_cm = document.createElement("article")
  let divImg_cm = document.createElement("div")
  let img_cm = document.createElement("img")
  let nombre_cm = document.createElement("h4")
  let valoracion_cm = document.createElement("p")
  let recomendable_cm = document.createElement("p")
  
  img_cm.src = review.img
  nombre_cm.textContent = review.name
  valoracion_cm.textContent = `"${review.valoracion}"`
  recomendable_cm.textContent = `Recomendable: ${review.recomendable}`

  article_cm.classList.add("articulo-review")
  divImg_cm.classList.add("divImg-review")
  img_cm.classList.add("img-review")
  nombre_cm.classList.add("nombre-review")
  valoracion_cm.classList.add("valoracion-review")
  recomendable_cm.classList.add("recomendable-review")

  divImg_cm.appendChild(img_cm)
  article_cm.append(divImg_cm)
  article_cm.appendChild(nombre_cm)
  article_cm.appendChild(valoracion_cm)
  article_cm.appendChild(recomendable_cm)
  containerComments.appendChild(article_cm)
})
}
//funcion para inyectar los contactos para los clientes
const createContacts = () => {
  const containerContacts = document.querySelector(".contacts")

  contactos.forEach(function(contacto){

    const divCContacts =document.createElement("div")
    const divrrss =document.createElement("div")
    const titulo = document.createElement("h4")
    const telef =document.createElement("p")
    const email = document.createElement("p")
    const animacion = document.createElement("img")
    const titulo_rrss = document.createElement("h5")
    const img_fb = document.createElement("img")
    const img_in = document.createElement("img")
    const img_tw = document.createElement("img")
    const img_yt = document.createElement("img")

    titulo.textContent = contacto.titulo
    telef.textContent = `Teléfono: ☎  ${contacto.telefono} ☎`
    email.textContent = `Email: 💌  ${contacto.email} 💌`
    animacion.src= contacto.animacion
    titulo_rrss.textContent = contacto.rrss
    img_fb.src = contacto.img_fb
    img_in.src = contacto.img_in
    img_tw.src = contacto.img_tw
    img_yt.src = contacto.img_yt

    divCContacts.classList.add("divcontacts")
    divrrss.classList.add("divrrss")
    titulo.classList.add("titulocontact")
    telef.classList.add("telefcontact")
    email.classList.add("emailcontact")
    animacion.classList.add("animacontact")
    titulo_rrss.classList.add("tirrss-contact")
    img_fb.classList.add("img-fb")
    img_in.classList.add("img-in")
    img_tw.classList.add("img-tw")
    img_yt.classList.add("img-yt")

    
    // Agrega el evento click a las imágenes para abrir en una nueva ventana
    img_fb.addEventListener("click", function () {
      window.open("https://www.facebook.com", "_blank");
    });

    img_in.addEventListener("click", function () {
      window.open("https://www.instagram.com", "_blank");
    });

    img_tw.addEventListener("click", function () {
      window.open("https://www.twitter.com", "_blank");
    });

    img_yt.addEventListener("click", function () {
      window.open("https://www.youtube.com", "_blank");
    });
    animacion.addEventListener("click", function(){
      window.open("https://www.nococinomas.es/","_blank")
    })


    divCContacts.appendChild(titulo)
    divCContacts.appendChild(telef)
    divCContacts.appendChild(email)
    divCContacts.appendChild(animacion)
    divCContacts.appendChild(titulo_rrss)
    divrrss.appendChild(img_fb)
    divrrss.appendChild(img_in)
    divrrss.appendChild(img_tw)
    divrrss.appendChild(img_yt)
    divCContacts.appendChild(divrrss)

    containerContacts.appendChild(divCContacts)

  })
}


//Ejecución de funciones
createNavBar()
createAside()
createProductos(productos)
createComments()
createContacts()








