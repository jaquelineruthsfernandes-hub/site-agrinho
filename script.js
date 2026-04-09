// Base de dados local para simulação informativa
const dbAgro = [
    {
        titulo: "Pronaf (Crédito Agrícola)",
        categoria: "economia",
        descricao: "O Programa Nacional de Fortalecimento da Agricultura Familiar oferece juros baixos para custeio e investimento.",
        link: "https://www.gov.br/agricultura/pt-br/assuntos/mda"
    },
    {
        titulo: "Sistemas Agroflorestais (SAF)",
        categoria: "producao",
        descricao: "Combina árvores com cultivos agrícolas ou criação de animais, recuperando o solo e gerando renda.",
        link: "https://www.embrapa.br/tema-sistemas-agroflorestais"
    },
    {
        titulo: "Certificação Orgânica",
        categoria: "sustentabilidade",
        descricao: "Agregação de valor aos produtos da agricultura familiar através de selos que garantem a ausência de agrotóxicos.",
        link: "https://www.gov.br/agricultura"
    },
    {
        titulo: "Cooperativismo",
        categoria: "social",
        descricao: "A união de pequenos produtores permite acesso a mercados maiores e redução de custos logísticos.",
        link: "https://www.somoscooperativismo.coop.br/"
    }
];

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');

function buscarInformacao() {
    const termo = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ''; // Limpa resultados anteriores

    const resultados = dbAgro.filter(item => 
        item.titulo.toLowerCase().includes(termo) || 
        item.descricao.toLowerCase().includes(termo)
    );

    if (resultados.length > 0) {
        resultados.forEach(item => {
            const card = `
                <div class="result-card">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <a href="${item.link}" target="_blank" style="color: #2d6a4f; font-weight: bold; font-size: 0.9rem;">Saber mais na fonte oficial →</a>
                </div>
            `;
            resultsContainer.innerHTML += card;
        });
    } else {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado. Tente termos como "Crédito", "Solo" ou "Orgânico".</p>';
    }
}

searchBtn.addEventListener('click', buscarInformacao);

// Busca ao pressionar "Enter"
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') buscarInformacao();
});
