const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //expressão regular que valida o formato do email

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // evita o comportamento padrão de recarregar o form, ao inves disso ele ira executar o comportamento específico criado abaixo.

    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    if (campoNome.value.length < 3){ // se valor inserido no campo nome tiver menos de 3 caracteres...
        txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.'; // apresenta a mensagem de erro
        campoNome.focus(); // dá o foco/realsa o campo Nome para que o usuário veja e corrija o valor inserido.
        return; // impede que o formulario seja enviado enquanto essa condição for verdadeira.
    }else{
        txtNome.innerHTML = ''; // indica que a validação do campo Nome esta correta.
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if (!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = 'Digite um E-mail válido.';
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');

    if(campoSubject.value.length < 5){
        txtSubject.innerHTML = 'O assunto deve conter no mínimo 5 caracteres.';
        campoSubject.focus();
        return;
    }else{
        txtSubject.innerHTML='';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!"); // se todas as validações passarem, aparece uma mensagem de confirmação do envio.

    // Limpa todos os campos.
    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

});