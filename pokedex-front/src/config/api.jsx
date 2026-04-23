// O Vite reconhece automaticamente se você está em 'development' ou 'production'
// Ele vai tentar pegar a variável VITE_API_URL do Azure. 
// Se não encontrar (como no seu PC local), ele usa o localhost.

const envUrl = import.meta.env.VITE_API_URL;
export const BASE_URL = envUrl ? `${envUrl}/api/` : "http://localhost:8000/api/";

export const api = {
  get: async (endpoint) => {
    const resposta = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.statusText}`);
    }

    const json = await resposta.json();
    return { data: json };
  }
};