class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem('id')

        if (id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximo_id = localStorage.getItem('id')
        return parseInt(proximo_id)+1
    }

    gravar(d){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){
        let listaDespesas = []
        let id = localStorage.getItem('id')

        for(let i=1; i<=id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))
            if (despesa == null){
                continue
            }
            despesa.id = i
            listaDespesas.push(despesa)
        }
        return listaDespesas
    }

    pesquisar(despesa){
        let despesasFiltradas = this.recuperarTodosRegistros()

        if (despesa["ano"] != ""){
            despesasFiltradas = despesasFiltradas.filter(d => d["ano"] == despesa["ano"])
        }
        if (despesa["mes"] != ""){
            despesasFiltradas = despesasFiltradas.filter(d => d["mes"] == despesa["mes"])
        }
        if (despesa["dia"] != ""){
            despesasFiltradas = despesasFiltradas.filter(d => d["dia"] == despesa["dia"])
        }
        if (despesa["tipo"] != ""){
            despesasFiltradas = despesasFiltradas.filter(d => d["tipo"] == despesa["tipo"])
        }
        if (despesa["descricao"] != ""){
            despesasFiltradas = despesasFiltradas.filter(d => d["descricao"] == despesa["descricao"])
        }
        if (despesa["valor"] != ""){
            despesasFiltradas = despesasFiltradas.filter(d => d["valor"] == despesa["valor"])
        }
        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
    }
}

let bd = new Bd()

function mudaModal(cor, titulo, mensagem_cx, texto_botão){
    if (cor == 'verde'){
        document.getElementById('tituloModal').innerHTML = titulo
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('resultado').innerHTML = mensagem_cx
        document.getElementById('btn-modal').innerHTML = texto_botão
        document.getElementById('btn-modal').className = "btn btn-success"    
    }else{
        document.getElementById('tituloModal').innerHTML = titulo
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('resultado').innerHTML = mensagem_cx
        document.getElementById('btn-modal').innerHTML = texto_botão
        document.getElementById('btn-modal').className = "btn btn-danger"
    }
}

function cadastrarDespesa(){
    ano = document.getElementById('ano')
    mes = document.getElementById('mes')
    dia = document.getElementById('dia')
    tipo = document.getElementById('tipo')
    descricao = document.getElementById('descricao')
    valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value,
    )

    function verificaDados(){
        let camposVazios = []
        for(let i in despesa){
            if (despesa[i] == undefined || despesa[i] == '' || despesa[i] == null){
                camposVazios.push(i)
            }
        }
        return camposVazios
    }


    function limpaCampos(){
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''
    }

    if (verificaDados().length == 0){
        mudaModal('verde', 'Registro inserido com sucesso', 'Dados Cadastrados com sucesso', 'OK')
        $('#modalRegistroDespesa').modal('show')
        bd.gravar(despesa)
        limpaCampos()
    }else if(verificaDados().length == 1){
        mudaModal('vermelho', 'Erro na inserção de registros', `O campo ${verificaDados()} não foi preenchido`, 'Voltar')
        $('#modalRegistroDespesa').modal('show')
    }else{
        mudaModal('vermelho', 'Erro na inserção de registros', `Os campos ${verificaDados()} não foram preenchido`, 'Voltar')
        $('#modalRegistroDespesa').modal('show')
    }
}

function carregarListaDespesas(despesas = [], filtro = false){
    let tabela = document.getElementById('tabela')
    if (despesas.length ==0 && filtro == false){
        despesas = bd.recuperarTodosRegistros()
    }
    tabela.innerHTML = ''

    despesas.forEach(function(d){
        let linha = tabela.insertRow()
        linha.insertCell(0).innerHTML = `${d["dia"]}/${d["mes"]}/${d["ano"]}`
        linha.insertCell(1).innerHTML = `${d["tipo"]}`
        linha.insertCell(2).innerHTML = `${d["descricao"]}`
        linha.insertCell(3).innerHTML = `R$ ${d["valor"]}`
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = d["id"]
        btn.onclick = () =>{
            console.log(btn.id)
            bd.remover(btn.id)
            let idlocal = localStorage.getItem('id')
            idlocal -= 1
            localStorage.setItem('id', idlocal)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
        console.log(d)
    })
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    despesas = bd.pesquisar(despesa)
    if (despesas.length == 0){
        mudaModal('vermelho', 'Despesa não encontrada', 'Nenhuma despesa encontrada nestes parametros', 'Voltar')
        $('#modalRegistroDespesa').modal('show')
    }

    carregarListaDespesas(despesas, filtro=true)
}