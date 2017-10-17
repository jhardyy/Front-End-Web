(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let myNameOtherElement = document.getElementById("heading-name");
  
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	myNameOtherElement.innerHTML = userName.value;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
