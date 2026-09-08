const {cartDetails,setQuantity,saveCart,money,toast,session}=TechStore;
const list=document.getElementById('carrito');
const subtotalEl=document.getElementById('subtotal');
const shippingEl=document.getElementById('shipping');
const totalEl=document.getElementById('total');
const benefitEl=document.getElementById('benefit');
const label=document.getElementById('cart-items-label');
const clearButton=document.getElementById('clear-cart');
const checkout=document.getElementById('checkout');
const shippingMessage=document.getElementById('shipping-message');
const shippingProgress=document.getElementById('shipping-progress');
const FREE_SHIPPING=1000000;

function renderCart(){
  const items=cartDetails();
  const units=items.reduce((sum,item)=>sum+item.quantity,0);
  const subtotal=items.reduce((sum,item)=>sum+item.price*item.quantity,0);
  const shipping=subtotal>0&&subtotal<FREE_SHIPPING?25000:0;
  const progress=Math.min(100,Math.round((subtotal/FREE_SHIPPING)*100));
  const remaining=Math.max(0,FREE_SHIPPING-subtotal);
  label.textContent=`(${units})`;
  subtotalEl.textContent=money(subtotal);
  shippingEl.textContent=shipping?money(shipping):'Gratis';
  benefitEl.textContent=subtotal>=FREE_SHIPPING?'Envío gratis':subtotal?'Cerca del envío gratis':'—';
  totalEl.textContent=money(subtotal+shipping);
  if(shippingProgress)shippingProgress.style.width=`${progress}%`;
  if(shippingMessage)shippingMessage.textContent=!subtotal?'Agrega productos para calcular el envío.':remaining?`Te faltan ${money(remaining)} para envío gratis.`:'Ya tienes envío gratis.';
  clearButton.hidden=!items.length;
  checkout.disabled=!items.length;
  list.innerHTML=items.length?items.map(item=>{
    const stockPercent=Math.min(100,Math.max(10,(item.quantity/item.stock)*100));
    return `<article class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.hidden=true">
      <div class="cart-item-info"><span class="category">${item.category==='laptops'?'PORTÁTIL':'CELULAR'}</span><h3>${item.name}</h3><span class="item-price">${money(item.price)} · ${item.stock} disponibles</span><div class="stock-meter compact"><span style="width:${stockPercent}%"></span></div><button class="remove-button" data-action="remove" data-id="${item.id}">Eliminar</button></div>
      <div class="quantity-control" aria-label="Cantidad de ${item.name}"><button data-action="minus" data-id="${item.id}" aria-label="Disminuir">−</button><output>${item.quantity}</output><button data-action="plus" data-id="${item.id}" aria-label="Aumentar" ${item.quantity>=item.stock?'disabled':''}>+</button></div>
      <strong class="line-total">${money(item.price*item.quantity)}</strong>
    </article>`;
  }).join(''):`<div class="empty-cart"><div class="empty-icon">⌁</div><h3>Tu carrito está esperando</h3><p>Explora el catálogo y agrega los equipos que te encanten.</p><a class="primary-button" href="index.html">Ver productos <span>→</span></a></div>`;
}

list.addEventListener('click',event=>{
  const button=event.target.closest('button[data-action]');
  if(!button)return;
  const item=cartDetails().find(product=>product.id===button.dataset.id);
  if(!item)return;
  if(button.dataset.action==='remove'){
    setQuantity(item.id,0);
    toast(`${item.name} se eliminó del carrito`);
  }else{
    const next=item.quantity+(button.dataset.action==='plus'?1:-1);
    if(next>item.stock){toast('No hay más unidades disponibles','error');return}
    setQuantity(item.id,next);
  }
  renderCart();
});

clearButton.addEventListener('click',()=>{
  if(!cartDetails().length)return;
  saveCart([]);
  renderCart();
  toast('Carrito vaciado');
});

checkout.addEventListener('click',()=>{
  if(!cartDetails().length)return;
  const user=session();
  if(!user){
    sessionStorage.setItem('techz_return','carrito.html');
    toast('Inicia sesión para continuar','error');
    setTimeout(()=>location.href='login.html',900);
    return;
  }
  const total=totalEl.textContent;
  saveCart([]);
  renderCart();
  toast(`Compra confirmada por ${total}. ¡Gracias, ${user.name.split(' ')[0]}!`);
});

renderCart();
