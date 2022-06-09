let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', buscarItems);

//adicionar item
function addItem(e) {
    e.preventDefault();

    //pega o valor do <input>
    let newItem = document.getElementById('item').value;
    //cria um novo elemento li
    let li = document.createElement('li');
    //Adicionar classe
    li.className = 'list-group-item';
    //adiciona o texto no novo elemento com o valor armazenado no newItem
    li.appendChild(document.createTextNode(newItem));
    //criar o elemento botão para deletar item
    let deleteBtn = document.createElement('button');
    //Adiciona classes para o botão de deletar
    deleteBtn.className = 'btn btn-danger btn- float-end delete';
    //acrescenta o texto no novo elemento
    deleteBtn.appendChild(document.createTextNode('X'));
    //acrescenta o botão no elemento li
    li.appendChild(deleteBtn);
    //adiciona item novo
    itemList.appendChild(li);
    //limpa o formulário
    form.reset();
}

//Função remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

//Função buscarItems
function buscarItems(e) {
    //Converte o texto digitando para minúsculo
    let text = e.target.value.toLowerCase();
    //busca todos os items
    let items = itemList.getElementsByTagName('li');
    //Converte os itens para array
    Array.from(items).forEach(function (item) {
        //busca o primeiro item da lista
        let itemName = item.firstChild.textContent;
        //busca o item na lista que começa com o mesmo texto digitando
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; //exibe o item
        } else {
            item.style.display = 'none'; //oculta o item
        }
    });
}