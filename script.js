
async function fetchCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      displayCharacters(data.results);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  
  function displayCharacters(characters) {
    const container = document.getElementById('character-container');
    container.innerHTML = ''; 
  
    characters.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('character-card');
  
      characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>Estado: ${character.status}</p>
        <p>Especie: ${character.species}</p>
      `;
  
      container.appendChild(characterCard);
    });
  }
  
 
  fetchCharacters();
  