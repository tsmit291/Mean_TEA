// services allow you to access info all throughout your site. NO SCOPE GOES IN THIS FILE.


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

  this.removeRow = function(name) {
    console.log('hello');
    var index = -1;
    var teaArray = eval(myCart);
    for(var i = 0; i < teaArray.length; i++){
      if(teaArray[i].name === name){
        index = i;
        console.log(index);
        break;
      }
    }
    if (index === -1){
      alert("There's nothing to delete");
    }
    myCart.splice(index, 1);
  }
}]);
