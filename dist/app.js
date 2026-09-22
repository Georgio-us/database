const icons = {
  home: '<path d="M3 10.5 10 4l7 6.5V18a1 1 0 0 1-1 1h-4v-5H8v5H4a1 1 0 0 1-1-1v-7.5Z"/>',
  building: '<path d="M4 19V5a1 1 0 0 1 1-1h7v15M12 8h5a1 1 0 0 1 1 1v10M7 8h2M7 11h2M7 14h2M15 12h1M15 15h1M2 19h18"/>',
  layers: '<path d="m10 3-8 4 8 4 8-4-8-4ZM2 11l8 4 8-4M2 15l8 4 8-4"/>',
  upload: '<path d="M10 14V3m0 0L6 7m4-4 4 4M4 12v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5"/>',
  send: '<path d="m19 2-8 17-2-7-7-2 17-8Z"/><path d="m9 12 4-4"/>',
  users: '<path d="M14 18v-1.5A3.5 3.5 0 0 0 10.5 13h-5A3.5 3.5 0 0 0 2 16.5V18M8 9.5A3.5 3.5 0 1 0 8 2.5a3.5 3.5 0 0 0 0 7ZM15 10a3 3 0 0 0 0-6M16 13.2a3.5 3.5 0 0 1 2 3.3V18"/>',
  settings: '<circle cx="10" cy="10" r="3"/><path d="M16.7 13.8 18 16l-2 2-2.2-1.3a7 7 0 0 1-2 .8L11 20H8l-.7-2.5a7 7 0 0 1-2-.8L3 18l-2-2 1.3-2.2a7 7 0 0 1-.8-2L-1 11V8l2.5-.7a7 7 0 0 1 .8-2L1 3l2-2 2.2 1.3a7 7 0 0 1 2-.8L8-1h3l.7 2.5a7 7 0 0 1 2 .8L16 1l2 2-1.3 2.2a7 7 0 0 1 .8 2L20 8v3l-2.5.7a7 7 0 0 1-.8 2.1Z" transform="scale(.76) translate(3.2 3.2)"/>',
  chevron: '<path d="m7 8 3 3 3-3"/>',
  menu: '<path d="M3 5h14M3 10h14M3 15h14"/>',
  search: '<circle cx="9" cy="9" r="6"/><path d="m14 14 4 4"/>',
  bell: '<path d="M4 15h12l-1.5-2V9a4.5 4.5 0 0 0-9 0v4L4 15ZM8 18h4"/>',
  plus: '<path d="M10 4v12M4 10h12"/>',
  check: '<path d="m4 10 4 4 8-8"/>',
  clock: '<circle cx="10" cy="10" r="8"/><path d="M10 5v5l3 2"/>',
  bookmark: '<path d="M5 3h10v15l-5-3-5 3V3Z"/>',
  edit: '<path d="M4 16.5 4.5 13 14 3.5a2 2 0 0 1 2.8 2.8L7.3 15.8 4 16.5ZM12.5 5l2.8 2.8"/>',
  grid: '<rect x="3" y="3" width="5" height="5" rx="1"/><rect x="12" y="3" width="5" height="5" rx="1"/><rect x="3" y="12" width="5" height="5" rx="1"/><rect x="12" y="12" width="5" height="5" rx="1"/>',
  list: '<path d="M7 5h11M7 10h11M7 15h11M2 5h1M2 10h1M2 15h1"/>',
  sliders: '<path d="M3 5h14M3 10h14M3 15h14"/><circle cx="7" cy="5" r="2" fill="white"/><circle cx="13" cy="10" r="2" fill="white"/><circle cx="9" cy="15" r="2" fill="white"/>',
  user: '<circle cx="10" cy="7" r="3"/><path d="M4 18a6 6 0 0 1 12 0"/>',
  archive: '<path d="M3 6h14v12H3V6ZM2 3h16v3H2V3ZM8 10h4"/>',
  close: '<path d="m5 5 10 10M15 5 5 15"/>',
  more: '<circle cx="4" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="10" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1" fill="currentColor" stroke="none"/>',
  image: '<rect x="3" y="4" width="14" height="12" rx="2"/><circle cx="8" cy="8" r="1.5"/><path d="m4 14 4-4 3 3 2-2 4 4"/>',
  phone: '<path d="M6 3 3.5 5.5c-.8.8.4 4 3.3 6.9s6.1 4.1 6.9 3.3L16 13.4l-3-2-1.5 1.5c-1.2-.5-3.9-3.2-4.4-4.4L8.5 7 6 3Z"/>',
  info: '<circle cx="10" cy="10" r="8"/><path d="M10 9v5M10 6.5v.1"/>',
  file: '<path d="M5 2h7l4 4v12H5V2Z"/><path d="M12 2v5h5M8 11h5M8 14h5"/>',
  history: '<path d="M4 5v4h4M4.5 8.5A7 7 0 1 1 5 15"/><path d="M10 6v4l3 2"/>'
};

function icon(name) {
  return `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.info}</svg>`;
}

document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

const properties = [
  { id:'OD-204', type:'Квартира', address:'Генуэзская, 3Б', district:'Приморский', zone:'Аркадия', rooms:2, area:68, floor:'8 / 24', price:'$128 000', owner:'Елена Островская', phone:'+380 67 420 18 44', agent:'Анна Коваль', initials:'АК', status:'active', statusText:'Актуально сегодня', exclusive:true, published:true, image:'https://images.pexels.com/photos/11296222/pexels-photo-11296222.jpeg?auto=compress&fit=crop&w=900&h=620' },
  { id:'OD-198', type:'Квартира', address:'Фонтанская дорога, 49', district:'Приморский', zone:'5-я станция Фонтана', rooms:3, area:92, floor:'4 / 10', price:'$164 000', owner:'Александр Левин', phone:'+380 93 612 45 88', agent:'Игорь Мельник', initials:'ИМ', status:'attention', statusText:'Проверить сегодня', exclusive:false, published:true, image:'https://images.pexels.com/photos/6970066/pexels-photo-6970066.jpeg?auto=compress&fit=crop&w=900&h=620' },
  { id:'OD-193', type:'Дом', address:'Дача Ковалевского, 121', district:'Киевский', zone:'Совиньон', rooms:4, area:186, floor:'2 этажа', price:'$295 000', owner:'Марина Бойко', phone:'+380 50 318 72 40', agent:'Николай Савчук', initials:'НС', status:'active', statusText:'Актуально вчера', exclusive:true, published:false, image:'https://images.pexels.com/photos/15251055/pexels-photo-15251055/free-photo-of-interior-of-a-modern-apartment.jpeg?auto=compress&fit=crop&w=900&h=620' },
  { id:'OD-187', type:'Квартира', address:'Люстдорфская дорога, 55', district:'Хаджибейский', zone:'Черёмушки', rooms:2, area:54, floor:'6 / 9', price:'$67 500', owner:'Виктор Соколов', phone:'+380 97 421 09 53', agent:'Анна Коваль', initials:'АК', status:'reserved', statusText:'Резерв до 22 сентября', exclusive:false, published:true, image:'https://images.pexels.com/photos/7166945/pexels-photo-7166945.jpeg?auto=compress&fit=crop&w=900&h=620' },
  { id:'OD-181', type:'Участок', address:'Рыбачья балка, 18', district:'Киевский', zone:'Черноморка', rooms:0, area:10, floor:'10 соток', price:'$82 000', owner:'Олег Кравцов', phone:'+380 63 118 42 65', agent:'Игорь Мельник', initials:'ИМ', status:'active', statusText:'Актуально 2 дня назад', exclusive:false, published:false, image:'https://images.pexels.com/photos/15251055/pexels-photo-15251055/free-photo-of-interior-of-a-modern-apartment.jpeg?auto=compress&fit=crop&w=900&h=620' },
  { id:'OD-176', type:'Коммерция', address:'Большая Арнаутская, 22', district:'Приморский', zone:'Центр', rooms:0, area:117, floor:'1 / 4', price:'$220 000', owner:'Сергей Мороз', phone:'+380 99 267 38 16', agent:'Николай Савчук', initials:'НС', status:'attention', statusText:'Не проверено 14 дней', exclusive:true, published:true, image:'https://images.pexels.com/photos/11296222/pexels-photo-11296222.jpeg?auto=compress&fit=crop&w=900&h=620' },
  { id:'OD-169', type:'Квартира', address:'Академика Королёва, 56А', district:'Киевский', zone:'Таирова', rooms:1, area:42, floor:'11 / 16', price:'$54 000', owner:'Ирина Колесник', phone:'+380 66 815 34 27', agent:'Анна Коваль', initials:'АК', status:'draft', statusText:'Черновик · нет фото', exclusive:false, published:false, image:'https://images.pexels.com/photos/6970066/pexels-photo-6970066.jpeg?auto=compress&fit=crop&w=900&h=620' },
  { id:'OD-161', type:'Паркинг', address:'Каманина, 16А', district:'Приморский', zone:'Аркадия', rooms:0, area:18, floor:'−1 уровень', price:'$24 000', owner:'Роман Ткаченко', phone:'+380 73 550 91 12', agent:'Игорь Мельник', initials:'ИМ', status:'active', statusText:'Актуально 3 дня назад', exclusive:false, published:false, image:'https://images.pexels.com/photos/7166945/pexels-photo-7166945.jpeg?auto=compress&fit=crop&w=900&h=620' }
];

const state = { view: 'grid', status: 'all', tab: 'all', search: '', type: 'all', district: 'all', rooms: 'all', selected: new Set(), activePropertyId: null };
const grid = document.getElementById('propertyGrid');
const emptyState = document.getElementById('emptyState');
const bulkBar = document.getElementById('bulkBar');

function filteredProperties() {
  const search = state.search.trim().toLocaleLowerCase('ru');
  return properties.filter((property) => {
    const haystack = `${property.id} ${property.type} ${property.address} ${property.district} ${property.zone} ${property.owner} ${property.phone}`.toLocaleLowerCase('ru');
    const statusMatch = state.status === 'all' || property.status === state.status;
    const tabMatch = state.tab === 'all' || (state.tab === 'exclusive' && property.exclusive) || (state.tab === 'mine' && property.agent === 'Анна Коваль') || (state.tab === 'attention' && property.status === 'attention');
    const roomsMatch = state.rooms === 'all' || (state.rooms === '4' ? property.rooms >= 4 : property.rooms === Number(state.rooms));
    return (!search || haystack.includes(search)) && statusMatch && tabMatch && (state.type === 'all' || property.type === state.type) && (state.district === 'all' || property.district === state.district) && roomsMatch;
  });
}

function facts(property) {
  const roomLabel = property.rooms ? `${property.rooms} комн.` : property.type === 'Участок' ? 'Участок' : property.type === 'Паркинг' ? 'Паркинг' : 'Свободное';
  const areaLabel = property.type === 'Участок' ? `${property.area} соток` : `${property.area} м²`;
  return [roomLabel, areaLabel, property.floor];
}

function cardTemplate(property) {
  const fact = facts(property);
  return `<article class="property-card ${state.selected.has(property.id) ? 'selected' : ''}" data-id="${property.id}" tabindex="0">
    <div class="property-image" style="background-image:url('${property.image}')">
      <label class="card-check" aria-label="Выбрать ${property.id}"><input type="checkbox" ${state.selected.has(property.id) ? 'checked' : ''}/><span></span></label>
      <div class="property-labels">${property.exclusive ? '<span class="property-label exclusive">Эксклюзив</span>' : ''}${property.published ? '<span class="property-label">На порталах</span>' : ''}</div>
      <button class="property-menu" aria-label="Действия">${icon('more')}</button>
    </div>
    <div class="card-body">
      <div class="card-topline"><div><p class="property-type">${property.type} · ${property.id}</p><h3>${property.address}</h3></div><strong class="property-price">${property.price}</strong></div>
      <p class="location">${property.zone} · ${property.district} район</p>
      <div class="facts"><span>${fact[0]}</span><i></i><span>${fact[1]}</span><i></i><span>${fact[2]}</span></div>
      <div class="card-meta"><span class="agent-avatar">${property.initials}</span><div><strong>${property.agent}</strong><small>${property.statusText}</small></div><span class="status-dot ${property.status}"></span></div>
    </div>
  </article>`;
}

function render() {
  const items = filteredProperties();
  document.getElementById('resultCount').textContent = `${items.length} ${items.length === 1 ? 'объект' : items.length < 5 ? 'объекта' : 'объектов'}`;
  grid.classList.toggle('list-view', state.view === 'list');
  grid.innerHTML = items.map(cardTemplate).join('');
  grid.classList.toggle('hidden', items.length === 0);
  emptyState.classList.toggle('hidden', items.length !== 0);
  document.getElementById('selectAll').checked = items.length > 0 && items.every((item) => state.selected.has(item.id));
  updateBulkBar();

  grid.querySelectorAll('.property-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.card-check')) return;
      if (event.target.closest('.property-menu')) { showToast('Меню объекта открыто в полной версии'); return; }
      openDrawer(card.dataset.id);
    });
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter') openDrawer(card.dataset.id); });
    card.querySelector('input').addEventListener('change', (event) => {
      event.stopPropagation();
      if (event.target.checked) state.selected.add(card.dataset.id); else state.selected.delete(card.dataset.id);
      render();
    });
  });
}

function updateBulkBar() {
  const count = state.selected.size;
  document.getElementById('selectedCount').textContent = count;
  bulkBar.classList.toggle('visible', count > 0);
}

document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => {
  state.view = button.dataset.view;
  document.querySelectorAll('[data-view]').forEach((item) => item.classList.toggle('active', item === button));
  render();
}));

document.querySelectorAll('.metric').forEach((button) => button.addEventListener('click', () => {
  state.status = button.dataset.status;
  document.querySelectorAll('.metric').forEach((item) => item.classList.toggle('active', item === button));
  render();
}));

document.querySelectorAll('.quick-tab').forEach((button) => button.addEventListener('click', () => {
  state.tab = button.dataset.tab;
  document.querySelectorAll('.quick-tab').forEach((item) => item.classList.toggle('active', item === button));
  render();
}));

const filterBindings = [
  ['catalogSearch', 'search', 'input'], ['globalSearch', 'search', 'input'], ['typeFilter', 'type', 'change'], ['districtFilter', 'district', 'change'], ['roomsFilter', 'rooms', 'change']
];
filterBindings.forEach(([id, key, eventName]) => document.getElementById(id).addEventListener(eventName, (event) => {
  state[key] = event.target.value;
  if (key === 'search') {
    document.getElementById('catalogSearch').value = event.target.value;
    document.getElementById('globalSearch').value = event.target.value;
  }
  render();
}));

function resetFilters() {
  Object.assign(state, { status:'all', tab:'all', search:'', type:'all', district:'all', rooms:'all' });
  document.getElementById('catalogSearch').value = '';
  document.getElementById('globalSearch').value = '';
  document.getElementById('typeFilter').value = 'all';
  document.getElementById('districtFilter').value = 'all';
  document.getElementById('roomsFilter').value = 'all';
  document.querySelectorAll('.metric').forEach((item, index) => item.classList.toggle('active', index === 0));
  document.querySelectorAll('.quick-tab').forEach((item, index) => item.classList.toggle('active', index === 0));
  render();
}
document.getElementById('clearFilters').addEventListener('click', resetFilters);
document.getElementById('emptyReset').addEventListener('click', resetFilters);

document.getElementById('selectAll').addEventListener('change', (event) => {
  filteredProperties().forEach((item) => event.target.checked ? state.selected.add(item.id) : state.selected.delete(item.id));
  render();
});
document.getElementById('clearSelection').addEventListener('click', () => { state.selected.clear(); render(); });
document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => {
  const labels = { agent:'Ответственный назначен', verify:'Объекты актуализированы', publish:'Отправлено в очередь публикации', archive:'Объекты перемещены в архив' };
  showToast(`${labels[button.dataset.action]}: ${state.selected.size}`);
  state.selected.clear();
  render();
}));

const overlay = document.getElementById('overlay');
const drawer = document.getElementById('detailDrawer');
const addModal = document.getElementById('addModal');
const importModal = document.getElementById('importModal');
const editModal = document.getElementById('editModal');

function showOverlay() { overlay.classList.add('visible'); document.body.style.overflow = 'hidden'; }
function closeLayers() {
  drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true');
  addModal.classList.remove('open'); addModal.setAttribute('aria-hidden','true');
  importModal.classList.remove('open'); importModal.setAttribute('aria-hidden','true');
  editModal.classList.remove('open'); editModal.setAttribute('aria-hidden','true');
  document.getElementById('sidebar').classList.remove('open');
  overlay.classList.remove('visible'); document.body.style.overflow = '';
}

function propertyHistory(property) {
  if (!property.history) {
    property.history = [
      { icon:'check', title:'Подтверждена актуальность объекта', meta:'Анна Коваль · сегодня, 12:46' },
      { icon:'edit', title:'Цена изменена: $132 000 → ' + property.price, meta:'Игорь Мельник · 18 сентября' },
      { icon:'plus', title:'Объект добавлен в базу', meta:`${property.agent} · 4 сентября` }
    ];
  }
  return property.history;
}

function openDrawer(id) {
  const property = properties.find((item) => item.id === id);
  if (!property) return;
  state.activePropertyId = id;
  const fact = facts(property);
  document.getElementById('drawerCode').textContent = property.id;
  document.getElementById('drawerType').textContent = property.type;
  document.getElementById('drawerAddress').textContent = property.address;
  document.getElementById('drawerLocation').textContent = `${property.zone} · ${property.district} район`;
  document.getElementById('drawerPrice').textContent = property.price;
  document.getElementById('drawerOwner').textContent = property.owner;
  document.getElementById('drawerOwnerInitials').textContent = property.owner.split(' ').map((part) => part[0]).join('').slice(0,2);
  document.getElementById('drawerPhone').textContent = property.phone;
  document.getElementById('drawerPhone').href = `tel:${property.phone.replace(/\s/g,'')}`;
  document.getElementById('drawerPhoto').style.backgroundImage = `url('${property.image}')`;
  document.getElementById('drawerAgent').textContent = property.agent;
  document.getElementById('drawerAgentInitials').textContent = property.initials;
  document.getElementById('drawerComment').textContent = property.comment || 'Собственник готов к показам после 17:00. Ключи у ответственного риелтора.';
  document.getElementById('drawerDetailList').innerHTML = [
    ['Тип недвижимости', property.type],
    ['Административный район', `${property.district} район`],
    ['Микрорайон', property.zone || 'Не указан'],
    ['Общая площадь', property.type === 'Участок' ? `${property.area} соток` : `${property.area} м²`],
    ['Комнаты', property.rooms || 'Не применимо'],
    ['Этаж / этажность', property.floor],
    ['Эксклюзив', property.exclusive ? 'Да' : 'Нет']
  ].map(([label, value]) => `<div class="detail-row"><span>${label}</span><strong>${value}</strong></div>`).join('');
  const history = propertyHistory(property);
  document.getElementById('historyCount').textContent = history.length;
  document.getElementById('drawerHistory').innerHTML = history.map((item) => `<div class="history-item"><span class="history-icon">${icon(item.icon)}</span><div><strong>${item.title}</strong><small>${item.meta}</small></div></div>`).join('');
  document.querySelectorAll('[data-drawer-tab]').forEach((button) => button.classList.toggle('active', button.dataset.drawerTab === 'overview'));
  document.querySelectorAll('[data-drawer-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.drawerPanel === 'overview'));
  document.getElementById('drawerFacts').innerHTML = `<div class="key-fact"><small>Комнаты</small><strong>${property.rooms || '—'}</strong></div><div class="key-fact"><small>Площадь</small><strong>${property.type === 'Участок' ? property.area + ' сот.' : property.area + ' м²'}</strong></div><div class="key-fact"><small>Этаж</small><strong>${property.floor}</strong></div><div class="key-fact"><small>Цена за м²</small><strong>${property.type === 'Участок' ? '—' : '$' + Math.round(Number(property.price.replace(/\D/g,'')) / property.area).toLocaleString('ru-RU')}</strong></div>`;
  drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); showOverlay();
}

function openModal(modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); showOverlay(); }
document.getElementById('drawerClose').addEventListener('click', closeLayers);
overlay.addEventListener('click', closeLayers);
document.querySelectorAll('.modal-close').forEach((button) => button.addEventListener('click', closeLayers));
document.getElementById('addButton').addEventListener('click', () => openModal(addModal));
document.getElementById('mobileAdd').addEventListener('click', () => openModal(addModal));
document.getElementById('importButton').addEventListener('click', () => openModal(importModal));
document.getElementById('addForm').addEventListener('submit', (event) => { event.preventDefault(); closeLayers(); showToast('Объект создан и назначен Анне Коваль'); });
document.getElementById('saveDraft').addEventListener('click', () => { closeLayers(); showToast('Черновик сохранён'); });
document.querySelectorAll('[data-drawer-tab]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-drawer-tab]').forEach((item) => item.classList.toggle('active', item === button));
  document.querySelectorAll('[data-drawer-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.drawerPanel === button.dataset.drawerTab));
}));

document.getElementById('verifyButton').addEventListener('click', () => {
  const property = properties.find((item) => item.id === state.activePropertyId);
  if (!property) return;
  property.status = 'active';
  property.statusText = 'Актуально сегодня';
  propertyHistory(property).unshift({ icon:'check', title:'Подтверждена актуальность объекта', meta:'Анна Коваль · только что' });
  document.getElementById('verificationTitle').textContent = 'Подтверждено сегодня';
  document.getElementById('verificationMeta').textContent = 'Анна Коваль · только что';
  openDrawer(property.id);
  render();
  showToast('Актуальность подтверждена и записана в журнал');
});

function openEditModal() {
  const property = properties.find((item) => item.id === state.activePropertyId);
  if (!property) return;
  document.getElementById('editModalCode').textContent = `${property.id} · изменения попадут в журнал действий.`;
  document.getElementById('editAddress').value = property.address;
  document.getElementById('editDistrict').value = property.district;
  document.getElementById('editZone').value = property.zone;
  document.getElementById('editRooms').value = property.rooms;
  document.getElementById('editArea').value = property.area;
  document.getElementById('editFloor').value = property.floor;
  document.getElementById('editPrice').value = Number(property.price.replace(/\D/g,''));
  document.getElementById('editComment').value = property.comment || 'Собственник готов к показам после 17:00. Ключи у ответственного риелтора.';
  openModal(editModal);
}

document.getElementById('editPropertyButton').addEventListener('click', openEditModal);
document.getElementById('editCommentButton').addEventListener('click', openEditModal);
document.getElementById('editForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const property = properties.find((item) => item.id === state.activePropertyId);
  if (!property) return;
  const oldPrice = property.price;
  property.address = document.getElementById('editAddress').value.trim();
  property.district = document.getElementById('editDistrict').value;
  property.zone = document.getElementById('editZone').value.trim();
  property.rooms = Number(document.getElementById('editRooms').value) || 0;
  property.area = Number(document.getElementById('editArea').value);
  property.floor = document.getElementById('editFloor').value.trim() || 'Не указан';
  property.price = `$${Number(document.getElementById('editPrice').value).toLocaleString('ru-RU')}`;
  property.comment = document.getElementById('editComment').value.trim();
  const title = oldPrice === property.price ? 'Обновлены характеристики объекта' : `Цена изменена: ${oldPrice} → ${property.price}`;
  propertyHistory(property).unshift({ icon:'edit', title, meta:'Анна Коваль · только что' });
  editModal.classList.remove('open'); editModal.setAttribute('aria-hidden','true');
  openDrawer(property.id);
  render();
  showToast('Карточка обновлена, изменение добавлено в журнал');
});

document.getElementById('addToSelectionButton').addEventListener('click', () => showToast('Объект добавлен в новую подборку'));
document.getElementById('updateRiaButton').addEventListener('click', () => showToast('Обновление DIM.RIA поставлено в очередь'));
document.getElementById('publicationSettingsButton').addEventListener('click', () => showToast('Настройки публикаций будут отдельным экраном'));
document.getElementById('changeAgentButton').addEventListener('click', () => showToast('Ответственного может сменить руководитель'));
document.getElementById('addDocumentButton').addEventListener('click', () => showToast('Документ отмечен в карточке объекта'));
document.getElementById('editOwnerButton').addEventListener('click', () => showToast('Контакт собственника открыт для редактирования'));
document.getElementById('menuButton').addEventListener('click', () => { document.getElementById('sidebar').classList.add('open'); showOverlay(); });
document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => {
  if (button.classList.contains('active')) return;
  showToast(`Раздел «${button.dataset.section}» появится в следующем прототипе`);
}));

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMessage').textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLayers();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); document.getElementById('globalSearch').focus(); }
});

render();
