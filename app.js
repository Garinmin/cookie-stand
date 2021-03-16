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

const seattle = {
  location: 'Seattle',
  min: 20,
  max: 30,
  avgCookie: 5,
  salesIns: function(){
    return hourlySalesIns(this.max, this.min, this.avgCookie);
  },
};
seattle.hourlySales = Array.from(seattle.salesIns());
const tokyo = {
  location: 'Tokyo',
  min: 20,
  max: 40,
  avgCookie: 5,
  salesIns: function(){
    return hourlySalesIns(this.max, this.min, this.avgCookie);
  },
};
tokyo.hourlySales = Array.from(tokyo.salesIns());

const amman = {
  location: 'Amman',
  min: 10,
  max: 30,
  avgCookie: 5,
  salesIns: function(){
    return hourlySalesIns(this.max, this.min, this.avgCookie);
  },
};
amman.hourlySales = Array.from(amman.salesIns());
const storeContainerElem = document.getElementById('store-container');

renderCookieStand(seattle);
renderCookieStand(tokyo);
renderCookieStand(amman);

function renderCookieStand(cookieStand) {

  const sectionElem = document.createElement('section');
  storeContainerElem.appendChild(sectionElem);

  const locationElem = document.createElement('h2');
  sectionElem.appendChild(locationElem);
  locationElem.textContent = cookieStand.location;

  const hourListElem = document.createElement('ul');
  sectionElem.appendChild(hourListElem);

  for (let i = 0; i < timeSlots.length; i += 1) {

    const hourItemElem = document.createElement('li');

    hourListElem.appendChild(hourItemElem);

    const currentTimeSlot = timeSlots[i];

    const currentSales = cookieStand.hourlySales[i];

    hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';
  }


  let total = 0;
  // the sum of all the sales for the current cookieStand

  for (let i = 0; i < cookieStand.hourlySales.length; i += 1) {
    const currentSales = cookieStand.hourlySales[i];
    total += currentSales;
  }
  /*   total = total.toFixed(); */
  // need last total item
  const totalItemElem = document.createElement('li');
  hourListElem.appendChild(totalItemElem);
  totalItemElem.textContent = 'Total: ' + total + ' cookies';

}
