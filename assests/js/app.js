function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    if (campoPesquisa == "") {
        const section = document.querySelector('section');
        const h4 = document.createElement('h4');
        h4.textContent = "Nenhum atleta foi encontrado";
        section.appendChild(h4);
        //section.innerHTML = "Nenhum atleta foi encontrado"
        return
    }
    // Itera sobre cada dado da lista de dados
    let titulo = ""
    let descricao = ""

    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (titulo.includes(campoPesquisa) | descricao.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
      
    };
    if (!resultados){

        resultados = "<h4> Nada foi encontrado</h4>"
        
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}