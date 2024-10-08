let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal"
    },
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos de Paris 2024, conquistando a medalha de ouro e inspirando novas gerações de atletas.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou o mundo com suas acrobacias e força. Aos poucos anos, ela já coleciona títulos e é considerada uma das maiores ginastas da história do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
    }
];


const tabela_medalhas = [
    {
        "gênero": "Feminino",
        "ouro": 3,
        "prata": 4,
        "bronze": 5,
        "total": 12
    },
    {
        "gênero": "Masculino",
        "ouro": 0,
        "prata": 3,
        "bronze": 4,
        "total": 7
    },
    {
        "gênero": "Misto",
        "ouro": 0,
        "prata": 1,
        "bronze": 1,
        "total": 2
    },
    {
        "gênero": "Total",
        "ouro": 3,
        "prata": 7,
        "bronze": 10,
        "total": 20
    }
]


const dadosMedalhass = [
    {
        "Atleta": "Beatriz Souza",
        "Dia": "2 de agosto",
        "Esporte": "Judô",
        "Medalha": "Ouro",
        "Prova": "Mais de 78 kg feminino"
    },
    {
        "Atleta": "Rebeca Andrade",
        "Dia": "5 de agosto",
        "Esporte": "Ginástica",
        "Medalha": "Ouro",
        "Prova": "Solo feminino"
    },
    {
        "Atleta": "Ana Patrícia Ramos",
        "Dia": "9 de agosto",
        "Esporte": "Voleibol de praia",
        "Medalha": "Ouro",
        "Prova": "Feminino"
    },
    {
        "Atleta": "\nEduarda Santos Lisboa",
        "Dia": "9 de agosto",
        "Esporte": "Voleibol de praia",
        "Medalha": "Ouro",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Willian Lima",
        "Dia": "28 de julho",
        "Esporte": "Judô",
        "Medalha": "Prata",
        "Prova": "Até 66 kg masculino"
    },
    {
        "Atleta": "Caio Bonfim",
        "Dia": "1 de agosto",
        "Esporte": "Atletismo",
        "Medalha": "Prata",
        "Prova": "20 km marcha atlética masculina"
    },
    {
        "Atleta": "Rebeca Andrade",
        "Dia": "1 de agosto",
        "Esporte": "Ginástica",
        "Medalha": "Prata",
        "Prova": "Individual geral feminino"
    },
    {
        "Atleta": "Rebeca Andrade",
        "Dia": "3 de agosto",
        "Esporte": "Ginástica",
        "Medalha": "Prata",
        "Prova": "Salto feminino"
    },
    {
        "Atleta": "Tatiana Weston-Webb",
        "Dia": "5 de agosto",
        "Esporte": "Surfe",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Isaquias Queiroz",
        "Dia": "9 de agosto",
        "Esporte": "Canoagem",
        "Medalha": "Prata",
        "Prova": "C-1 1000 metros masculino"
    },
    {
        "Atleta": "Adriana",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Angelina",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Ana Vitória",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Antônia",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Duda Sampaio",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Gabi Nunes",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Gabi Portilho",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Jheniffer",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Kerolin",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Lauren",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Lorena",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Luciana",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Ludmila",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Marta",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Priscila",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Rafaelle Souza",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Tainá",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Tamires",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Tarciane",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Thaís",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Yasmim",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Vitória Yaya",
        "Dia": "10 de agosto",
        "Esporte": "Futebol",
        "Medalha": "Prata",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Larissa Pimenta",
        "Dia": "28 de julho",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Até 52 kg feminino"
    },
    {
        "Atleta": "Rayssa Leal",
        "Dia": "28 de julho",
        "Esporte": "Skate",
        "Medalha": "Bronze",
        "Prova": "Street feminino"
    },
    {
        "Atleta": "Rebeca Andrade",
        "Dia": null,
        "Esporte": "Ginástica",
        "Medalha": "Bronze",
        "Prova": "Equipes femininas"
    },
    {
        "Atleta": "Jade Barbosa",
        "Dia": null,
        "Esporte": "Ginástica",
        "Medalha": "Bronze",
        "Prova": "Equipes femininas"
    },
    {
        "Atleta": "Lorrane Oliveira",
        "Dia": null,
        "Esporte": "Ginástica",
        "Medalha": "Bronze",
        "Prova": "Equipes femininas"
    },
    {
        "Atleta": "Flávia Saraiva",
        "Dia": null,
        "Esporte": "Ginástica",
        "Medalha": "Bronze",
        "Prova": "Equipes femininas"
    },
    {
        "Atleta": "Júlia Soares",
        "Dia": null,
        "Esporte": "Ginástica",
        "Medalha": "Bronze",
        "Prova": "Equipes femininas"
    },
    {
        "Atleta": "Daniel Cargnin",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Leonardo Gonçalves",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Willian Lima",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Rafael Macedo",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Guilherme Schimidt",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Rafael Silva",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Larissa Pimenta",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Ketleyn Quadros",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Rafaela Silva",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Beatriz Souza",
        "Dia": "3 de agosto",
        "Esporte": "Judô",
        "Medalha": "Bronze",
        "Prova": "Equipes mistas"
    },
    {
        "Atleta": "Beatriz Ferreira",
        "Dia": "3 de agosto",
        "Esporte": "Boxe",
        "Medalha": "Bronze",
        "Prova": "Peso leve feminino"
    },
    {
        "Atleta": "Gabriel Medina",
        "Dia": "5 de agosto",
        "Esporte": "Surfe",
        "Medalha": "Bronze",
        "Prova": "Masculino"
    },
    {
        "Atleta": "Augusto Akio",
        "Dia": "7 de agosto",
        "Esporte": "Skate",
        "Medalha": "Bronze",
        "Prova": "Park masculino"
    },
    {
        "Atleta": "Edival Pontes",
        "Dia": "8 de agosto",
        "Esporte": "Taekwondo",
        "Medalha": "Bronze",
        "Prova": "−68 kg masculino"
    },
    {
        "Atleta": "Alison dos Santos",
        "Dia": "9 de agosto",
        "Esporte": "Atletismo",
        "Medalha": "Bronze",
        "Prova": "400m com barreiras"
    },
    {
        "Atleta": "Ana Carolina",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Ana Cristina",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Diana",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Gabi",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Júlia",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Lorenne",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Natália",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Nyeme",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Macris",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Tainara",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Thaísa",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Roberta",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    },
    {
        "Atleta": "Rosamaria",
        "Dia": "10 de agos",
        "Esporte": "Voleibol",
        "Medalha": "Bronze",
        "Prova": "Feminino"
    }
];
