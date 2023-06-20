const items = document.querySelectorAll('.has-dropdown')

//Dropdown
function dropdownToggle(){
    const link = this.classList.contains('active');
    for(i = 0; i < items.length; i++){
        items[i].classList.remove('active');
    }
    if(!link){
        this.classList.add('active');
    }
}

items.forEach((items)=> items.addEventListener('click', dropdownToggle))

//User link dropdown
const userProfile = document.querySelector('.user-profile');

userProfile.addEventListener('click', function(){
    document.querySelector('.user-link-dropdown').classList.toggle('show')
})

// Sidebar Toggle
const hamburguer = document.querySelector('.toggle-btn');

hamburguer.addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('collapsed')
})

// Theme Switch
function toogleRootClass(){
    document.querySelector(":root").classList.toggle("light")
}

function isLight(){
    return localStorage.getItem("light-theme")
}

function toogleLocalStorageItem(){
    if(isLight()){
        localStorage.removeItem("light-theme")
    }else{
        localStorage.setItem("light-theme","set")
    }
}
if(isLight()){
    toogleRootClass();
}

document.querySelector(".theme-toggle").addEventListener("click", ()=>{
    toogleLocalStorageItem();
    toogleRootClass();
})