let contador = 0;
let input = window.document.getElementById("inputTarefa");
let btnAdd = window.document.getElementById("btn_add");
let main = window.document.getElementById("area_lista");

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;
    
    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = 
        `
        <div id=${contador} class="item">
            <div onclick="marcarTarefa(${contador})" class="item_icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item_nome">
                ${valorInput}
            </div>
            <div class="item_botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>

        `;

    //ADICIONAR ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR ITEM NO MAIN
    input.value = "";
    input.focus();
    }
}


function deletar(id) {
    var tarefa = window.document.getElementById(id);
    tarefa.remove();
}


function marcarTarefa(id) {
    var item = window.document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "item") {
        item.classList.add("clicado");

        var icone = window.document.getElementById("icone_" + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicado");

        var icone = window.document.getElementById("icone_" + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}


input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});