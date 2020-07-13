var newWindow=window.open("http://www.google.com","newWindow","height=100, width=200");
newWindow.moveTo(200,150);

function navigationProp(){
  document.write("<br> appcodeName:"+navigator.appCodeName);
  document.write("<br> appName:"+navigator.appName);
  document.write("<br> platform:"+navigator.platform);
  document.write("<br> coockie is enabled:"+navigator.cookieEnabled);
  document.write("<br> product:"+navigator.product);
}

navigationProp();

function locationProp(){
  console.log("hreaf of location:"+location.href);

}
locationProp();
