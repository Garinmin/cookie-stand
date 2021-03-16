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
}

const seattle = {
  location: 'Seattle',
  salesIns: hourlySalesIns(23, 65, 6.3),
  hourlySales: hourlySales,
};

/* const seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookie: 6.3,
  salesIns: hourlySalesIns(min, max, avgCookie),
  hourlySales: hourlySales,
}; */

/* const tokyo = {
  location: 'Tokyo',
  Sales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
  hourlySales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
};
console.log(tokyo);

const amman = {
  location: 'Amman',
  Sales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
  hourlySales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
}; */

const storeContainerElem = document.getElementById('store-container');

renderCookieStand(seattle);
/* renderCookieStand(tokyo);
renderCookieStand(amman); */

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
