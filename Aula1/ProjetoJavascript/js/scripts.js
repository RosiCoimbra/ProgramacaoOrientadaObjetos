class Produto {
    constructor() {
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0;
    }

    adicionar() {
        alert('Adicionando produto')
    }

   excluir() {
        alert('Excluindo produto')
    }
}

let produto = new Produto();