interface livro {
    ano_Publicacao: number;
    autor: string;
    titulo: string;
  
}

let novo_livro : livro = {
    titulo: "O lado feio do amor",
    autor: "Colleen Hoover",
    ano_Publicacao: 2014
};

function exibirLivro(livro: livro): void {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Publicação: ${livro.ano_Publicacao}`);
}

exibirLivro(novo_livro)