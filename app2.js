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


function Kitten(name, breed, interests, coatColor) {
  this.name = name;
  this.breed = breed || 'unknown';
  this.interests = interests || 'none';
  this.coatColor = coatColor || 'not specified';


  allKittens.push(this);
}

Kitten.prototype.render = function () {
  const row = createChild('tr', table);
  const propertyNames = ['name', 'breed', 'interests', 'coatColor'];
  for (let i = 0; i < propertyNames.length; i++) {
    const currentPropertyName = propertyNames[i];

    // common use for bracket notation instead of dot notation
    const currentPropertyValue = this[currentPropertyName];
    createChild('td', row, currentPropertyValue);
  }

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

  const columnNames = ['name', 'breed', 'interests', 'coatColor'];

  for (let i = 0; i < columnNames.length; i++) {
    createChild('th', row, columnNames[i]);
  }
}

function createFooterRow() {

  const row = createChild('tr', table);

  const th = createChild('th', row, 'Kittens to Adopt ' + allKittens.length);
  th.setAttribute('colspan', '7');

}

function renderKittens() {
  for (let i = 0; i < allKittens.length; i++) {
    allKittens[i].render();
  }
}



// listen for submits

function addKittenHandler(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const breed = event.target.breed.value;
  const coatColor = event.target.coatColor.value;
  let interests = event.target.interests.value;
  // interests = interests.split(',');
  
  const newKitten = new Kitten(name, breed, interests, coatColor);

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