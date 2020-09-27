const countries = [
  {name: 'USA'},
  {name: 'Covid'},
  {name: 'corona'},
  {name: 'Covid-19'},
    {name: 'Corona in india'},
  {name: 'corona details'},
  {name: 'Covid-19 rates'}
];

const searchInput = document.querySelector('.search-input');
const suggestionsPanel = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', function() {
  const input = searchInput.value;
  suggestionsPanel.innerHTML = '';
  const suggestions = countries.filter(function(country) {
    return country.name.toLowerCase().startsWith(input);
  });
  suggestions.forEach(function(suggested) {
    const div = document.createElement('div');
    div.innerHTML = suggested.name;
    suggestionsPanel.appendChild(div);
  });
  if (input === '') {
    suggestionsPanel.innerHTML = '';  
  }
})



