//your JS code here. If required.
var elm = document.getElementById("level");
var level = 0;
while (elm.parentNode) {
  level++;
  elm = elm.parentNode;
}
var message = "The level of the element is: " + level;
alert(message);



