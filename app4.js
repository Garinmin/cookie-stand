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
  
  const allLocations = [];
  
  const table = document.getElementById('cookie-chart');
  
  function LocationStand(name, min, max, avgCookie) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.hourlySales = Array.from(hourlySalesIns(min, max, avgCookie));
    let total = 0;
    for (let i = 0; i < this.hourlySales.length; i += 1) {
      total += this.hourlySales[i];
    }
    this.total=total;
    allLocations.push(this);
  }

  LocationStand.prototype.render = function () {
    const row = createChild('tr', table);
    const name = this.name;
    createChild('td', row, name);
    // const propertyNames = ['name', 'min', 'max', 'avgCookie'];
    for (let i = 0; i < this.hourlySales.length; i++) {
      const currentHourlySales = this.hourlySales[i];
      createChild('td', row, currentHourlySales);
    }
    createChild('td', row, this.total);
  };
  
  function createChild(tag, parent, text) {
    const child = document.createElement(tag);
    parent.appendChild(child);
    if (text !== undefined) {
      child.textContent = text;
    }
    return child;
  }
  
    function calculateHourlyTotal(allLocations, index){

        let hourlyTotal = 0;

        for (let i = 0; i < allLocations.length; i++){

            const currentLocation = allLocations [i];

            const salesForHour = currentLocation.hourlySales[index];

            hourlyTotal += salesForHour;
        }

        return hourlyTotal;
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
  
  
  function renderLocations() {
    for (let i = 0; i < allLocations.length; i++) {
      allLocations[i].render();
    }
  }
  
  function createFooterRow() {
    const row = createChild('tr', table);
    let total = 0;
    createChild('th', row, 'total');
    for (let i = 0; i < timeSlots.length; i++){
        let totalPerHour = calculateHourlyTotal(allLocations, i);
        createChild('th', row, totalPerHour);
        total += totalPerHour;
    }
    
    createChild('th', row, total);
  
  }
  
  // listen for submits
  
  function addCookieLocation(event) {
    event.preventDefault();
  
    const name = event.target.name.value;
    const min = event.target.min.value;
    const max = event.target.max.value;
    let avgCookie = event.target.avgCookie.value;
  
    new LocationStand(name, min, max, avgCookie);
  
    table.innerHTML = '';
  
    renderTable();
  
    event.target.reset();
  
  }
  
  function renderTable() {
  
    createHeaderRow();
  
    renderLocations();
  
    createFooterRow();
  }
  
  // wire up event listener
  const addCookieForm = document.getElementById('add-location-form');
  addCookieForm.addEventListener('submit', addCookieLocation);
  
  new LocationStand('Seattle', 23, 65, 6.3);
  new LocationStand('Tokyo', 3, 24, 1.2);
  new LocationStand('Dubai', 11, 38, 3.7);
  new LocationStand('Paris', 20, 38, 2.3);
  new LocationStand('Lima', 2, 16, 4.6);
  
  
  renderTable();
  