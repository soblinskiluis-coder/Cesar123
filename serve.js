const express = require('express');
const app = express();

// Configuração do motor de templates
app.set('view engine', 'ejs');

// Objeto de Dados (db)
const db = {
    dadosPessoais: {
        nome: "Luis Felipe Fernandes Soblinski",
        titulo: "Desenvolvedor de Sistemas",
        sobre: "Olá! Meu nome é Luis Felipe Fernandes Soblinski, estudante do curso de Desenvolvimento de Sistemas.",
        foto: "https://via.placeholder.com/500x500/1a1a1a/ffffff?text=Foto+Perfil"
    },
    habilidades: [
        { nome: "HTML5", icone: "fa-html5" },
        { nome: "CSS3", icone: "fa-css3-alt" },
        { nome: "JavaScript", icone: "fa-js" },
        { nome: "Responsivo", icone: "fa-mobile-alt" }
    ],
    certificados: [
        {
            titulo: "Linguagem C",
            descricao: "Curso completo de Linguagem C pela Alura",
            link: "https://cursos.alura.com.br/user/soblinski-luis/degree-linguagem-c-459231/certificate",
            icon: "fa-certificate"
        },
        {
            titulo: "Programação Iniciante",
            descricao: "Formação de Programação Iniciante pela Alura",
            link: "https://cursos.alura.com.br/user/soblinski-luis/degree-programacao-662273/certificate",
            icon: "fa-certificate"
        }
    ],
    redesSociais: [
        { nome: "GitHub", link: "https://github.com/soblinskiluis-coder", icone: "fa-github" },
        { nome: "Alura", link: "https://cursos.alura.com.br/user/soblinski-luis", icone: "fa-graduation-cap" }
    ]
};

// Rota principal
app.get('/', (req, res) => {
    res.render('portfolio', { 
        dados: db,
        ano: new Date().getFullYear()
    });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
    console.log(`📁 Pasta views: ${__dirname}/views`);
});