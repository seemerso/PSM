var products = [
  {
    id: 0,
    name: "Apples",
    price: "$2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "$2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "Oranges",
    price: "$3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

$.each(products, function(i, value) {
  var product = $("<div></div>");
  product.addClass("product");
  product.append("<img src='" + value.image + "'/>");

  product.append("<div> Name: " + value.name + "</div>");
  product.append("<div> Price: " + value.price + "</div>");

  $(product).attr("color", value.color);
  $(product).attr("name", value.name);
  $(product).attr("price", value.price);
  $(product).attr("img", value.image);

  $("body").append(product);
});

$(".product").hover(
  function() {
    var color = $(this).attr("color");
    $(this).css("border-color", color);
  },
  function() {
    $(this).css("border-color", "black");
  }
);


var popUp = $("<div></div>");
popUp.addClass("popUp");
popUp.append("<img class='imgDiv'></img>");
popUp.append("<div class='nameDiv'></div>");
popUp.append("<div class='priceDiv'></div>");
$("body").append(popUp);
$(".popUp").hide();


$(".product").click(products, function(i, value) {
  $(".popUp").show();
  $(".imgDiv").attr("src", $(this).attr("img"));
  $(".nameDiv").text($(this).attr("name"));
  $(".priceDiv").text($(this).attr("price"));

});


$(".popUp").click(function() {
  $(this).hide();
});
