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



const menuWrapper = document.querySelector('.menu.group');
const menuDropdown = menuWrapper.querySelector('.ul-menu');
const menuArrow = menuWrapper.querySelector('span');

menuWrapper.addEventListener('click', function(e) {
    
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        menuDropdown.style.maxHeight = null;
        menuArrow.classList.remove('rotate-90');
        return;
    }


    if (menuDropdown.style.maxHeight === '500px') {
        menuDropdown.style.maxHeight = null;
        menuArrow.classList.remove('rotate-90');
    } else {
        menuDropdown.style.maxHeight = '500px';
        menuArrow.classList.add('rotate-90');
    }
});

document.addEventListener('click', function(e) {
    if (!menuWrapper.contains(e.target)) {
        menuDropdown.style.maxHeight = null;
        menuArrow.classList.remove('rotate-90');
    }
});
