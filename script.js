function exibir() {
    var nome = document.getElementById('nome').value   
    var selecionar = document.getElementById('caixa').value 
    var p1= 50.00
    var p2= 65.00
    var p3= 90.00
    var p15= 60.00
    var p21= 85.00
    var p115= 120.00

    switch (selecionar) {
        case "p1":
            document.getElementById('resultados1').innerHTML = 'O preço do pacote selecionado é: ' + p1.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})
            break;
    
        case "p2":
            document.getElementById('resultados1').innerHTML = 'O preço do pacote selecionado é: ' + p2.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})
            break;
        
        case "p3":
            document.getElementById('resultados1').innerHTML = 'O preço do pacote selecionado é: ' + p3.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})
            break;
        
        case "p15":
            document.getElementById('resultados1').innerHTML = 'O preço do pacote selecionado + 5 fotos é: ' + p15.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})
            break;
        
        case "p21":
            document.getElementById('resultados1').innerHTML = 'O preço do pacote selecionado + 10 fotos é: ' + p21.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})
            break;
        
        case "p115":
            document.getElementById('resultados1').innerHTML = 'O preço do pacote selecionado + 15 fotos é: ' + p115.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})            
            break;
    }

    document.getElementById('resultados').innerHTML =  'Olá!! Venha logo agendar o seu ensaio ' + nome
    
}

function novoValor() {
    var op = document.getElementById('valorNovo').value
    var v1= 10.00
    var v2= 20.00
    var v3= 30.00

    switch (op) {
        case "v1":
            document.getElementById('resultados2').innerHTML = 'O valor de 5 fotos: ' + v1.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})   
            break;
           
        case "v2":
            document.getElementById('resultados2').innerHTML = 'O valor de 10 fotos: ' + v2.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})                   
            break;
             
        case "v3":
            document.getElementById('resultados2').innerHTML = 'O valor de 15 fotos: ' + v3.toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'})   
            break;        
    }
    
}

