const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_texto');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha - 1;
    }

    numeroSenha.textContent = tamanhoSenha
}