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
// function random
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

//function Create object
function CookieProfile(name, min, max,avgCookie){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.hourlySales = Array.from(hourlySalesIns(min, max, avgCookie));

  //calculate hourly sales
  let total = 0;
  for (let i = 0; i < this.hourlySales.length; i += 1) {
    const currentSales = this.hourlySales[i];
    total += currentSales;
  }
  this.total=total;
}

let seattle = new CookieProfile('Seattle', 20, 30, 6.3);
let tokyo = new CookieProfile('Tokyo', 3, 24, 1.2);
let dubai = new CookieProfile('Dubai', 11, 38, 3.7);
let paris = new CookieProfile('Paris', 20, 38, 2.3);
let lima = new CookieProfile('Lima', 2, 16, 4.6);



const profileContainer = document.getElementById('store-container');

const table = createChild('table', profileContainer);

const thead = createChild('thead', table);

const tr = createChild('tr', thead);

createChild('th', tr);
for (let i=0; i<timeSlots.length; i++){
  createChild('th', tr, timeSlots[i]);
}
createChild('th', tr, 'Daily Location Total');

CookieProfile.prototype.render = function () {
  const tr = createChild('tr', table);
  createChild('th', tr, this.name);

  for (let i=0; i<timeSlots.length; i++){
    createChild('td', tr, this.hourlySales[i]);
  }
  createChild('th', tr, this.total);
};

const tfoot = createChild('tfoot', table);

const tr1 = createChild('tr', tfoot);

createChild('th', tr1, 'Totals');
let cookiesTotal=0;
for (let i=0; i<timeSlots.length; i++){
  
  let hourlyTotal = seattle.hourlySales[i]+tokyo.hourlySales[i]+dubai.hourlySales[i]+paris.hourlySales[i]+lima.hourlySales[i];
  createChild('th', tr1, hourlyTotal);
  cookiesTotal = cookiesTotal+hourlyTotal;
  if (i===timeSlots.length-1){
    createChild('th', tr1, cookiesTotal);
  }
}





/* let seattle = new CookieProfile('Seattle', 20, 30, 6.3);
let tokyo = new CookieProfile('Tokyo', 3, 24, 1.2);
let dubai = new CookieProfile('Dubai', 11, 38, 3.7);
let paris = new CookieProfile('Paris', 20, 38, 2.3);
let lima = new CookieProfile('Lima', 2, 16, 4.6); */




seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// function Create Child
function createChild(tag, parent, text) {

  const child = document.createElement(tag);

  parent.appendChild(child);

  if (text !== undefined) {
    child.textContent = text;
  }

  return child;

}

//calculate total

