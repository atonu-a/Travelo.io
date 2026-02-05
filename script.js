let themeBtn  = document.querySelector("#theme");



if(document.body.classList.contains("dark")){
    themeBtn.innerText = "☀︎ Light Mode";
      

}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "☀︎ Light Mode";
    }
    else{
        themeBtn.innerText = "☾ Dark Mode";
    }
  
});