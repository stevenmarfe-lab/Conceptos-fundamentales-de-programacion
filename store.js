(() => {
  const PRODUCTS = [
    {id:'iphone-17',name:'iPhone 17',category:'celulares',price:4500000,stock:10,image:'https://co.tiendasishop.com/cdn/shop/files/IMG-18067810_m_jpeg_1_11d1e1b0-5fca-4429-b658-0ad7b281be8f.jpg?v=1757469626&width=823',description:'Pantalla Super Retina XDR, cámaras avanzadas y rendimiento de última generación.',badge:'Nuevo'},
    {id:'galaxy-s26',name:'Samsung S26',category:'celulares',price:3800000,stock:8,image:'https://www.korolos.com.co/wp-content/uploads/2026/04/S26ULTRAKOROLOS2-1.jpg',description:'Pantalla AMOLED, cámara de alta resolución y batería para todo el día.',badge:'Top ventas'},
    {id:'macbook-pro',name:'MacBook Pro',category:'laptops',price:8500000,stock:4,image:'https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES_ab897875-8b80-4a24-a091-2b9f642f2bce.jpg?v=1700304124',description:'Potencia profesional, pantalla Retina y autonomía excepcional.',badge:'Pro'},
    {id:'asus-rog',name:'Asus ROG',category:'laptops',price:6200000,stock:6,image:'https://dlcdnwebimgs.asus.com/gain/68E55D05-BB23-4998-B3D4-7A389DFE58DA/w717/h525',description:'Equipo gaming con procesador AMD Ryzen y gráficos NVIDIA.',badge:'Gaming'},
    {id:'lenovo-legion',name:'Lenovo Legion',category:'laptops',price:5800000,stock:7,image:'https://static.wixstatic.com/media/a9655c_b0f3f49ba2ec464184aa9977282a0d72~mv2.png/v1/fill/w_560,h_560,al_c,q_85/lenovo.png',description:'Rendimiento gamer equilibrado con procesador Intel Core i7.'},
    {id:'xiaomi-15',name:'Xiaomi 15',category:'celulares',price:2900000,stock:15,image:'https://tienda.movistar.com.co/media/catalog/product/m/o/movistar_01_7_1.jpg?quality=80&height=340&width=360',description:'Diseño compacto, pantalla AMOLED y cámara versátil.',badge:'Recomendado'},
    {id:'ideapad-slim',name:'Lenovo IdeaPad Slim 3i',category:'laptops',price:2450000,stock:10,image:'https://m.media-amazon.com/images/I/71OJ8m9zQXL.jpg',description:'Portátil ligero con Intel Core i5, ideal para estudio y trabajo.'},
    {id:'moto-g-play',name:'Moto G Play',category:'celulares',price:290000,stock:20,image:'https://www.notebookcheck.org/uploads/tx_nbc2/Motorola_Moto_G_Play_2023.JPG',description:'Gran autonomía y experiencia fluida para todos los días.',badge:'Oferta'},
    {id:'iphone-13',name:'iPhone 13',category:'celulares',price:880000,stock:10,image:'https://co.tiendasishop.com/cdn/shop/files/IMG-12496198_223410cb-30e6-4739-b26c-01375038ccde_grande.jpg?v=1723511403',description:'Chip A15 Bionic y cámara doble en un diseño resistente.',badge:'Oferta'},
    {id:'galaxy-book4',name:'Galaxy Book4',category:'laptops',price:2510000,stock:13,image:'https://m.media-amazon.com/images/I/6131ZgIFn1L.jpg',description:'Portátil Samsung delgado y versátil para productividad.'},
    {id:'honor-200',name:'HONOR 200 Dual-SIM',category:'celulares',price:1540000,stock:3,image:'https://i5.walmartimages.com/asr/36136987-423b-4147-ad59-e6ae5fcfcbcc.5c0d3a6e4c0756f6f1711607f7557afd.jpeg',description:'Pantalla AMOLED brillante y cámara avanzada para retratos.'},
    {id:'surface',name:'Microsoft Surface',category:'laptops',price:3500000,stock:5,image:'https://media.falabella.com/falabellaCO/154794903_01/w=1500,h=1500,fit=cover',description:'Diseño premium, pantalla táctil y productividad con Windows.',badge:'Premium'},
    {id:'hp-victus',name:'HP Victus 15',category:'laptops',price:3890000,stock:9,image:'https://media.falabella.com/falabellaCO/145862778_001/w=1500,h=1500,fit=cover',description:'Portátil gamer con buen rendimiento para jugar, estudiar y crear contenido.',badge:'Balanceado'},
    {id:'acer-nitro',name:'Acer Nitro V',category:'laptops',price:4200000,stock:6,image:'https://glaunilago.com.co/wp-content/uploads/2025/10/nuevo-1-modificado-a-la-competencia.jpg',description:'Pantalla fluida, gráficos dedicados y diseño agresivo para gaming.'},
    {id:'dell-inspiron',name:'Dell Inspiron 15',category:'laptops',price:2750000,stock:12,image:'https://mymsystech.com.co/23020-large_default/dell-p112f-kd9xk-portatil-dell-inspiron-5250-core-i5-1335u-44ghz-10c-ram-8gb-ssd-512gb-pant.jpg',description:'Equipo confiable para oficina, clases virtuales y productividad diaria.',badge:'Trabajo'},
    {id:'macbook-air',name:'MacBook Air M3',category:'laptops',price:5600000,stock:5,image:'https://co.tiendasishop.com/cdn/shop/files/IMG-19266113_m_jpeg_1_1cd3351c-cd9c-4521-8976-57ab0a9f8171.jpg?v=1772750856&width=823',description:'Diseño ultraligero, chip Apple Silicon y batería para todo el día.',badge:'Ligero'},
    {id:'pixel-9',name:'Google Pixel 9',category:'celulares',price:3200000,stock:7,image:'https://soytechno.com/wp-content/uploads/2025/01/Google-Pixel-9-Pro-XL-GA05987-GB-512GB-Porcelain.jpg',description:'Experiencia Android limpia, fotografía computacional y gran fluidez.',badge:'Foto'},
    {id:'redmi-note-14',name:'Redmi Note 14 Pro',category:'celulares',price:1350000,stock:18,image:'https://wo.ua/upload/resize_cache/iblock/b63/790_790_1/mazxebw0d8xbzv6grtu34av5bt46b5pk.jpg',description:'Pantalla AMOLED, carga rápida y excelente relación precio-rendimiento.'},
    {id:'galaxy-a56',name:'Samsung Galaxy A56',category:'celulares',price:1720000,stock:14,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kJjKxKWAqLodDmDXEAGPfnwrBXVUfkKNwGhKZWSCf362laWKVEZdLZls&s=10',description:'Celular equilibrado con buena cámara, batería sólida y diseño elegante.',badge:'Popular'},
    {id:'nothing-phone',name:'Nothing Phone 2a',category:'celulares',price:1650000,stock:8,image:'https://media.bin.lt/%40bite-lt/sites/default/files/products/2024-03/nothing-phone-2a-8128gb-white-1_0.png',description:'Diseño transparente, interfaz limpia y rendimiento ágil para el día a día.',badge:'Diseño'}
  ];

  const PRELOADED_PASSWORD = 'TechZ2026*';
  const PRELOADED_USERS = [
    {id:'preloaded-elpatino6',name:'Elpatino6',email:'elpatino6@poligran.edu.co',password:PRELOADED_PASSWORD},
    {id:'preloaded-bstmartinez',name:'Brayan Martinez',email:'bstmartinez@poligran.edu.co',password:PRELOADED_PASSWORD},
    {id:'preloaded-esteban',name:'Esteban Gualteros',email:'estebangualteros498@gmail.com',password:PRELOADED_PASSWORD},
    {id:'preloaded-kennway',name:'Kennway Gamer',email:'kennwaygamer26@gmail.com',password:PRELOADED_PASSWORD}
  ];

  const KEYS = {cart:'techz_cart',users:'techz_users',session:'techz_session',theme:'techz_theme',favorites:'techz_favorites'};
  const read = (key,fallback=[]) => {try{const value=JSON.parse(localStorage.getItem(key));return value??fallback}catch{return fallback}};
  const write = (key,value) => localStorage.setItem(key,JSON.stringify(value));
  const migrateCart = () => {let cart=read(KEYS.cart,null);if(!cart){const old=read('carrito',[]);cart=old.map(item=>{const product=PRODUCTS.find(p=>p.name===item.nombre||p.name===item.name);return product?{id:product.id,quantity:Number(item.cantidad||item.quantity)||1}:null}).filter(Boolean);write(KEYS.cart,cart)}return cart};
  const getCart = () => migrateCart().filter(item=>PRODUCTS.some(p=>p.id===item.id)&&item.quantity>0);
  const saveCart = cart => {write(KEYS.cart,cart);window.dispatchEvent(new CustomEvent('cart:updated'))};
  const addToCart = id => {const product=PRODUCTS.find(p=>p.id===id);if(!product)return {ok:false,message:'Producto no disponible'};const cart=getCart();const item=cart.find(i=>i.id===id);const quantity=item?.quantity||0;if(quantity>=product.stock)return {ok:false,message:'Ya alcanzaste el stock disponible'};item?item.quantity++:cart.push({id,quantity:1});saveCart(cart);return {ok:true,message:`${product.name} se agregó al carrito`}};
  const setQuantity = (id,quantity) => {const product=PRODUCTS.find(p=>p.id===id);const cart=getCart();const item=cart.find(i=>i.id===id);if(!item||!product)return;if(quantity<=0)saveCart(cart.filter(i=>i.id!==id));else{item.quantity=Math.min(quantity,product.stock);saveCart(cart)}};
  const cartDetails = () => getCart().map(item=>({...PRODUCTS.find(p=>p.id===item.id),quantity:item.quantity}));
  const count = () => getCart().reduce((sum,item)=>sum+item.quantity,0);
  const getFavorites = () => read(KEYS.favorites,[]).filter(id=>PRODUCTS.some(product=>product.id===id));
  const isFavorite = id => getFavorites().includes(id);
  const toggleFavorite = id => {const favorites=getFavorites();const exists=favorites.includes(id);write(KEYS.favorites,exists?favorites.filter(item=>item!==id):[...favorites,id]);window.dispatchEvent(new CustomEvent('favorites:updated'));return !exists};
  const money = value => new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(value);
  const toast = (message,type='success') => {const el=document.getElementById('toast');if(!el)return;el.textContent=message;el.className=`toast show ${type}`;clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>el.className='toast',2800)};

  const normalizeUser = (user,index=0) => ({
    id:user.id||`legacy-${index}-${Date.now()}`,
    name:user.name||user.nombre||'Usuario',
    email:(user.email||user.correo||'').trim().toLowerCase(),
    password:user.password||''
  });
  const getUsers = () => {
    let users = read(KEYS.users,null);
    users = users ? users.map(normalizeUser) : read('usuarios',[]).map(normalizeUser);
    const byEmail = new Map(users.filter(user=>user.email).map(user=>[user.email,user]));
    PRELOADED_USERS.forEach(user=>byEmail.set(user.email,{...byEmail.get(user.email),...user}));
    users = [...byEmail.values()];
    write(KEYS.users,users);
    return users;
  };

  const session = () => {let user=read(KEYS.session,null);if(!user){const old=read('sesion',null);if(old){user={id:old.id||'legacy-session',name:old.nombre||old.name||'Usuario',email:old.correo||old.email||''};write(KEYS.session,user)}}return user};
  const currentTheme = () => read(KEYS.theme,'light');
  const applyTheme = theme => {document.documentElement.dataset.theme=theme;write(KEYS.theme,theme)};
  const toggleTheme = () => {const next=currentTheme()==='dark'?'light':'dark';applyTheme(next);updateHeader();toast(next==='dark'?'Modo oscuro activado':'Modo claro activado');return next};
  const logout = () => {localStorage.removeItem(KEYS.session);localStorage.removeItem('sesion');toast('Sesión cerrada');setTimeout(()=>location.href='index.html',450)};
  const ensureOptionsMenu = () => {
    let actions = document.querySelector('.nav-actions');
    if(!actions){
      const nav = document.querySelector('.nav');
      if(!nav) return;
      actions = document.createElement('div');
      actions.className = 'nav-actions';
      const looseLink = nav.querySelector(':scope > .nav-link');
      if(looseLink) actions.appendChild(looseLink);
      nav.appendChild(actions);
    }
    if(document.getElementById('options-menu')) return;
    const menu = document.createElement('details');
    menu.className = 'options-menu';
    menu.id = 'options-menu';
    menu.innerHTML = '<summary aria-label="Abrir opciones"><span class="menu-icon">☰</span><span class="menu-label">Opciones</span></summary><div class="options-panel"><button type="button" id="theme-toggle">Modo oscuro</button><a href="login.html" id="menu-login">Iniciar sesión</a><button type="button" id="logout-button">Cerrar sesión</button></div>';
    actions.appendChild(menu);
    document.addEventListener('click',event=>{if(!menu.contains(event.target))menu.open=false});
  };
  const updateHeader = () => {
    applyTheme(currentTheme());
    const badge = document.getElementById('cart-count');
    if(badge) badge.textContent = count();
    ensureOptionsMenu();
    const link = document.getElementById('auth-link');
    const user = session();
    if(link&&user){link.textContent=`Hola, ${user.name.split(' ')[0]}`;link.href='#';link.title='Sesión activa';link.onclick=e=>e.preventDefault()}
    else if(link){link.textContent='Ingresar';link.href='login.html';link.title='Iniciar sesión';link.onclick=null}
    const themeButton = document.getElementById('theme-toggle');
    if(themeButton){themeButton.textContent=currentTheme()==='dark'?'Modo claro':'Modo oscuro';themeButton.onclick=toggleTheme}
    const logoutButton = document.getElementById('logout-button');
    if(logoutButton){logoutButton.hidden=!user;logoutButton.onclick=logout}
    const menuLogin = document.getElementById('menu-login');
    if(menuLogin) menuLogin.hidden = !!user;
  };

  applyTheme(currentTheme());
  window.TechStore = {PRODUCTS,PRELOADED_USERS,PRELOADED_PASSWORD,KEYS,read,write,getUsers,getCart,saveCart,addToCart,setQuantity,cartDetails,count,getFavorites,isFavorite,toggleFavorite,money,toast,session,logout,currentTheme,applyTheme,toggleTheme,updateHeader};
  document.addEventListener('DOMContentLoaded',updateHeader);
  window.addEventListener('cart:updated',updateHeader);
})();
