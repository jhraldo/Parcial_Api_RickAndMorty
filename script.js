// Función para obtener los personajes de la API
async function fetchCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      displayCharacters(data.results);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  