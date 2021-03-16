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
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
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
}



CookieProfile.prototype.render = function () {

const profileContainer = document.getElementById('store-container');

const table = createChild('table', profileContainer);

const thead = createChild('thead', table);

const tr = createChild('tr', thead);

createChild('th', tr);
for (let i=0; i<timeSlots.length; i++){
  createChild('th', tr, timeSlots[i]);
}
CookieProfile.prototype.render = function () {

  const profileContainer = document.getElementById('store-container');

  const table = createChild('table', profileContainer);

  const tr = createChild('tr', table);

  createChild('th', tr, this.name);

  for (let i=0; i<timeSlots.length; i++){
    createChild('td', tr, this.hourlySales[i]);
  }
  createChild('th', tr, 'Daily Location Total');
};
createChild('th', tr, 'Daily Location Total');

};





let seattle = new CookieProfile('Seattle', 20, 30, 6.3);
let tokio = new CookieProfile('Tokio', 3, 24, 1.2);
let dubai = new CookieProfile('Dubai', 11, 38, 3.7);
let paris = new CookieProfile('Paris', 20, 38, 2.3);
let lima = new CookieProfile('Lima', 2, 16, 4.6);

seattle.render();
tokio.render();
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

