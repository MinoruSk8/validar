const formulario = document.getElementById('formulario');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const email = emailInput.value.trim();

    const nomeValido = validarNome(nome);
    const telefoneValido = validarTelefone(telefone);
    const emailValido = validarEmail(email);

    if (nomeValido && telefoneValido && emailValido) {
        alert('Formulário enviado com sucesso!');
    } else {
        const erros = [];

        if (!nomeValido) {
            erros.push('Nome inválido.');
        }

        if (!telefoneValido) {
            erros.push('Telefone inválido.');
        }

        if (!emailValido) {
            erros.push('Email inválido.');
        }

        alert(`Erros:\n${erros.join('\n')}`);
    }
});

function validarNome(nome) {
    const regexNome = /^[a-zA-ZãáàèéêíìòóõúüçÇ]+(\s[a-zA-ZãáàèéêíìòóõúüçÇ]+)*$/;
    return regexNome.test(nome);
}

function validarTelefone(telefone) {
    const regexTelefone = /^\d{2}\s\d{5}-\d{4}$/;
    return regexTelefone.test(telefone);
}

function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/;
    return regexEmail.test(email);
}
