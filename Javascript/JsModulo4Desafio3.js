/* 
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:
<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.
*/

// Vetor de users e adicionar a lista dinamicamente    
var nomes = [];
var divElement = document.querySelector('div#app');
var listElement = document.createElement('ul');
listElement.id = "lista";
divElement.appendChild(listElement);

// Adicionar input
var inputElement = document.createElement('input');
inputElement.type = "text";
inputElement.name = "user";
inputElement.placeholder = "github username"
divElement.appendChild(inputElement);
// Adicionar botao
var btnElement = document.createElement('button');
botaoElement = document.createTextNode('Adicionar');
btnElement.appendChild(botaoElement);
divElement.appendChild(btnElement);

var pessoa = document.querySelector('input[type=text]').value;

// Funcao de adicionar username
btnElement.onclick = function adicionar() {
    var pessoa = document.querySelector('input[type=text]').value;
    var singleElement = document.createElement('li');
    //nomes.push("Carregando...");
    var loadingMessage = document.createTextNode("Carregando...");
    //loadingMessage.id = 'loading';
    singleElement.appendChild(loadingMessage);
    listElement.appendChild(singleElement);
    console.log(nomes);
    
    // AXIOS
    axios.get('https://api.github.com/users/' + pessoa + '/repos')
        .then(function (response) {
            console.log(response);
            var list = document.getElementById("lista");   // Get the <ul> element with id="myList"
            list.removeChild(list.childNodes[nomes.length]);           // Remove <ul>'s first child node (index 0)            
            var singleElement = document.createElement('li');
            nomes.push(pessoa);
            var textElement = document.createTextNode("repo" + (nomes.indexOf(pessoa) + 1));
            console.log(nomes);
            singleElement.appendChild(textElement);
            listElement.appendChild(singleElement);
            inputElement.value = null;
        })
        .catch(function (error) {
            console.warn("Usuário não encontrado");
            var list = document.getElementById("lista");   // Get the <ul> element with id="myList"
            list.removeChild(list.childNodes[nomes.length]);           // Remove <ul>'s first child node (index 0)      
        })


    /*var singleElement = document.createElement('li');
    //nomes.push("Carregando...");
    //var loadingMessage = document.createTextNode("Carregando...");
    nomes.push(pessoa);
    var textElement = document.createTextNode("repo" + (nomes.indexOf(pessoa) + 1));
    console.log(nomes);
    singleElement.appendChild(textElement);
    listElement.appendChild(singleElement);
    inputElement.value = null;
    */
}

