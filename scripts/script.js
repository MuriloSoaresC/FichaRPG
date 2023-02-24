function salvar() {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("pontos", document.getElementById("pontos").value);
    localStorage.setItem("forca", document.getElementById("forca").value);
    localStorage.setItem("habilidade", document.getElementById("habilidade").value);
    localStorage.setItem("resistencia", document.getElementById("resistencia").value);
    localStorage.setItem("armadura", document.getElementById("armadura").value);
    localStorage.setItem("poderdefogo", document.getElementById("poderdefogo").value);
    localStorage.setItem("pontosdevida", document.getElementById("pontosdevida").value);
    localStorage.setItem("pontosdevidamaximos", document.getElementById("pontosdevidamaximos").value);
    localStorage.setItem("pontosdemagia", document.getElementById("pontosdemagia").value);
    localStorage.setItem("pontosdemagiamaximos", document.getElementById("pontosdemagiamaximos").value);
    localStorage.setItem("pontosdeexperiecnia", document.getElementById("pontosdeexperiencia").value);
    localStorage.setItem("vantagens", document.getElementById("vantagens__campo").value);
    localStorage.setItem("desvantagens", document.getElementById("desvantagens__campo").value);
    localStorage.setItem("tiposdedano", document.getElementById("vantagens-desvantagens__dano").value);
    localStorage.setItem("magias", document.getElementById("poderes__magias").value);
    localStorage.setItem("itens", document.getElementById("poderes__itens").value);
    localStorage.setItem("historia", document.getElementById("poderes__historia").value);
}

function carregar() {
    const nome = localStorage.getItem("nome");
    document.getElementById("nome").value = nome;
    const pontos = localStorage.getItem("pontos");
    document.getElementById("pontos").value = pontos;
    const forca = localStorage.getItem("forca");
    document.getElementById("forca").value = forca;
    const habilidade = localStorage.getItem("habilidade");
    document.getElementById("habilidade").value = habilidade;
    const resistencia = localStorage.getItem("resistencia");
    document.getElementById("resistencia").value = resistencia;
    const armadura = localStorage.getItem("armadura");
    document.getElementById("armadura").value = armadura;
    const poderdefogo = localStorage.getItem("poderdefogo");
    document.getElementById("poderdefogo").value = poderdefogo;
    const pontosdevida = localStorage.getItem("pontosdevida");
    document.getElementById("pontosdevida").value = pontosdevida;
    const pontosdevidamaximos = localStorage.getItem("pontosdevidamaximos");
    document.getElementById("pontosdevidamaximos").value = pontosdevidamaximos;
    const pontosdemagia = localStorage.getItem("pontosdemagia");
    document.getElementById("pontosdemagia").value = pontosdemagia;
    const pontosdemagiamaximos = localStorage.getItem("pontosdemagiamaximos");
    document.getElementById("pontosdemagiamaximos").value = pontosdemagiamaximos;
    const pontosdeexperiencia = localStorage.getItem("pontosdeexperiecnia");
    document.getElementById("pontosdeexperiencia").value = pontosdeexperiencia;
    const vantagens = localStorage.getItem("vantagens");
    document.getElementById("vantagens__campo").value = vantagens;
    const desvantagens = localStorage.getItem("desvantagens");
    document.getElementById("desvantagens__campo").value = desvantagens;
    const tiposdedano = localStorage.getItem("tiposdedano");
    document.getElementById("vantagens-desvantagens__dano").value = tiposdedano;
    const magias = localStorage.getItem("magias");
    document.getElementById("poderes__magias").value = magias;
    const itens = localStorage.getItem("itens");
    document.getElementById("poderes__itens").value = itens;
    const historia = localStorage.getItem("historia");
    document.getElementById("poderes__historia").value = historia;
}

function apagar() {
localStorage.clear();
document.getElementById("nome").value = '';
document.getElementById("pontos").value = '';
document.getElementById("ficha").reset();
}