const timeSlots = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var hourlySales = new Array();

function hourlySalesIns(min, max, avgCookie){
  for(let i = 0; i < 14; i += 1){
    hourlySales[i] = getRandomInt(min, max) * avgCookie;
    hourlySales[i] = Math.floor(hourlySales[i]);
  }
  return hourlySales;
}


const allKittens = [];

const table = document.getElementById('kitten-chart');


function Kitten(name, min, max, avgCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.hourlySales = Array.from(hourlySalesIns(min, max, avgCookie));
  let total = 0;
  for (let i = 0; i < this.hourlySales.length; i += 1) {
    const currentSales = this.hourlySales[i];
    total += currentSales;
  }
  this.total=total;
  allKittens.push(this);
}
let total6am = 0;
let total7am = 0;
let total8am = 0;
let total9am = 0;
let total10am = 0;
let total11am = 0;
let total12am = 0;
let total1pm = 0;
let total2pm = 0;
let total3pm = 0;
let total4pm = 0;
let total5pm = 0;
let total6pm = 0;
let total7pm = 0;
Kitten.prototype.render = function () {
  const row = createChild('tr', table);
  const name = this.name
  createChild('td', row, name);
 // const propertyNames = ['name', 'min', 'max', 'avgCookie'];
  for (let i = 0; i < this.hourlySales.length; i++) {
    const currentHourlySales = this.hourlySales[i];
    createChild('td', row, currentHourlySales);
  }
  createChild('td', row, this.total);
  total6am = total6am + this.hourlySales[0];
  total7am = total7am + this.hourlySales[1];
  total8am = total8am + this.hourlySales[2];
  total9am = total9am + this.hourlySales[3];
  total10am = total10am + this.hourlySales[4];
  total11am = total11am + this.hourlySales[5];
  total12am = total12am + this.hourlySales[6];
  total1pm = total1pm + this.hourlySales[7];
  total2pm = total2pm + this.hourlySales[8];
  total3pm = total3pm + this.hourlySales[9];
  total4pm = total4pm + this.hourlySales[10];
  total5pm = total5pm + this.hourlySales[11];
  total6pm = total6pm + this.hourlySales[12];
  total7pm = total7pm + this.hourlySales[13];
}

function createChild(tag, parent, text) {
  const child = document.createElement(tag);
  parent.appendChild(child);
  if (text !== undefined) {
    child.textContent = text;
  }
  return child;
}

function createHeaderRow() {

  const row = createChild('tr', table);

  const columnNames = ['name'];

  for (let i = 0; i < columnNames.length; i++) {
    createChild('th', row, columnNames[i]);
  }
  for (let i=0; i<timeSlots.length; i++){
      createChild('th', row, timeSlots[i]);
  }
  createChild('th', row, 'Total');
}


function renderKittens() {
  for (let i = 0; i < allKittens.length; i++) {
    allKittens[i].render();
  }
}

function createFooterRow() {
  const row = createChild('tr', table);
  createChild('th', row, 'Total');
  createChild('th', row, total6am);
  createChild('th', row, total7am);
  createChild('th', row, total8am);
  createChild('th', row, total9am);
  createChild('th', row, total10am);
  createChild('th', row, total11am);
  createChild('th', row, total12am);
  createChild('th', row, total1pm);
  createChild('th', row, total2pm);
  createChild('th', row, total3pm);
  createChild('th', row, total4pm);
  createChild('th', row, total5pm);
  createChild('th', row, total6pm);
  createChild('th', row, total7pm);
  let total = total6am + total7am + total8am + total9am + total10am + total11am + total12am + total1pm + total2pm + total3pm + total4pm + total5pm + total6pm + total7pm;
  createChild('th', row, total);
  

}

// listen for submits

function addKittenHandler(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const min = event.target.min.value;
  const max = event.target.max.value;
  let avgCookie = event.target.avgCookie.value;
  // interests = interests.split(',');
  
  const newKitten = new Kitten(name, min, max, avgCookie);

  table.innerHTML = '';

  renderTable();

  event.target.reset();

}

function renderTable() {

  createHeaderRow();

  renderKittens();

  createFooterRow();
}

// wire up event listener
const addKittenForm = document.getElementById('add-kitten-form');
addKittenForm.addEventListener('submit', addKittenHandler);



renderTable();