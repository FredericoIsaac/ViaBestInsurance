# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Usefull Links
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
https://www.youtube.com/watch?v=wKBu_dEaF9E&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=6
https://www.w3schools.com/jsref/prop_node_nodetype.asp
https://developer.mozilla.org/en-US/docs/Web/API/Element
https://developer.mozilla.org/en-US/docs/Web/API/Node
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://stackoverflow.com/questions/15439853/get-local-href-value-from-anchor-a-tag
https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView
https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
https://gist.github.com/davidtheclark/5515733
https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
https://www.geeksforgeeks.org/how-to-set-smooth-scroll-after-clicking-the-link-using-javascript/
https://www.youtube.com/watch?v=8aGhZQkoFbQ


## Tasks

1º Part

    constuir nav
    criar um nav dentro do ul ja existente , vou criar um document fragment fazendo um loop para criar  "li" de acordo com o numero de secções que tem no momento
    para isso vou ter que fazer um for loop que vai ter como lcondição o numero de secções existentes, ou seja tirar uma classlist ou datalist (arrays), fazer lenght e por na condição para criar li
    adicionar o documento fragment ao ul 

    nota: ainda nao sei se vou ter que colocar propriedades CSS ao nav, porque pelo que estou a perceber nao existe css e se for para colocar tem que ser em js

2º Parte

    Agora tenho que colocar hiperligações no loop acima para saltarem (para ja) para o local da pagina indicada - ok
    TEnho que parar a ação da hiperligacao ir para a secção - ok
    tenho que usar uma acção para a hiperligacao ir para a seccao usando um evento scrolling - ok
    queres que ele va até a secção correspondente
    para isso vais ter que ir descobrir qual o nome em que ele clicou (event.target) ok
    para depois encontrares a secção correspondente (a href="seccao correspondente") -> tens que por numa const a secção para poderes ir par ela - ok
    para por fim disseres a cunção para ir para a seccao correta

 3º Parte

    agora tenho que dar realce a secção onde estou
    para isso tenho que pegar na class "your-active-class" que esta na 1º secçao (que ja tem o realce)
    tenho que mover essa classe para quando mudar de secção eliminar na que esta e passar para a outra.
    ao usar classList.toggle("your-active-clas") para caso tenha desliga e caso nao tenha liga

## Conclusions

In general I was able to complete the order, I feel that I could have done a better job in highlighting the section you are seeing.
Maybe add a setTime to take the featured view longer ...
In terms of style, it is not my strength and it does not help to have a lot of time to dwell on that at least for now.
