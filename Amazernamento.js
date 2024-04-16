const fs = require('fs');

class Funcionario {
    constructor(nome, salarioBase, produtividade) {
        this.nome = nome;
        this.salarioBase = salarioBase;
        this.produtividade = produtividade;
    }

    calcularSalario() {
        throw new Error('Método abstrato deve ser implementado nas classes filhas');
    }

    salvarDados() {
        const dados = `Nome: ${this.nome}, Salário Base: ${this.salarioBase}, Produtividade (%): ${this.produtividade}`;
        fs.writeFileSync(`${this.nome}.txt`, dados);
        console.log(`Dados de ${this.nome} salvos com sucesso.`);
    }
}
class Gerente extends Funcionario {
    constructor(nome, salarioBase, produtividade, bonus) {
        super(nome, salarioBase, produtividade);
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salarioBase + (this.salarioBase * (this.produtividade / 100)) + this.bonus;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salarioBase, produtividade) {
        super(nome, salarioBase, produtividade);
    }

    calcularSalario() {
        return this.salarioBase + (this.salarioBase * (this.produtividade / 100));
    }
}

// Criando instâncias de objetos
const santana = new Gerente('Santana', 5000, 20, 1000);
const joao = new Desenvolvedor('João', 3000, 15);
const glauco = new Desenvolvedor('Glauco', 3500, 18);

// Testando as instâncias e salvando os dados em arquivos
santana.salvarDados();
joao.salvarDados();
glauco.salvarDados();
