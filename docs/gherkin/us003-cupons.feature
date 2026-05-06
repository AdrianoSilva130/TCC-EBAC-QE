Funcionalidade: API Cupons

Cenário: Listar cupons
Dado autenticação válida
Quando faço GET /coupons
Então retorno status 200

Cenário: Criar cupom válido
Dado body válido
Quando faço POST coupon
Então retorna sucesso

Cenário: Cupom duplicado
Dado cupom existente
Quando cadastro mesmo nome
Então retorna erro

Cenário: Campo obrigatório ausente
Dado body incompleto
Quando faço POST
Então retorna erro validação