// const kittenName = "????";

// what must our app "listen" for in order to update & render the known kitten names"

// listen for form submit "event"

const locationForm = document.getElementById('location-form');

function addLocationHandler(event) {
  event.preventDefault();
  const locationName = event.target.locationName.value;

  const locationListElem = document.getElementById('location-list');
  const li = document.createElement('li');
  locationListElem.appendChild(li);

  li.textContent = locationName;
  event.target.reset();
}

locationForm.addEventListener('submit', addLocationHandler);
