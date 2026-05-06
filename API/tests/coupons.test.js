const request = require('supertest')

const baseURL = 'http://lojaebac.ebaconline.art.br'

const Ajv = require('ajv')

const ajv = new Ajv()


describe('API Cupons', () => {

  it('deve listar cupons com sucesso', async () => {
    const response = await request(baseURL)
      .get('/wp-json/wc/v3/coupons')
      .auth('admin_ebac', '@admin!&b@c!2022')

    expect(response.status).toBe(200)
  })

  it('deve criar cupom com sucesso', async () => {
    const response = await request(baseURL)
      .post('/wp-json/wc/v3/coupons')
      .auth('admin_ebac', '@admin!&b@c!2022')
      .send({
        code: `Cupom${Date.now()}`,
        amount: '10',
        discount_type: 'fixed_product',
        description: 'Cupom teste'
      })

    expect(response.status).toBe(201)
  })

  it('não deve criar cupom duplicado', async () => {
    const coupon = {
      code: `Duplicado${Date.now()}`,
      amount: '10',
      discount_type: 'fixed_product',
      description: 'Cupom teste'
    }

    await request(baseURL)
      .post('/wp-json/wc/v3/coupons')
      .auth('admin_ebac', '@admin!&b@c!2022')
      .send(coupon)

    const response = await request(baseURL)
      .post('/wp-json/wc/v3/coupons')
      .auth('admin_ebac', '@admin!&b@c!2022')
      .send(coupon)

    expect(response.status).not.toBe(201)
  })

  it('não deve criar cupom sem campos obrigatórios', async () => {
    const response = await request(baseURL)
      .post('/wp-json/wc/v3/coupons')
      .auth('admin_ebac', '@admin!&b@c!2022')
      .send({})

    expect(response.status).toBeGreaterThanOrEqual(400)
  })

  it('deve validar contrato de cupons', async () => {
  const response = await request(baseURL)
    .get('/wp-json/wc/v3/coupons')
    .auth('admin_ebac', '@admin!&b@c!2022')

  const schema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        code: { type: 'string' }
      },
      required: ['id', 'code']
    }
  }

  const validate = ajv.compile(schema)
  const valid = validate(response.body)

  expect(valid).toBe(true)
})
})