Funcionalidade: Adicionar item ao carrinho

Cenário: Adicionar produto válido
Dado que estou na página do produto
Quando seleciono cor, tamanho e quantidade
E clico em adicionar ao carrinho
Então produto deve ser adicionado com sucesso

Cenário: Limite máximo de itens
Dado que estou na página do produto
Quando informo quantidade 11
Então sistema deve impedir inclusão

Cenário: Aplicar cupom 10%
Dado que possuo produtos totalizando R$300
Quando adiciono ao carrinho
Então deve aplicar desconto de 10%

Cenário: Aplicar cupom 15%
Dado que possuo produtos acima de R$600
Quando adiciono ao carrinho
Então deve aplicar desconto de 15%