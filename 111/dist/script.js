document.write("嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿")
var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count=count+2;
      counterElement.textContent = count;
    }