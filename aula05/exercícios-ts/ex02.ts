let cidades : string[] = ["Acre", "Bahia", "Rio de Janeiro", "Londres", "Tocantins", "San Diego"];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => { console.log(cidade); });
}

listarCidades(cidades); 