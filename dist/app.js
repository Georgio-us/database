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

const selections = [
  { id:'SL-008', title:'2-комнатные в Аркадии', client:'Елена', propertyIds:['OD-204','OD-187','OD-198'], status:'viewed', activity:'Открыта сегодня в 13:24', views:4, agent:'Анна Коваль', initials:'АК', note:'Варианты в новых домах, рядом с морем и парком.' },
  { id:'SL-007', title:'Дом у моря до $320 000', client:'Александр', propertyIds:['OD-193','OD-204'], status:'sent', activity:'Отправлена вчера', views:0, agent:'Николай Савчук', initials:'НС', note:'Собрали варианты с удобным выездом к центру.' },
  { id:'SL-006', title:'Коммерция в центре', client:'Мария', propertyIds:['OD-176'], status:'viewed', activity:'Открыта 3 раза', views:3, agent:'Николай Савчук', initials:'НС', note:'Помещения со своим входом и хорошим трафиком.' },
  { id:'SL-005', title:'Квартира для инвестиций', client:'Олег', propertyIds:['OD-204','OD-198','OD-169'], status:'sent', activity:'Отправлена 19 сентября', views:0, agent:'Игорь Мельник', initials:'ИМ', note:'' },
  { id:'SL-004', title:'Варианты на Таирова', client:'Ирина', propertyIds:['OD-169','OD-187'], status:'draft', activity:'Не отправлена', views:0, agent:'Анна Коваль', initials:'АК', note:'' },
  { id:'SL-003', title:'Участок под строительство', client:'Владимир', propertyIds:['OD-181'], status:'viewed', activity:'Открыта 18 сентября', views:2, agent:'Игорь Мельник', initials:'ИМ', note:'' },
  { id:'SL-002', title:'Небольшая квартира до $70 000', client:'Светлана', propertyIds:['OD-187','OD-169'], status:'sent', activity:'Отправлена 17 сентября', views:0, agent:'Анна Коваль', initials:'АК', note:'' },
  { id:'SL-001', title:'Паркинг в Аркадии', client:'Дмитрий', propertyIds:['OD-161'], status:'draft', activity:'Не отправлена', views:0, agent:'Игорь Мельник', initials:'ИМ', note:'' }
];

const importHistory = [
  { file:'objects_september.xlsx', format:'XLSX', result:'24 объекта добавлено', details:'2 дубля пропущено', status:'done', agent:'Анна Коваль', initials:'АК', date:'16 сентября, 14:32' },
  { file:'investors_12-09.csv', format:'CSV', result:'18 объектов добавлено', details:'без ошибок', status:'done', agent:'Игорь Мельник', initials:'ИМ', date:'12 сентября, 11:08' },
  { file:'owners_base.xlsx', format:'XLSX', result:'9 объектов добавлено', details:'3 строки с ошибками', status:'issues', agent:'Николай Савчук', initials:'НС', date:'8 сентября, 17:45' },
  { file:'commercial_august.xlsx', format:'XLSX', result:'31 объект добавлен', details:'5 дублей пропущено', status:'done', agent:'Анна Коваль', initials:'АК', date:'29 августа, 10:21' }
];

const importColumns = [
  { source:'Адрес', target:'address', label:'Адрес *', example:'Генуэзская, 3Б' },
  { source:'Тип', target:'type', label:'Тип недвижимости *', example:'Квартира' },
  { source:'Комнаты', target:'rooms', label:'Количество комнат', example:'2' },
  { source:'Площадь', target:'area', label:'Общая площадь *', example:'68' },
  { source:'Цена', target:'price', label:'Цена *', example:'128000' },
  { source:'Телефон', target:'phone', label:'Телефон собственника *', example:'+380674201844' },
  { source:'Имя', target:'owner', label:'Имя собственника *', example:'Елена' },
  { source:'Район', target:'district', label:'Административный район *', example:'Приморский' }
];

const importPreview = [
  { row:2, object:'Квартира · Генуэзская, 3Б', contact:'Елена · +380 67 420 18 44', price:'$128 000', status:'ready', label:'Готово' },
  { row:3, object:'Квартира · Каманина, 16А', contact:'Роман · +380 73 550 91 12', price:'$92 000', status:'duplicate', label:'Возможный дубль' },
  { row:4, object:'Дом · Дача Ковалевского, 121', contact:'Марина · +380 50 318 72 40', price:'$295 000', status:'ready', label:'Готово' },
  { row:5, object:'Квартира · Люстдорфская дорога, 55', contact:'Телефон не указан', price:'$67 500', status:'error', label:'Нет телефона' },
  { row:6, object:'Коммерция · Большая Арнаутская, 22', contact:'Сергей · +380 99 267 38 16', price:'$220 000', status:'ready', label:'Готово' }
];

const state = { section:'Главная', view: 'grid', status: 'all', tab: 'all', search: '', type: 'all', district: 'all', rooms: 'all', selectionFilter:'all', selectionSearch:'', importHistoryFilter:'all', selected: new Set(), activePropertyId: null, activeSelectionId:null, newPhotos: [], newDocuments: [], existingPhotoCount:0, objectFormMode:'create', editingPropertyId:null };
const importState = { step:1, file:null, fileName:'', completed:false };
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
  const areaLabel = property.area ? (property.type === 'Участок' ? `${property.area} соток` : `${property.area} м²`) : 'Площадь не указана';
  return [roomLabel, areaLabel, property.floor];
}

function pricePerUnit(property) {
  const amount = Number(String(property.price).replace(/\D/g,''));
  if (!amount || !property.area || property.type === 'Участок') return '—';
  const symbol = property.currency === 'UAH' || String(property.price).startsWith('₴') ? '₴' : '$';
  return symbol + Math.round(amount / property.area).toLocaleString('ru-RU');
}

function locationLabel(property) {
  return [property.zone, property.district ? `${property.district} район` : ''].filter(Boolean).join(' · ');
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
      <p class="location">${locationLabel(property)}</p>
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

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[character]);
}

function selectionProperties(selection) {
  return selection.propertyIds.map((id) => properties.find((property) => property.id === id)).filter(Boolean);
}

function filteredSelections() {
  const search = state.selectionSearch.trim().toLocaleLowerCase('ru');
  return selections.filter((selection) => {
    const filterMatch = state.selectionFilter === 'all' || (state.selectionFilter === 'sent' ? selection.status !== 'draft' : selection.status === state.selectionFilter);
    const searchMatch = !search || `${selection.title} ${selection.client} ${selection.id}`.toLocaleLowerCase('ru').includes(search);
    return filterMatch && searchMatch;
  });
}

function selectionRowTemplate(selection) {
  const items = selectionProperties(selection);
  const coverA = items[0]?.image || properties[0].image;
  const coverB = items[1]?.image || coverA;
  const activityLabel = selection.status === 'viewed' ? `${selection.views} ${selection.views === 1 ? 'просмотр' : 'просмотра'}` : selection.status === 'sent' ? 'Ссылка отправлена' : 'Черновик';
  return `<article class="selection-row" data-selection-id="${selection.id}">
    <div class="selection-main"><span class="selection-cover-stack"><i style="background-image:url('${coverA}')"></i><i style="background-image:url('${coverB}')"></i></span><span><strong>${escapeHTML(selection.title)}</strong><small>${escapeHTML(selection.client || 'Клиент не указан')} · ${selection.id}</small></span></div>
    <div class="selection-object-count"><strong>${items.length} ${items.length === 1 ? 'объект' : items.length < 5 ? 'объекта' : 'объектов'}</strong><small>от $${Math.min(...items.map((item) => Number(String(item.price).replace(/\D/g,'')) || 0)).toLocaleString('ru-RU')}</small></div>
    <div class="selection-activity"><strong>${activityLabel}</strong><small>${escapeHTML(selection.activity)}</small></div>
    <div class="selection-agent"><span class="agent-avatar">${selection.initials}</span>${escapeHTML(selection.agent)}</div>
    <div class="selection-actions"><button data-selection-preview="${selection.id}" aria-label="Открыть клиентский вид">${icon('layers')}</button><button data-selection-copy="${selection.id}" aria-label="Скопировать ссылку">${icon('send')}</button></div>
  </article>`;
}

function renderSelections() {
  const items = filteredSelections();
  const list = document.getElementById('selectionList');
  document.getElementById('selectionCountBadge').textContent = selections.length;
  document.querySelector('.nav-item[data-section="Подборки"] b').textContent = selections.length;
  document.querySelector('[data-selection-filter="all"] span').textContent = selections.length;
  document.querySelector('[data-selection-filter="sent"] span').textContent = selections.filter((selection) => selection.status !== 'draft').length;
  document.querySelector('[data-selection-filter="viewed"] span').textContent = selections.filter((selection) => selection.status === 'viewed').length;
  document.querySelector('[data-selection-filter="draft"] span').textContent = selections.filter((selection) => selection.status === 'draft').length;
  list.innerHTML = items.length ? items.map(selectionRowTemplate).join('') : '<div class="selection-empty"><strong>Подборки не найдены</strong><p>Измените фильтр или создайте новую подборку.</p></div>';
  list.querySelectorAll('[data-selection-preview]').forEach((button) => button.addEventListener('click', () => openClientPreview(button.dataset.selectionPreview)));
  list.querySelectorAll('[data-selection-copy]').forEach((button) => button.addEventListener('click', () => copySelectionLink(button.dataset.selectionCopy)));
}

function importHistoryRowTemplate(item) {
  const statusClass = item.status === 'done' ? 'active' : 'attention';
  const statusLabel = item.status === 'done' ? 'Завершён' : 'Есть ошибки';
  return `<article class="import-history-row">
    <div class="import-history-file"><span class="file-kind">${item.format}</span><span><strong>${escapeHTML(item.file)}</strong><small>${statusLabel}</small></span></div>
    <div class="import-history-result"><strong>${escapeHTML(item.result)}</strong><small>${escapeHTML(item.details)}</small></div>
    <div class="import-history-agent"><span class="agent-avatar">${item.initials}</span>${escapeHTML(item.agent)}</div>
    <time>${escapeHTML(item.date)}</time>
    <button aria-label="Открыть детали импорта"><span class="status-badge ${statusClass}">${statusLabel}</span>${icon('chevron')}</button>
  </article>`;
}

function renderImportHistory() {
  const items = importHistory.filter((item) => state.importHistoryFilter === 'all' || item.status === state.importHistoryFilter);
  document.getElementById('importCountBadge').textContent = importHistory.length;
  document.getElementById('importHistoryList').innerHTML = items.length
    ? items.map(importHistoryRowTemplate).join('')
    : '<div class="selection-empty"><strong>Операции не найдены</strong><p>Измените фильтр истории импортов.</p></div>';
}

function renderImportMapping() {
  const targetOptions = [
    ['','Не импортировать'], ['address','Адрес'], ['type','Тип недвижимости'], ['rooms','Количество комнат'], ['area','Общая площадь'],
    ['price','Цена'], ['phone','Телефон собственника'], ['owner','Имя собственника'], ['district','Административный район'], ['zone','Микрорайон'], ['comment','Комментарий']
  ];
  document.getElementById('mappingTable').innerHTML = `<div class="mapping-row mapping-head"><span>Колонка в файле</span><span>Пример значения</span><span>Поле в базе</span></div>${importColumns.map((column) => `<label class="mapping-row"><span><strong>${column.source}</strong><small>Колонка из таблицы</small></span><code>${escapeHTML(column.example)}</code><select data-mapping-source="${column.source}">${targetOptions.map(([value,label]) => `<option value="${value}" ${value === column.target ? 'selected' : ''}>${label}${value === column.target && column.label.endsWith('*') ? ' *' : ''}</option>`).join('')}</select></label>`).join('')}`;
  document.querySelectorAll('[data-mapping-source]').forEach((select) => select.addEventListener('change', updateMappingProgress));
  updateMappingProgress();
}

function updateMappingProgress() {
  const selects = [...document.querySelectorAll('[data-mapping-source]')];
  const mapped = selects.filter((select) => select.value).length;
  document.getElementById('mappingProgress').textContent = `${mapped} из ${selects.length} сопоставлено`;
  if (importState.step === 2) document.getElementById('importNextButton').disabled = mapped < 6;
}

function renderImportPreview() {
  document.getElementById('importPreviewRows').innerHTML = importPreview.map((row) => `<div class="import-preview-row ${row.status}"><span>${row.row}</span><span><strong>${escapeHTML(row.object)}</strong><small>${row.status === 'duplicate' ? 'Совпадает адрес и телефон' : 'Данные из файла'}</small></span><span>${escapeHTML(row.contact)}</span><strong>${row.price}</strong><span class="validation-label ${row.status}">${row.label}</span></div>`).join('');
}

function updateImportWizard() {
  const copy = {
    1:['Выберите файл','Поддерживаются XLSX, XLS и CSV размером до 25 МБ'],
    2:['Сопоставьте колонки','Проверьте, куда будут сохранены данные из таблицы'],
    3:['Проверьте данные','Ошибки и возможные дубли отмечены до добавления в базу'],
    4:['Результат импорта','Файл обработан, итог операции сохранён в истории']
  };
  document.getElementById('importWizardTitle').textContent = copy[importState.step][0];
  document.getElementById('importWizardSubtitle').textContent = copy[importState.step][1];
  document.querySelectorAll('[data-import-step]').forEach((section) => section.classList.toggle('active', Number(section.dataset.importStep) === importState.step));
  document.querySelectorAll('[data-import-step-indicator]').forEach((button) => {
    const step = Number(button.dataset.importStepIndicator);
    button.classList.toggle('active', step === importState.step);
    button.classList.toggle('complete', step < importState.step);
  });
  const backButton = document.getElementById('importBackButton');
  const nextButton = document.getElementById('importNextButton');
  const hint = document.getElementById('importWizardHint');
  backButton.disabled = importState.step === 1 || importState.step === 4;
  nextButton.textContent = importState.step === 3 ? 'Импортировать 21 объект' : importState.step === 4 ? 'Закрыть' : 'Продолжить';
  if (importState.step === 1) {
    nextButton.disabled = !importState.fileName;
    hint.textContent = importState.fileName ? 'Файл выбран, можно перейти к сопоставлению' : 'Выберите файл, чтобы продолжить';
  } else if (importState.step === 2) {
    hint.textContent = 'Проверьте обязательные поля перед продолжением';
    updateMappingProgress();
  } else if (importState.step === 3) {
    nextButton.disabled = false;
    hint.textContent = 'Строки с ошибками не будут добавлены';
  } else {
    nextButton.disabled = false;
    hint.textContent = 'Подробности доступны в истории импортов';
  }
}

function resetImportWizard() {
  importState.step = 1;
  importState.file = null;
  importState.fileName = '';
  importState.completed = false;
  document.getElementById('importFileInput').value = '';
  document.getElementById('importFileCard').hidden = true;
  document.getElementById('importDropzone').hidden = false;
  renderImportMapping();
  renderImportPreview();
  updateImportWizard();
}

function openImportWizard() {
  resetImportWizard();
  openModal(importModal);
}

function selectImportFile(file) {
  if (!file) return;
  if (file.size > 25 * 1024 * 1024) { showToast('Файл больше 25 МБ'); return; }
  const extension = (file.name.split('.').pop() || 'XLSX').toUpperCase();
  if (!['XLSX','XLS','CSV'].includes(extension)) { showToast('Поддерживаются только XLSX, XLS и CSV'); return; }
  importState.file = file;
  importState.fileName = file.name;
  document.getElementById('importFileName').textContent = file.name;
  document.getElementById('mappingFileName').textContent = file.name;
  document.querySelector('#importFileCard .file-kind').textContent = extension;
  document.getElementById('importFileMeta').textContent = `${Math.max(1, Math.round(file.size / 1024))} КБ · файл готов к проверке`;
  document.getElementById('importFileCard').hidden = false;
  document.getElementById('importDropzone').hidden = true;
  updateImportWizard();
}

function completeImport() {
  if (!importState.completed) {
    importHistory.unshift({ file:importState.fileName, format:(importState.fileName.split('.').pop() || 'XLSX').toUpperCase(), result:'21 объект добавлен', details:'2 дубля, 1 ошибка', status:'issues', agent:'Анна Коваль', initials:'АК', date:'только что' });
    importState.completed = true;
    document.getElementById('importedTotal').textContent = '207';
    document.getElementById('duplicateTotal').textContent = '9';
    document.getElementById('errorTotal').textContent = '4';
    renderImportHistory();
  }
  importState.step = 4;
  updateImportWizard();
}

function downloadTextFile(filename, content, type='text/csv;charset=utf-8') {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function updateSelectionPickedCount() {
  const count = document.querySelectorAll('#selectionPropertyList input:checked').length;
  document.getElementById('selectionPickedCount').textContent = `${count} выбрано`;
}

function renderSelectionPicker(preselected = state.selected) {
  document.getElementById('selectionPropertyList').innerHTML = properties.map((property) => `<label class="selection-property-option"><input type="checkbox" value="${property.id}" ${preselected.has(property.id) ? 'checked' : ''}/><i style="background-image:url('${property.image}')"></i><span><strong>${escapeHTML(property.address)}</strong><small>${property.type} · ${locationLabel(property)}</small></span><b>${property.price}</b></label>`).join('');
  document.querySelectorAll('#selectionPropertyList input').forEach((input) => input.addEventListener('change', updateSelectionPickedCount));
  updateSelectionPickedCount();
}

function openSelectionModal(preselectedIds = state.selected) {
  document.getElementById('selectionForm').reset();
  renderSelectionPicker(new Set(preselectedIds));
  drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true');
  openModal(selectionModal);
}

function openClientPreview(selectionId) {
  const selection = selections.find((item) => item.id === selectionId);
  if (!selection) return;
  state.activeSelectionId = selectionId;
  document.getElementById('clientPreviewTitle').textContent = selection.client ? `${selection.title} · ${selection.client}` : selection.title;
  document.getElementById('clientPreviewNote').textContent = selection.note || 'Подобрали варианты по вашим параметрам. Точный адрес и детали показа уточнит риелтор.';
  document.getElementById('clientPropertyGrid').innerHTML = selectionProperties(selection).map((property) => {
    const fact = facts(property);
    return `<article class="client-property-card"><i style="background-image:url('${property.image}')"></i><div><small>${property.type} · ${property.zone}</small><strong>${property.district} район</strong><span>${fact[0]} · ${fact[1]} · ${fact[2]}</span><b>${property.price}</b></div></article>`;
  }).join('');
  openModal(clientPreviewModal);
}

async function copySelectionLink(selectionId) {
  const link = `https://estatebase.example/s/${selectionId.toLowerCase()}`;
  try { await navigator.clipboard.writeText(link); showToast('Ссылка на подборку скопирована'); }
  catch { showToast('Ссылка подготовлена для отправки'); }
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
    if (id === 'globalSearch' && event.target.value.trim()) showAppSection('Объекты');
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
  if (button.dataset.action === 'selection') { openSelectionModal(state.selected); return; }
  const labels = { agent:'Ответственный назначен', verify:'Объекты актуализированы', publish:'Отправлено в очередь публикации', archive:'Объекты перемещены в архив' };
  showToast(`${labels[button.dataset.action]}: ${state.selected.size}`);
  state.selected.clear();
  render();
}));

const overlay = document.getElementById('overlay');
const drawer = document.getElementById('detailDrawer');
const addModal = document.getElementById('addModal');
const importModal = document.getElementById('importModal');
const selectionModal = document.getElementById('selectionModal');
const clientPreviewModal = document.getElementById('clientPreviewModal');

function showOverlay() { overlay.classList.add('visible'); document.body.style.overflow = 'hidden'; }
function closeLayers() {
  drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true');
  addModal.classList.remove('open'); addModal.setAttribute('aria-hidden','true');
  importModal.classList.remove('open'); importModal.setAttribute('aria-hidden','true');
  selectionModal.classList.remove('open'); selectionModal.setAttribute('aria-hidden','true');
  clientPreviewModal.classList.remove('open'); clientPreviewModal.setAttribute('aria-hidden','true');
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
  const statusLabels = { active:'Активен', reserved:'Резерв', draft:'Черновик', attention:'Проверить' };
  const drawerStatusBadge = document.getElementById('drawerStatusBadge');
  drawerStatusBadge.textContent = statusLabels[property.status] || 'Активен';
  drawerStatusBadge.className = `status-badge ${property.status || 'active'}`;
  document.getElementById('drawerType').textContent = property.type;
  document.getElementById('drawerAddress').textContent = property.address;
  document.getElementById('drawerLocation').textContent = locationLabel(property);
  document.getElementById('drawerPrice').textContent = property.price;
  document.getElementById('drawerOwner').textContent = property.owner;
  document.getElementById('drawerOwnerInitials').textContent = property.owner.split(' ').map((part) => part[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('drawerPhone').textContent = property.phone;
  document.getElementById('drawerPhone').href = `tel:${property.phone.replace(/\s/g,'')}`;
  document.getElementById('drawerPhoto').style.backgroundImage = `url('${property.image}')`;
  document.getElementById('drawerPhotoCount').textContent = property.photoCount === 0 ? 'Нет фото' : `${property.photoCount || 12} фото`;
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
  document.getElementById('drawerFacts').innerHTML = `<div class="key-fact"><small>Комнаты</small><strong>${property.rooms || '—'}</strong></div><div class="key-fact"><small>Площадь</small><strong>${property.area ? (property.type === 'Участок' ? property.area + ' сот.' : property.area + ' м²') : '—'}</strong></div><div class="key-fact"><small>Этаж</small><strong>${property.floor}</strong></div><div class="key-fact"><small>Цена за м²</small><strong>${pricePerUnit(property)}</strong></div>`;
  drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); showOverlay();
}

function openModal(modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); showOverlay(); }
document.getElementById('drawerClose').addEventListener('click', closeLayers);
overlay.addEventListener('click', closeLayers);
document.querySelectorAll('.modal-close').forEach((button) => button.addEventListener('click', closeLayers));

const formStepButtons = [...document.querySelectorAll('[data-form-step]')];
const formPanels = [...document.querySelectorAll('[data-form-panel]')];
const typeFieldGroups = [...document.querySelectorAll('[data-property-fields]')];
const propertyTypeInput = document.getElementById('propertyType');
const detailsHint = document.getElementById('detailsHint');
const typeHints = {
  'Квартира':'Площади, этаж, состояние и параметры квартиры.',
  'Дом':'Площадь дома, комнаты, участок и коммуникации.',
  'Участок':'Площадь и целевое назначение участка.',
  'Коммерция':'Площадь и назначение помещения.',
  'Паркинг':'Основные параметры парковочного места.'
};

function setFormStep(step) {
  formStepButtons.forEach((button) => button.classList.toggle('active', button.dataset.formStep === step));
  formPanels.forEach((panel) => panel.classList.toggle('active', panel.dataset.formPanel === step));
  document.querySelector('.object-form-content').scrollTop = 0;
}

function activeRequiredFields() {
  const base = [...document.querySelectorAll('#addForm [data-required-field]')];
  const activeGroup = document.querySelector(`[data-property-fields="${propertyTypeInput.value}"]`);
  return [...base, ...(activeGroup ? [...activeGroup.querySelectorAll('[data-active-required]')] : [])];
}

function fieldHasValue(field) {
  return field.type === 'checkbox' ? field.checked : String(field.value || '').trim() !== '';
}

function updateFormReadiness() {
  const fields = activeRequiredFields();
  const completed = fields.filter(fieldHasValue).length;
  const percent = fields.length ? Math.round(completed / fields.length * 100) : 0;
  document.getElementById('formReadinessPercent').textContent = `${percent}%`;
  document.getElementById('formReadinessBar').style.width = `${percent}%`;
  document.getElementById('formReadinessText').textContent = percent === 100
    ? (state.objectFormMode === 'edit' ? 'Карточка заполнена' : 'Можно создавать активный объект')
    : `Осталось обязательных полей: ${fields.length - completed}`;
  document.getElementById('formValidationMessage').textContent = '';
}

function updatePropertyType() {
  const type = propertyTypeInput.value;
  typeFieldGroups.forEach((group) => group.classList.toggle('active', group.dataset.propertyFields === type));
  detailsHint.textContent = typeHints[type];
  updateObjectFormActions();
  updateFormReadiness();
}

function updateObjectFormActions() {
  const status = document.getElementById('propertyInitialStatus').value;
  const submit = document.getElementById('activatePropertyButton');
  const draft = document.getElementById('saveDraft');
  if (state.objectFormMode === 'edit') {
    submit.textContent = 'Сохранить изменения';
    draft.hidden = true;
  } else {
    submit.textContent = status === 'reserved' ? 'Создать в резерве' : status === 'draft' ? 'Создать черновик' : 'Создать активный';
    draft.hidden = false;
  }
}

document.getElementById('propertyInitialStatus').addEventListener('change', updateObjectFormActions);

function resetCreateForm() {
  document.getElementById('addForm').reset();
  state.newPhotos = [];
  state.newDocuments = [];
  state.existingPhotoCount = 0;
  document.getElementById('exclusiveDateField').classList.add('hidden-field');
  document.querySelectorAll('#addForm .field-error').forEach((label) => label.classList.remove('field-error'));
  renderPhotoPreview();
  renderDocumentPreview();
  updatePropertyType();
  setFormStep('main');
}

function openCreateForm() {
  state.objectFormMode = 'create';
  state.editingPropertyId = null;
  resetCreateForm();
  document.getElementById('objectFormEyebrow').textContent = 'Новый объект';
  document.getElementById('objectFormHeading').textContent = 'Карточка объекта';
  document.getElementById('objectFormModeChip').textContent = 'Черновик';
  document.getElementById('objectFormSubheading').textContent = 'Обязательные поля отмечены звёздочкой.';
  updateObjectFormActions();
  openModal(addModal);
}

formStepButtons.forEach((button) => button.addEventListener('click', () => setFormStep(button.dataset.formStep)));
propertyTypeInput.addEventListener('change', updatePropertyType);
document.getElementById('propertyExclusive').addEventListener('change', (event) => {
  document.getElementById('exclusiveDateField').classList.toggle('hidden-field', !event.target.checked);
});
document.querySelectorAll('#addForm input, #addForm select, #addForm textarea').forEach((field) => {
  field.addEventListener('input', () => { field.closest('label')?.classList.remove('field-error'); updateFormReadiness(); });
  field.addEventListener('change', () => { field.closest('label')?.classList.remove('field-error'); updateFormReadiness(); });
});

function renderPhotoPreview() {
  const container = document.getElementById('photoPreview');
  container.innerHTML = `<button type="button" class="media-add" id="photoDropButton"><span>${icon('image')}</span><strong>Добавить фото</strong><small>JPG или PNG</small></button>` + state.newPhotos.map((photo, index) => `<div class="media-thumb" style="background-image:url('${photo.url}')"><button type="button" data-remove-photo="${index}" aria-label="Удалить фото">${icon('close')}</button></div>`).join('');
  container.querySelector('#photoDropButton').addEventListener('click', () => document.getElementById('photoInput').click());
  container.querySelectorAll('[data-remove-photo]').forEach((button) => button.addEventListener('click', () => {
    const index = Number(button.dataset.removePhoto);
    URL.revokeObjectURL(state.newPhotos[index].url);
    state.newPhotos.splice(index, 1);
    renderPhotoPreview();
  }));
}

function renderDocumentPreview() {
  const container = document.getElementById('documentPreview');
  if (!state.newDocuments.length) {
    container.innerHTML = `<div class="document-placeholder">${icon('file')}<p>Можно добавить договор, техпаспорт или другой файл.</p></div>`;
    return;
  }
  container.innerHTML = state.newDocuments.map((file, index) => `<div class="uploaded-document">${icon('file')}<div><strong>${file.name}</strong><small>${Math.max(1, Math.round(file.size / 1024))} КБ · только внутри агентства</small></div><button type="button" data-remove-document="${index}" aria-label="Удалить документ">${icon('close')}</button></div>`).join('');
  container.querySelectorAll('[data-remove-document]').forEach((button) => button.addEventListener('click', () => {
    state.newDocuments.splice(Number(button.dataset.removeDocument), 1);
    renderDocumentPreview();
  }));
}

document.getElementById('choosePhotosButton').addEventListener('click', () => document.getElementById('photoInput').click());
document.getElementById('photoInput').addEventListener('change', (event) => {
  [...event.target.files].slice(0, 12 - state.newPhotos.length).forEach((file) => state.newPhotos.push({ name:file.name, url:URL.createObjectURL(file) }));
  event.target.value = '';
  renderPhotoPreview();
});
document.getElementById('chooseDocumentsButton').addEventListener('click', () => document.getElementById('documentInput').click());
document.getElementById('documentInput').addEventListener('change', (event) => {
  state.newDocuments.push(...[...event.target.files].map((file) => ({ name:file.name, size:file.size })));
  event.target.value = '';
  renderDocumentPreview();
});

function validateActiveProperty() {
  const missing = activeRequiredFields().filter((field) => !fieldHasValue(field));
  document.querySelectorAll('#addForm .field-error').forEach((label) => label.classList.remove('field-error'));
  missing.forEach((field) => field.closest('label')?.classList.add('field-error'));
  if (!missing.length) return true;
  const firstPanel = missing[0].closest('[data-form-panel]');
  if (firstPanel) setFormStep(firstPanel.dataset.formPanel);
  document.getElementById('formValidationMessage').textContent = `Не заполнено обязательных полей: ${missing.length}`;
  missing[0].focus();
  return false;
}

function validateDraftProperty() {
  const fields = ['propertyAddress', 'ownerName', 'ownerPhone'].map((id) => document.getElementById(id));
  const missing = fields.filter((field) => !fieldHasValue(field));
  document.querySelectorAll('#addForm .field-error').forEach((label) => label.classList.remove('field-error'));
  missing.forEach((field) => field.closest('label')?.classList.add('field-error'));
  if (!missing.length) return true;
  const firstPanel = missing[0].closest('[data-form-panel]');
  if (firstPanel) setFormStep(firstPanel.dataset.formPanel);
  document.getElementById('formValidationMessage').textContent = 'Для черновика нужны адрес, имя и телефон';
  missing[0].focus();
  return false;
}

function value(id) { return document.getElementById(id).value.trim(); }
function numberValue(id) { return Number(document.getElementById(id).value) || 0; }
function agentInitials(name) { return name.split(' ').map((part) => part[0]).join('').slice(0,2).toUpperCase(); }

function typeSpecificValues(type) {
  if (type === 'Квартира') return { rooms:numberValue('apartmentRooms'), area:numberValue('apartmentArea'), floor:`${value('apartmentFloor') || '—'} / ${value('apartmentFloors') || '—'}` };
  if (type === 'Дом') return { rooms:numberValue('houseRooms'), area:numberValue('houseArea'), floor:value('houseFloors') ? `${value('houseFloors')} этажа` : 'Этажность не указана' };
  if (type === 'Участок') return { rooms:0, area:numberValue('landArea'), floor:`${numberValue('landArea')} соток` };
  if (type === 'Коммерция') return { rooms:0, area:numberValue('commercialArea'), floor:value('commercialFloor') ? `${value('commercialFloor')} этаж` : 'Этаж не указан' };
  return { rooms:0, area:numberValue('parkingArea') || 18, floor:value('parkingLevel') ? `${value('parkingLevel')} уровень` : 'Уровень не указан' };
}

function collectPropertyDetails() {
  return {
    unit:value('propertyUnit'),
    contactSource:document.querySelector('input[name="contactSource"]:checked').value,
    altPhone:value('ownerAltPhone'),
    messenger:value('ownerMessenger'),
    ownerComment:value('ownerComment'),
    exclusiveDate:value('exclusiveDate'),
    apartment:{ floor:value('apartmentFloor'), floors:value('apartmentFloors'), livingArea:value('apartmentLivingArea'), kitchenArea:value('apartmentKitchenArea'), buildingType:value('apartmentBuildingType'), condition:value('apartmentCondition'), bathroom:value('apartmentBathroom'), balcony:document.getElementById('apartmentBalcony').checked },
    house:{ floors:value('houseFloors'), lotArea:value('houseLotArea'), material:value('houseMaterial'), condition:value('houseCondition'), utilities:document.getElementById('houseUtilities').checked },
    land:{ purpose:value('landPurpose'), frontage:value('landFrontage'), utilities:document.getElementById('landUtilities').checked },
    commercial:{ floor:value('commercialFloor'), purpose:value('commercialPurpose'), entrance:document.getElementById('commercialEntrance').checked },
    parking:{ type:value('parkingType'), level:value('parkingLevel') }
  };
}

function propertyFromForm(status, id) {
  const type = propertyTypeInput.value;
  const specific = typeSpecificValues(type);
  const priceNumber = numberValue('propertyPrice');
  const currency = document.getElementById('propertyCurrency').value;
  const price = priceNumber ? (currency === 'UAH' ? `₴${priceNumber.toLocaleString('ru-RU')}` : `$${priceNumber.toLocaleString('ru-RU')}`) : 'Цена не указана';
  const agent = document.getElementById('propertyAgent').value;
  return {
    id,
    type,
    address:value('propertyAddress') || 'Адрес не указан',
    district:value('propertyDistrict'),
    zone:value('propertyZone'),
    rooms:specific.rooms,
    area:specific.area,
    floor:specific.floor,
    price,
    currency,
    owner:value('ownerName') || 'Контакт не указан',
    phone:value('ownerPhone') || 'Телефон не указан',
    agent,
    initials:agentInitials(agent),
    status,
    statusText:status === 'draft' ? 'Черновик · нужно заполнить' : status === 'reserved' ? 'Резерв создан сегодня' : status === 'attention' ? 'Требует актуализации' : 'Создан сегодня',
    exclusive:document.getElementById('propertyExclusive').checked,
    published:false,
    image:state.newPhotos[0]?.url || 'https://images.pexels.com/photos/6970066/pexels-photo-6970066.jpeg?auto=compress&fit=crop&w=900&h=620',
    photoCount:state.newPhotos.some((photo) => photo.persisted) ? state.existingPhotoCount + state.newPhotos.filter((photo) => !photo.persisted).length : state.newPhotos.length,
    comment:value('propertyComment') || value('ownerComment'),
    documents:state.newDocuments.map((file) => file.name),
    details:collectPropertyDetails()
  };
}

function createProperty(status) {
  const idNumber = Math.max(...properties.map((item) => Number(item.id.replace(/\D/g,'')))) + 1;
  const property = propertyFromForm(status, `OD-${idNumber}`);
  property.history = [{ icon:'plus', title:status === 'draft' ? 'Создан черновик объекта' : status === 'reserved' ? 'Объект создан в резерве' : 'Объект создан и активирован', meta:'Анна Коваль · только что' }];
  properties.unshift(property);
  closeLayers();
  state.status = 'all'; state.tab = 'all'; state.search = ''; state.type = 'all'; state.district = 'all'; state.rooms = 'all';
  resetFilters();
  openDrawer(property.id);
  showToast(status === 'draft' ? `${property.id} сохранён как черновик` : `${property.id} создан и добавлен в активную базу`);
}

function setFormValue(id, fieldValue) {
  const field = document.getElementById(id);
  if (!field) return;
  if (field.type === 'checkbox') field.checked = Boolean(fieldValue);
  else field.value = fieldValue ?? '';
}

function populatePropertyForm(property) {
  const details = property.details || {};
  const apartment = details.apartment || {};
  const house = details.house || {};
  const land = details.land || {};
  const commercial = details.commercial || {};
  const parking = details.parking || {};
  const floorParts = String(property.floor || '').split('/').map((part) => part.trim().replace(/\D/g,''));

  setFormValue('propertyType', property.type);
  setFormValue('propertyAddress', property.address);
  setFormValue('propertyUnit', details.unit);
  setFormValue('propertyDistrict', property.district);
  setFormValue('propertyZone', property.zone);
  setFormValue('propertyPrice', Number(String(property.price).replace(/\D/g,'')) || '');
  setFormValue('propertyCurrency', property.currency || (String(property.price).startsWith('₴') ? 'UAH' : 'USD'));
  setFormValue('propertyInitialStatus', ['active','reserved','attention','draft'].includes(property.status) ? property.status : 'active');

  const sourceRadio = document.querySelector(`input[name="contactSource"][value="${details.contactSource || 'owner'}"]`);
  if (sourceRadio) sourceRadio.checked = true;
  setFormValue('ownerName', property.owner);
  setFormValue('ownerPhone', property.phone);
  setFormValue('ownerAltPhone', details.altPhone);
  setFormValue('ownerMessenger', details.messenger);
  setFormValue('ownerComment', details.ownerComment);
  setFormValue('propertyAgent', property.agent);
  setFormValue('propertyExclusive', property.exclusive);
  setFormValue('exclusiveDate', details.exclusiveDate);
  document.getElementById('exclusiveDateField').classList.toggle('hidden-field', !property.exclusive);

  setFormValue('apartmentRooms', property.type === 'Квартира' ? property.rooms : '');
  setFormValue('apartmentArea', property.type === 'Квартира' ? property.area : '');
  setFormValue('apartmentFloor', apartment.floor || floorParts[0]);
  setFormValue('apartmentFloors', apartment.floors || floorParts[1]);
  setFormValue('apartmentLivingArea', apartment.livingArea);
  setFormValue('apartmentKitchenArea', apartment.kitchenArea);
  setFormValue('apartmentBuildingType', apartment.buildingType);
  setFormValue('apartmentCondition', apartment.condition);
  setFormValue('apartmentBathroom', apartment.bathroom);
  setFormValue('apartmentBalcony', apartment.balcony);

  setFormValue('houseRooms', property.type === 'Дом' ? property.rooms : '');
  setFormValue('houseArea', property.type === 'Дом' ? property.area : '');
  setFormValue('houseFloors', house.floors || (property.type === 'Дом' ? String(property.floor).replace(/\D/g,'') : ''));
  setFormValue('houseLotArea', house.lotArea);
  setFormValue('houseMaterial', house.material);
  setFormValue('houseCondition', house.condition);
  setFormValue('houseUtilities', house.utilities);

  setFormValue('landArea', property.type === 'Участок' ? property.area : '');
  setFormValue('landPurpose', land.purpose);
  setFormValue('landFrontage', land.frontage);
  setFormValue('landUtilities', land.utilities);

  setFormValue('commercialArea', property.type === 'Коммерция' ? property.area : '');
  setFormValue('commercialFloor', commercial.floor || (property.type === 'Коммерция' ? String(property.floor).replace(/\D/g,'') : ''));
  setFormValue('commercialPurpose', commercial.purpose);
  setFormValue('commercialEntrance', commercial.entrance);

  setFormValue('parkingType', parking.type || 'Место в паркинге');
  setFormValue('parkingArea', property.type === 'Паркинг' ? property.area : 18);
  setFormValue('parkingLevel', parking.level || (property.type === 'Паркинг' ? String(property.floor).replace(' уровень','') : ''));
  setFormValue('propertyComment', property.comment);

  state.existingPhotoCount = property.photoCount ?? 12;
  state.newPhotos = property.photoCount === 0 ? [] : [{ name:'Текущая обложка', url:property.image, persisted:true }];
  state.newDocuments = (property.documents || []).map((name) => ({ name, size:0 }));
  renderPhotoPreview();
  renderDocumentPreview();
  updatePropertyType();
}

function openFullEditForm(step = 'main') {
  const property = properties.find((item) => item.id === state.activePropertyId);
  if (!property) return;
  state.objectFormMode = 'edit';
  state.editingPropertyId = property.id;
  resetCreateForm();
  populatePropertyForm(property);
  document.getElementById('objectFormEyebrow').textContent = 'Редактирование объекта';
  document.getElementById('objectFormHeading').textContent = `${property.id} · ${property.address}`;
  document.getElementById('objectFormModeChip').textContent = property.status === 'draft' ? 'Черновик' : 'В базе';
  document.getElementById('objectFormSubheading').textContent = 'После сохранения изменения появятся в журнале карточки.';
  updateObjectFormActions();
  setFormStep(step);
  drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true');
  openModal(addModal);
}

function updateExistingProperty(status) {
  const property = properties.find((item) => item.id === state.editingPropertyId);
  if (!property) return;
  const before = { price:property.price, address:property.address, status:property.status, type:property.type };
  const history = propertyHistory(property);
  const published = property.published;
  Object.assign(property, propertyFromForm(status, property.id));
  property.published = published;
  property.history = history;
  property.statusText = status === 'draft'
    ? 'Черновик · обновлён только что'
    : status === 'reserved'
      ? 'Резерв · обновлён только что'
      : status === 'attention'
        ? 'Требует актуализации'
        : 'Обновлён только что';
  const changes = [];
  if (before.price !== property.price) changes.push(`цена ${before.price} → ${property.price}`);
  if (before.address !== property.address) changes.push('адрес');
  if (before.status !== property.status) changes.push('статус');
  if (before.type !== property.type) changes.push('тип объекта');
  history.unshift({ icon:'edit', title:changes.length ? `Изменено: ${changes.join(', ')}` : 'Обновлены данные объекта', meta:'Анна Коваль · только что' });
  closeLayers();
  render();
  openDrawer(property.id);
  showToast(`${property.id} обновлён, изменение добавлено в журнал`);
}

document.getElementById('addButton').addEventListener('click', openCreateForm);
document.getElementById('mobileAdd').addEventListener('click', openCreateForm);
document.getElementById('importButton').addEventListener('click', openImportWizard);
document.getElementById('addForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.getElementById('propertyInitialStatus').value;
  const valid = status === 'draft' ? validateDraftProperty() : validateActiveProperty();
  if (!valid) return;
  if (state.objectFormMode === 'edit') updateExistingProperty(status); else createProperty(status);
});
document.getElementById('saveDraft').addEventListener('click', () => { if (validateDraftProperty()) createProperty('draft'); });
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

document.getElementById('editPropertyButton').addEventListener('click', () => openFullEditForm('main'));
document.getElementById('editCommentButton').addEventListener('click', () => openFullEditForm('media'));

document.getElementById('addToSelectionButton').addEventListener('click', () => openSelectionModal(new Set([state.activePropertyId])));
document.getElementById('updateRiaButton').addEventListener('click', () => showToast('Обновление DIM.RIA поставлено в очередь'));
document.getElementById('publicationSettingsButton').addEventListener('click', () => showToast('Настройки публикаций будут отдельным экраном'));
document.getElementById('changeAgentButton').addEventListener('click', () => showToast('Ответственного может сменить руководитель'));
document.getElementById('addDocumentButton').addEventListener('click', () => showToast('Документ отмечен в карточке объекта'));
document.getElementById('editOwnerButton').addEventListener('click', () => openFullEditForm('contact'));
document.getElementById('menuButton').addEventListener('click', () => { document.getElementById('sidebar').classList.add('open'); showOverlay(); });

const sectionCopy = {
  'Импорт': { icon:'upload', eyebrow:'Наполнение базы', description:'История загрузок Excel и CSV, проверка строк и найденные дубли.', title:'Импорт объектов', text:'Мастер загрузки уже доступен кнопкой «Импорт». Здесь появятся история операций и разбор ошибок.' },
  'Публикации': { icon:'send', eyebrow:'Внешние площадки', description:'Состояние объявлений агентства на OLX и DIM.RIA.', title:'Центр публикаций', text:'Здесь будут очереди отправки, ошибки площадок и синхронизация изменённых объектов.' },
  'Команда': { icon:'users', eyebrow:'Управление', description:'Сотрудники агентства, ответственность за объекты и рабочая активность.', title:'Команда агентства', text:'Здесь появятся сотрудники, нагрузка по объектам и управление доступами.' },
  'Настройки': { icon:'settings', eyebrow:'Управление', description:'Параметры базы, справочники, курс НБУ и правила актуализации.', title:'Настройки базы', text:'Здесь будут справочники районов, сроки актуализации, реквизиты агентства и подключения.' }
};

function showAppSection(section) {
  state.section = section;
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.section === section));
  document.querySelectorAll('.app-view').forEach((view) => { view.classList.remove('active'); view.hidden = true; });
  const target = section === 'Главная'
    ? document.getElementById('dashboardView')
    : section === 'Объекты'
      ? document.getElementById('objectsView')
      : section === 'Подборки'
        ? document.getElementById('selectionsView')
        : section === 'Импорт'
          ? document.getElementById('importView')
        : document.getElementById('sectionPlaceholder');
  target.hidden = false;
  target.classList.add('active');
  if (sectionCopy[section]) {
    const copy = sectionCopy[section];
    const placeholder = document.getElementById('sectionPlaceholder');
    placeholder.querySelector('.eyebrow').textContent = copy.eyebrow;
    document.getElementById('placeholderTitle').textContent = section;
    document.getElementById('placeholderDescription').textContent = copy.description;
    document.getElementById('placeholderPanelTitle').textContent = copy.title;
    document.getElementById('placeholderPanelText').textContent = copy.text;
    document.getElementById('placeholderIcon').innerHTML = icon(copy.icon);
  }
  document.title = `Estate Base — ${section}`;
  if (section === 'Подборки') renderSelections();
  if (section === 'Импорт') renderImportHistory();
  document.getElementById('sidebar').classList.remove('open');
  if (window.innerWidth <= 700) { overlay.classList.remove('visible'); document.body.style.overflow = ''; }
  window.scrollTo({ top:0, behavior:'smooth' });
}

function openObjectsByStatus(status = 'all') {
  showAppSection('Объекты');
  state.status = status;
  document.querySelectorAll('.metric').forEach((item) => item.classList.toggle('active', item.dataset.status === status));
  render();
}

document.querySelectorAll('.nav-item, [data-navigate]').forEach((button) => button.addEventListener('click', () => showAppSection(button.dataset.section || button.dataset.navigate)));
document.querySelectorAll('[data-open-status]').forEach((button) => button.addEventListener('click', () => openObjectsByStatus(button.dataset.openStatus)));
document.querySelectorAll('[data-open-property]').forEach((button) => button.addEventListener('click', () => { showAppSection('Объекты'); openDrawer(button.dataset.openProperty); }));
document.querySelector('[data-dashboard-action="add"]').addEventListener('click', openCreateForm);
document.querySelector('[data-dashboard-action="import"]').addEventListener('click', openImportWizard);
document.getElementById('newImportButton').addEventListener('click', openImportWizard);
document.getElementById('importHistoryFilter').addEventListener('change', (event) => { state.importHistoryFilter = event.target.value; renderImportHistory(); });
document.getElementById('importDropzone').addEventListener('click', () => document.getElementById('importFileInput').click());
document.getElementById('replaceImportFile').addEventListener('click', () => document.getElementById('importFileInput').click());
document.getElementById('importFileInput').addEventListener('change', (event) => selectImportFile(event.target.files[0]));
document.getElementById('importDropzone').addEventListener('dragover', (event) => { event.preventDefault(); event.currentTarget.classList.add('dragging'); });
document.getElementById('importDropzone').addEventListener('dragleave', (event) => event.currentTarget.classList.remove('dragging'));
document.getElementById('importDropzone').addEventListener('drop', (event) => { event.preventDefault(); event.currentTarget.classList.remove('dragging'); selectImportFile(event.dataTransfer.files[0]); });
document.getElementById('importBackButton').addEventListener('click', () => { if (importState.step > 1 && importState.step < 4) { importState.step -= 1; updateImportWizard(); } });
document.getElementById('importNextButton').addEventListener('click', () => {
  if (importState.step === 1 && importState.fileName) { importState.step = 2; updateImportWizard(); return; }
  if (importState.step === 2) { importState.step = 3; updateImportWizard(); return; }
  if (importState.step === 3) { completeImport(); showToast('Импорт завершён: 21 объект добавлен'); return; }
  closeLayers(); showAppSection('Импорт');
});
document.getElementById('downloadImportTemplate').addEventListener('click', () => downloadTextFile('import-template.csv', 'Адрес,Тип,Комнаты,Площадь,Цена,Телефон,Имя,Район\n'));
document.getElementById('downloadImportReport').addEventListener('click', () => downloadTextFile('import-report.csv', 'Строка,Статус,Комментарий\n3,Дубль,Совпадает адрес и телефон\n5,Ошибка,Не указан телефон\n'));
document.getElementById('newSelectionButton').addEventListener('click', () => openSelectionModal(new Set()));
document.querySelectorAll('[data-selection-filter]').forEach((button) => button.addEventListener('click', () => {
  state.selectionFilter = button.dataset.selectionFilter;
  document.querySelectorAll('[data-selection-filter]').forEach((item) => item.classList.toggle('active', item === button));
  renderSelections();
}));
document.getElementById('selectionSearch').addEventListener('input', (event) => { state.selectionSearch = event.target.value; renderSelections(); });
document.getElementById('selectSuggestedButton').addEventListener('click', () => {
  document.querySelectorAll('#selectionPropertyList input').forEach((input, index) => { input.checked = index < 3; });
  updateSelectionPickedCount();
});
document.getElementById('selectionForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const propertyIds = [...document.querySelectorAll('#selectionPropertyList input:checked')].map((input) => input.value);
  if (!propertyIds.length) { showToast('Выберите хотя бы один объект'); return; }
  const idNumber = Math.max(...selections.map((selection) => Number(selection.id.replace(/\D/g,'')))) + 1;
  const selection = { id:`SL-${String(idNumber).padStart(3,'0')}`, title:document.getElementById('selectionTitle').value.trim(), client:document.getElementById('selectionClient').value.trim(), note:document.getElementById('selectionNote').value.trim(), propertyIds, status:'draft', activity:'Создана только что', views:0, agent:'Анна Коваль', initials:'АК' };
  selections.unshift(selection);
  state.selected.clear();
  closeLayers();
  showAppSection('Подборки');
  render();
  showToast(`${selection.id} создана как черновик`);
});
document.getElementById('copyPreviewLinkButton').addEventListener('click', () => copySelectionLink(state.activeSelectionId));

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
