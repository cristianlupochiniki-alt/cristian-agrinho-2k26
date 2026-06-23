// Dados estatísticos e conceituais para preencher o Modal dinamicamente
const dadosCampo = {
    familiar: {
        titulo: "Estatísticas: Agricultura Familiar",
        texto: "Apesar de produzir cerca de 70% dos alimentos consumidos no dia a dia do brasileiro, o setor sofre com a impotência estrutural: detém menos de 25% das terras agrícolas do país e recebe uma fração muito menor de créditos bancários se comparado ao grande agronegócio. O desafio sustentável aqui é dar escala à agroecologia."
    },
    agro: {
        titulo: "Estatísticas: O Agronegócio",
        texto: "O Agronegócio representa mais de 20% do PIB nacional e bate recordes de exportação de grãos e carnes. No entanto, sua impotência surge quando ignora as leis da natureza: o desmatamento ilegal altera o regime de chuvas, gerando secas extremas que destroem as próprias lavouras. Sem o meio ambiente preservado, o ataque perde o fôlego."
    },
    sustentabilidade: {
        titulo: "Estatísticas: O Equilíbrio Prático",
        texto: "Integrar Lavoura-Pecuária-Floresta (ILPF) e adotar o plantio direto são estratégias de 'meio-campo'. Países compradores exigem cada vez mais selos verdes. Manter o equilíbrio não é apenas uma escolha ecológica, é a única tática econômica viável para o Brasil continuar sendo uma potência global."
    }
};

// Função para abrir o Modal com as informações corretas
function mostrarDetalhes(setor) {
    const modal = document.getElementById('modal');
    const titulo = document.getElementById('modal-titulo');
    const texto = document.getElementById('modal-texto');
    
    titulo.innerText = dadosCampo[setor].titulo;
    texto.innerText = dadosCampo[setor].texto;
    
    modal.style.display = "block";
}

// Função para fechar o Modal
function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

// Fechar o modal caso o usuário clique fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
