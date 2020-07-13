function paraCliked(){
  document.getElementById("culo").setAttribute("style","color: yellow");
}

function paraMouseOver(){
  document.getElementById("culo").setAttribute("style","color: red");
}

document.getElementById("culo").addEventListener("click", paraCliked);
document.getElementById("culo").addEventListener("mouseover", paraMouseOver);

function buttonClick(){
  document.getElementById("b").setAttribute("style", "color: green");
};
/*document.getElementById("b").addEventListener("buttonclick", buttonClick);
*/
function buttonMouseOver(){
  document.getElementById("b").setAttribute("style","color: pink");
}

function validateForm(){
  //check  name is added or not
  var name=document.getElementById("name");
  var phNo=document.getElementById("phno");

  if(name.value== null){
    alert("please enter some value in name");
  }
  if(!(inNaN(name.Value))){
    alert("please enter letter value in name");
  }
  if(isNan(phNo.value)){
    alert("please enter ph value in Name");
  }
}
