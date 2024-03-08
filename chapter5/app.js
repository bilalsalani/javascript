/*var num1 = 14 ;
var num2 = 12 ;
var add = num1 + num2 ;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
document.write(add);
document.write("<br>" + sub);
document.write("<br>" + mul);
document.write ("<br>" + div); */

var my_variable  ;
document.write(" value after declaration variable is " + my_variable + "<br>") ;

my_variable = 5 ;
document.write("Initial value " + my_variable + "<br>");

my_variable ++;
document.write("value after increment is " + my_variable + "<br>");

 my_variable += 7 ;
 document.write("value after addition is " + my_variable + "<br>")

 my_variable -- ;
 document.write("value after decrement is " + my_variable + "<br>");

 var remainder = my_variable % 3;
 document.write(" the remainder is " + remainder + "<br>");

 var cost = 600 ;
 var total_tickets = 5 ;
 var movie = cost * total_tickets ;
 document.write("Total cost to buy 5 tickets to a movie is " + movie + " pkr <br>");


document.write("<h2>Multiplication table of 4 </h2>");
document.write("4 x 1 = " + (4*1) + "<br>");
document.write("4 x 2 =" + (4*2) + "<br>");
document.write("4 x 3 =" + (4*3) + "<br>");
document.write("4 x 4 =" + (4*4) + "<br>");
document.write("4 x 5 =" + (4*5) + "<br>");
document.write("4 x 6 =" + (4*6) + "<br>");
document.write("4 x 7 =" + (4*7) + "<br>");
document.write("4 x 8 =" + (4*8) + "<br>");
document.write("4 x 9 =" + (4*9) + "<br>");
document.write("4 x 10 =" + (4*10) + "<br>");

var celsius = 30 ;
var farenheit = (celsius * 9/5) + 32 ;
document.write(" <br>celsius temperature is "+ celsius + " farenheit temp is " + farenheit);

var priceitem1 = 650;
var priceitem2 = 100;
var quantity1 = 3;
var quantity2 = 7
var shipping =100;

var totalcostitem1 = ( priceitem1 * quantity1 );
var totalcostitem2 = ( priceitem2 * quantity2 );

var totalcost = totalcostitem1 + totalcostitem2 + shipping ;

document.write("<br> Price of item1 is " + priceitem1);
document.write("<br> Quantity of item1 is " + quantity1)
document.write("<br> price od item2 is " + priceitem2);
document.write("<br> Quantity of item2 is " + quantity2)
document.write("  <br> total cost of your order is " + totalcost );
