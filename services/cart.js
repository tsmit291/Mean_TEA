// when you click add to cart, it gets stored in an array
// when I hit shopping cart, i am taken to my shopping cart page and whatever was added to my cart array gets

app.service('cartService', ['$http', function($http){
  var myCart = [];
  this.myCart = myCart;

  this.add = function(qty) {
    var tea = {};
    tea.name = this.tea.name;
    tea.ingredients = this.tea.ingredients;
    tea.caffeineScale = this.tea.caffeineScale;
    tea.price = this.tea.price;
    tea.imageUrl = this.tea.imageUrl;
    tea.categories = this.tea.categories;
    tea.rating = this.tea.rating;
    tea.qty = parseFloat(qty);
    myCart.push(tea);
    console.log(myCart);
  }
}])
