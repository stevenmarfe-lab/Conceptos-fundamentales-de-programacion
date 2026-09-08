const {PRODUCTS,addToCart,money,toast,isFavorite,toggleFavorite}=TechStore;
const grid=document.getElementById('productos');
const search=document.getElementById('busqueda');
const countLabel=document.getElementById('results-count');
const sortSelect=document.getElementById('ordenar');
const modal=document.getElementById('quick-view');
let category='todos';
let lastRendered=[];

const escapeHtml=value=>String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const categoryLabel=category=>category==='laptops'?'PORTÁTIL':'CELULAR';
const fallbackImage='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23eef2f8%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%236b7280%22 font-size=%2224%22%3ETech Z%3C/text%3E%3C/svg%3E';

function sortProducts(products){
  const mode=sortSelect?.value||'featured';
  const copy=[...products];
  if(mode==='price-asc')copy.sort((a,b)=>a.price-b.price);
  if(mode==='price-desc')copy.sort((a,b)=>b.price-a.price);
  if(mode==='stock')copy.sort((a,b)=>a.stock-b.stock);
  if(mode==='name')copy.sort((a,b)=>a.name.localeCompare(b.name,'es'));
  return copy;
}

function productCard(product,index){
  const stockPercent=Math.min(100,Math.max(8,(product.stock/20)*100));
  const favorite=isFavorite(product.id);
  return `<article class="product-card reveal-card" style="--delay:${index*55}ms">
    <div class="product-media">
      ${product.badge?`<span class="product-badge">${escapeHtml(product.badge)}</span>`:''}
      <button class="favorite-button ${favorite?'active':''}" data-action="favorite" data-id="${product.id}" aria-label="${favorite?'Quitar de favoritos':'Agregar a favoritos'}">♥</button>
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" onerror="this.src='${fallbackImage}'">
    </div>
    <div class="product-info">
      <div class="card-topline"><span class="category">${categoryLabel(product.category)}</span><span class="mini-rating">★ 4.${Math.min(9,product.stock+1)}</span></div>
      <h3>${escapeHtml(product.name)}</h3>
      <p class="description">${escapeHtml(product.description)}</p>
      <div class="stock-meter" aria-label="Disponibilidad"><span style="width:${stockPercent}%"></span></div>
      <div class="product-meta">
        <div><span class="price">${money(product.price)}</span><small>${product.stock<=4?`Solo quedan ${product.stock}`:`${product.stock} disponibles`}</small></div>
        <div class="product-actions">
          <button class="ghost-button" data-action="view" data-id="${product.id}" type="button">Ver</button>
          <button class="add-button" data-action="add" data-id="${product.id}" aria-label="Agregar ${escapeHtml(product.name)} al carrito"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></button>
        </div>
      </div>
    </div>
  </article>`;
}

function render(){
  const term=search.value.trim().toLocaleLowerCase('es');
  const filtered=sortProducts(PRODUCTS.filter(product=>(category==='todos'||product.category===category)&&product.name.toLocaleLowerCase('es').includes(term)));
  lastRendered=filtered;
  countLabel.textContent=`${filtered.length} ${filtered.length===1?'producto':'productos'} encontrados`;
  grid.innerHTML=filtered.length?filtered.map(productCard).join(''):`<div class="empty-state"><span>⌕</span><h3>No encontramos resultados</h3><p>Prueba con otra búsqueda, categoría u orden.</p></div>`;
}

function openQuickView(id){
  const product=PRODUCTS.find(item=>item.id===id);
  if(!product||!modal)return;
  modal.innerHTML=`<div class="modal-backdrop" data-action="close-modal"></div>
    <section class="quick-card" role="dialog" aria-modal="true" aria-label="Detalle de ${escapeHtml(product.name)}">
      <button class="modal-close" data-action="close-modal" type="button" aria-label="Cerrar">×</button>
      <div class="quick-media"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" onerror="this.src='${fallbackImage}'"></div>
      <div class="quick-info">
        <span class="category">${categoryLabel(product.category)}</span>
        <h2>${escapeHtml(product.name)}</h2>
        <p>${escapeHtml(product.description)}</p>
        <div class="quick-specs"><span>${product.stock} unidades</span><span>Garantía incluida</span><span>Envío nacional</span></div>
        <strong>${money(product.price)}</strong>
        <button class="primary-button full" data-action="add" data-id="${product.id}" type="button">Agregar al carrito <span>→</span></button>
      </div>
    </section>`;
  modal.hidden=false;
  document.body.classList.add('modal-open');
}

function closeQuickView(){
  if(!modal)return;
  modal.hidden=true;
  modal.innerHTML='';
  document.body.classList.remove('modal-open');
}

search.addEventListener('input',render);
sortSelect?.addEventListener('change',render);
document.querySelectorAll('.filter-chip').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter-chip.active')?.classList.remove('active');button.classList.add('active');category=button.dataset.category;render()}));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeQuickView()});

document.addEventListener('click',event=>{
  const target=event.target.closest('[data-action]');
  if(!target)return;
  const {action,id}=target.dataset;
  if(action==='add'){
    const result=addToCart(id);
    toast(result.message,result.ok?'success':'error');
    if(result.ok){
      target.classList.add('added');
      target.innerHTML='✓';
      setTimeout(()=>{target.classList.remove('added');target.innerHTML=target.classList.contains('primary-button')?'Agregar al carrito <span>→</span>':'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>'},850);
    }
  }
  if(action==='favorite'){
    const active=toggleFavorite(id);
    target.classList.toggle('active',active);
    toast(active?'Guardado en favoritos':'Quitado de favoritos');
  }
  if(action==='view')openQuickView(id);
  if(action==='close-modal')closeQuickView();
});

window.addEventListener('favorites:updated',()=>{if(lastRendered.length)render()});
render();
