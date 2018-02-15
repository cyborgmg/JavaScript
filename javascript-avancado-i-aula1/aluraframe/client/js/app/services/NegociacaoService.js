class NegociacaoService {

    constructor() {
        this.http = new HttpService();      
    }

    obterNegociacoes(path) {

        return new Promise((resolve, reject) => {

            this.http
                .get(path)
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                })
        });

    }
}