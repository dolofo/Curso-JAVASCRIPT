
/*1º exercício
Crie uma função que dado o objeto a seguir:
    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
};

Retorne o seguinte conteúdo:
    O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
    nº 1293.
*/

/*Resposta exercício 1*/
function enderecoF(){
    var endereco = {
        rua: 'Rua dos pinheiros',
        numero: 1293,
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP'
    }

    var resultado = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com n° ${endereco.numero}`
    return resultado
}

console.log(enderecoF())
/*2º exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
    function pares(x, y) {
    // código aqui
    }
pares(32, 321);
*/

/*Resposta exercício 2*/
function pares (x, y){
    while(x <= y){
        if (x % 2 == 0){
        console.log(x)
        }
    x++
    }
}
pares(32, 321)  



/*3º exercício
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf*/

/*Resposta exercício 3 com FOR*/
var skills = ["Javascript", "ReactJS", "React Native"];
function temHabilidade (skills){

    for (contador = 0; contador < skills.length; contador++){
            if(skills[contador] === "Javascript"){
                return true
            } else {
                return false

            }
    }
}

var resultadoSkills = temHabilidade(skills)
console.log(resultadoSkills)

/*Resposta exercício 3 com indexOf*/
var skills = ["Javascript", "ReactJS", "React Native"];
function temHabilidadeJs(skills){
    if (skills.indexOf("Javascript") === -1){
        return false
    } else {
        return true
    }
    
}

var resultadoJSIndexOf = temHabilidadeJs(skills)
console.log(resultadoJSIndexOf, 'ResultadoComIndexOf')

/*4º exercício
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master*/

/*Resposta exercício 4*/
function experiencia(anos){
    switch(anos){
        case (0,1):
            return 'Iniciante';
        case (1,3):
            return 'Intermediate';
        case (3,6):
            return 'Advanced';
        case 7:
            return 'Jedi Master';
        default: 
            return 'Outros'
    }

}
var anos = 7;
var resultadoExperiente = experiencia(anos)
console.log(resultadoExperiente)


/* 5º exercício
Dado o seguinte vetor de objetos:
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join*/

/*Resultado exercício 5*/

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

for (let usuario of usuarios){
    var stringUsuarios = `O ${usuario.nome}, possui habilidades em: ${usuario.habilidades.join(", ")}`
    console.log(stringUsuarios)
}
