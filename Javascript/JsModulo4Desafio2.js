/*
Crie uma tela com um < input > que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github(conforme
URL abaixo) os dados de repositórios do usuário e mostrá - los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
< input type = "text" name = "user" >
    <button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
    <li>repo1</li>
    <li>repo2</li>
    <li>repo3</li>
    <li>repo4</li>
    <li>repo5</li>
</ul>
*/
   
// Vetor de users e adicionar a lista dinamicamente    
var nomes = [];
var divElement = document.querySelector('div#app');
var listElement = document.createElement('ul');
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
    nomes.push(pessoa);
    var textElement = document.createTextNode("repo" + (nomes.indexOf(pessoa)+1));
    console.log(nomes);
    singleElement.appendChild(textElement);
    listElement.appendChild(singleElement);
    inputElement.value = null;

    // AXIOS
    axios.get('https://api.github.com/users/' + pessoa + '/repos')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.warn("Usuário não encontrado");
        })
}

