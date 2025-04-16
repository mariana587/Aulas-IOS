let saborEscolhido

switch (saborEscolhido = 'morango') {
    case 'flocos':
        console.log('Seu sorvete de', saborEscolhido, 'está pronto!');
        break;

    case 'morango':
        console.log('Seu sorvete de', saborEscolhido, 'está pronto!');
        break;

    case 'baunilha':
        console.log('Seu sorvete de', saborEscolhido, 'está pronto!');
        break;

    default:
        console.log('Desculpe! Não temos esse sabor disponível na loja.');
        break;
}