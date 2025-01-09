// src/services/api.ts

const api = {
    fetchCats: async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20');
        
        if (!response.ok) {
          throw new Error('Failed to fetch cats');
        }
        
        const data = await response.json();
        return data; // Retorna os dados para quem for chamar a função
      } catch (error) {
        console.error(error);
        throw error; // Repassa o erro
      }
    },
  };
  
  export default api;
  