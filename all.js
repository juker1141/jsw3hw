new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1586934917210,
        unit: '台',
        category: '掌上主機',
        title: 'Switch',
        origin_price: 20000,
        price: 9980,
        description: '想玩就玩',
        content: '動森太好玩惹',
        is_enabled: 1,
        imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      },
    ],
    tempProduct: {},
  },
  methods: {
    updateProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products[i] = this.tempProduct;
          }
        })
      } else {
        const id = new Date().getTime();
        this.tempProduct.id = id;
        this.products.push(this.tempProduct);
      }
      this.tempProduct = {};
    }
  },
})