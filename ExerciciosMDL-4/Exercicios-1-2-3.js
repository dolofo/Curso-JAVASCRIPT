
/*1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
function checaIdade(idade) {
 // Retornar uma promise
}
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });
*/

/*Resposta exercício 1*/
function checarIdade(idade){
        return new Promise(function(resolve, reject){

            if(idade >= 18){
                resolve("Maior que 18")
            } else {
                reject("Menor que 18")
            }
        });
    }

checarIdade(25)
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})


/*2º exercício
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>*/

/*3º exercício
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:
<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.*/

/*Resposta exercício 2 e 3*/

var inputElement = document.querySelector('#app input'); //referenciar DOM INPUT
var buttonElement = document.querySelector('#app button')// REFERENCIAR DOM BUTTON

function buscarInformacao (){ //FUNÇÃO BUSCAR REPOSITORIO

    var ulElement = document.createElement('ul') //CRIAR UL
    var div = document.querySelector('#app')//REFERENCIAR DIV APP

    event.preventDefault()//EXERCÍCIO 3
    var ulCarregar = ulElement.innerHTML //CRIA VARIAVEL PARA ARMAZENAR STRING UL
    ulElement.innerHTML = 'Carregando...'// STRING UP

    var nome = inputElement.value

  axios.get('https://api.github.com/users/'+ nome + '/repos')
    .then(function(response){
        ulElement.innerHTML = ulCarregar//CHAMA VARIAVEL ULCARREGAR (CARREGANDO...)QUANDO TRUE
        for (item of response.data){//PERCORRE ARRAY E COLOCA O NOME DOS REPOSITORIOS DENTRO DE LI
        var itemElememt = document.createTextNode(item.name)
        var liElement = document.createElement('li')

        liElement.appendChild(itemElememt)
        ulElement.appendChild(liElement) //COLOCA LI EM UL
        }
    
    })
    .catch(function(error){
        console.log("Usuário "+ nome + " não existe", error) //ERROR
    });

    
    div.appendChild(ulElement) //ADD UL EM DIV APP
 
} 
