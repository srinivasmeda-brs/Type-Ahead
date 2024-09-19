// Sample data: Array of objects with city, state, and population
const cities = [
  { city: "New York", state: "New York", population: 8419600 },
  { city: "Los Angeles", state: "California", population: 3980400 },
  { city: "Chicago", state: "Illinois", population: 2716000 },
  { city: "Houston", state: "Texas", population: 2328000 },
  { city: "Phoenix", state: "Arizona", population: 1690000 },
  { city: "Springfield", state: "Missouri", population: 1690000 },
  { city: "Madison", state: "Wisconsin", population: 320000 },
  { city: "Aurora", state: "Colorado", population: 360000 },
  { city: "Raleigh", state: "North Carolina", population: 470000 },
  { city: "Boise", state: "Idaho", population: 240000 },
  { city: "Albany", state: "New York", population: 98000 },
  { city: "Fargo", state: "North Dakota", population: 120000 },
  { city: "Savannah", state: "Georgia", population: 145000 },
  { city: "Orlando", state: "Florida", population: 287000 },
  { city: "Anchorage", state: "Alaska", population: 290000 }
  // Add more city objects as needed
];

let inptEl = document.getElementById("inpt");
let ulEl = document.getElementById("suggestions");


function displayValues(e) { 
  let lower = e.target.value.toLowerCase();

  const res = cities.filter((c) => 
    c.city.toLowerCase().includes(lower) || 
    c.state.toLowerCase().includes(lower)
  );

  // Clear the previous suggestions
   ulEl.innerHTML = '';
   
    // Display "Not found" if no results match
    if (res.length === 0) {
      ulEl.innerHTML = '<li class="not-found">Not found</li>';
      return;
    }

  // Append filtered results to the <ul>
  
    res.forEach((item) => {
      let out = `<li>
        <span>${item.city}</span>
        <span>${item.state}</span>
      </li>`;
      ulEl.innerHTML += out; // Append new results
    });
        
    if (lower === ''){
      ulEl.innerHTML  = ''
    }
  }
  


inptEl.addEventListener('input', displayValues);