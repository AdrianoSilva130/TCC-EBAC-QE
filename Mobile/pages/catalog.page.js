class CatalogPage {
  get firstProduct() {
    return $('(//android.widget.TextView)[1]')
  }

  async openFirstProduct() {
    await this.firstProduct.click()
  }
}

module.exports = new CatalogPage()