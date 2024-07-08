function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    } else if (tipo.value == 'vip') {
        comprarVip(qtd);
    } else {
        comprarCamarote(qtd);
    }

    // Resetar a quantidade de ingressos
    document.getElementById('qtd').value = '';
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarVip(qtd) {
    let qtdVip = parseInt(document.getElementById('qtd-vip').textContent);
    if (qtd > qtdVip) {
        alert('Quantidade indisponível para tipo VIP');
    } else {
        qtdVip -= qtd;
        document.getElementById('qtd-vip').textContent = qtdVip;
        alert('Compra realizada com sucesso!');
    }
}

function comprarCamarote(qtd) {
    let qtdCamarote = parseInt(document.getElementById('qtd-camarote').textContent);
    if (qtd > qtdCamarote) {
        alert('Quantidade indisponível para tipo camarote');
    } else {
        qtdCamarote -= qtd;
        document.getElementById('qtd-camarote').textContent = qtdCamarote;
        alert('Compra realizada com sucesso!');
    }
}
