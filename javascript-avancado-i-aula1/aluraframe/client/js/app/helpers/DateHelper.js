class DateHelper {

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }
    
    static dataParaTexto(data) {

        //return data.getDate()+ '/' + (data.getMonth()+1)+ '/' + data.getFullYear();
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; //template string usando interpolação
    }
    
    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        return new Date(...texto.split('-').map((item, indice) =>  item - indice % 2 ));/*return implicito em arrow function*/
    }

}