Explicação das Expressões Regulares Utilizadas
1. Validação do Nome

A expressão regular utilizada para validar o nome é:

JavaScript
/^[a-zA-ZãáàèéêíìòóõúüçÇ]+(\s[a-zA-ZãáàèéêíìòóõúüçÇ]+)*$/

Explicação:

^: Indica o início da string.
[a-zA-ZãáàèéêíìòóõúüçÇ]+: Uma ou mais letras maiúsculas ou minúsculas com acentos.
\s: Um espaço em branco.
[a-zA-ZãáàèéêíìòóõúüçÇ]+: Uma ou mais letras maiúsculas ou minúsculas com acentos (repetido para permitir sobrenomes).
$: Indica o final da string.

Exemplo:

Válido: João da Silva
Inválido: 1234, João [endereço de email removido]
2. Validação do Telefone

A expressão regular utilizada para validar o telefone é:

JavaScript
/^\d{2}\s\d{5}-\d{4}$/


Explicação:

^: Indica o início da string.
\d{2}: Dois dígitos (DDD).
\s: Um espaço em branco.
\d{4}: Quatro dígitos.
-: Um hífen.
\d{4}: Quatro dígitos.
$: Indica o final da string.

Exemplo:

Válido: (44) 99999-9999
Inválido: (99) 99999999, 1199999999


3. Validação do Email

A expressão regular utilizada para validar o email é:

JavaScript
/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/


Explicação:

^: Indica o início da string.
[a-zA-Z0-9_.+-]: Um ou mais caracteres entre letras maiúsculas ou minúsculas, números, ponto, underline, hífen ou sinal de mais.
@: O símbolo "arroba".
[a-zA-Z0-9-]: Um ou mais caracteres entre letras maiúsculas ou minúsculas, números ou hífen.
\.[a-zA-Z0-9-]{2,}: Um ponto seguido de dois ou mais caracteres entre letras maiúsculas ou minúsculas, números ou hífen (domínio).
$: Indica o final da string.

Exemplo:

Válido: [endereço de email removido]
Inválido: joaosemail, joao@exemplo
