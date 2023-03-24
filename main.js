var a=prompt("Enter the month");
var b=new Date();
var month=b.setMonth(a)




if(month<=2 && month<5){
document.write("it's Summer Season");
}
else if(month<=6 && month<9){
  document.write("it's Fall Season");
  }
  else{
   document.write("it's Winter Season");
	}
	