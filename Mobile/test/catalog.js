const catalogPage = require('../pages/catalog.page')

describe('Catálogo Mobile', () => {

  it('deve exibir catálogo de produtos', async () => {
    await driver.pause(3000)
  })

  it('deve abrir primeiro produto', async () => {
    await catalogPage.openFirstProduct()
    await driver.pause(3000)
  })

})