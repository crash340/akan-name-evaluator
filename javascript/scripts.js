
function male(){
  var y = document.getElementById("Bday").value;
  alert(y);
  var year =y.slice(0,4);
  var century=year.slice(1,3);
  var year2 =year.slice(1,4);
  var month =y.slice(5,7);
  var day = y.slice(8,11);
  var new_day = (((parseInt(century)/4)-2*parseInt(century)-1) + ((5*parseInt(year2)/4) ) + ((26*(parseInt(month)+1)/10))+parseInt(day))
  var day2 = parseInt((new_day%7).toFixed());
  if (day2 === 0){
    alert("you were born on a sunday therefore your akan n ame is Kwasi")
  }
  else if (day2 === 1){
    alert("you were born on a monday therefore your akan name is Kwadwo")
  }
  else if (day2 === 2){
    alert("your were bron on a tuesday therefore your akan name is Kwabena")
  }
  else if(day2 === 3){
    alert("you are born on a wensday therefore your akan name is Kwaku ")
  }
  else if(day2 === 4){
    alert("you are born on a thursday therefore your akan name is Yaw ")
  }
  else if (day2=== 5){
    alert("you are born on a friday therfore your akan name is Kofi")
  }
  else if (day2 === 6){
    alert("you are born on saturday therefore your akan is Kwame ")
  }
  else{
    alert("it does not exist")
  }

}
function female(){
  var y = document.getElementById("Bday").value;
  alert(y);
  var year = y.slice(0,4);
  var century=year.slice(1,3);
  var year2 =year.slice(1,4);
  var month =y.slice(5,7);
  var day = y.slice(8,11);
  var new_day = (((parseInt(century)/4)-2*parseInt(century)-1) + ((5*parseInt(year2)/4) ) + ((26*(parseInt(month)+1)/10))+parseInt(day))
  var day2 = parseInt((new_day%7).toFixed());

  if (day2 === 0){
    alert("you were born on a sunday therefore your akan n ame is Akosua")
  }
  else if (day2 === 1){
    alert("you were born on a monday therefore your akan name is Adwoa")
  }
  else if (day2 === 2){
    alert("your were bron on a tuesday therefore your akan name is Abenaa")
  }
  else if(day2 === 3){
    alert("you are born on a wensday therefore your akan name is Akua ")
  }
  else if(day2 === 4){
    alert("you are born on a thursday therefore your akan name is Yaa ")
  }
  else if (day2=== 5){
    alert("you are born on a friday therfore your akan name is Afua")
  }
  else if (day2 === 6){
    alert("you are born on saturday therefore your akan is Ama ")
  }
  else{
    alert("it does not exist")
  }


}
