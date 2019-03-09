var popup=document.querySelector(".popup");
var buttonContact=document.querySelector(".button-contact");
var closeButton=document.querySelector(".modal-close");
var userName=document.querySelector("[name=user-name]");
var popupMap=document.querySelector(".popup-map");
var map=document.querySelector(".map");
var closeMap=document.querySelector(".map-close");

var popupCotalog=document.querySelector(".popup-cotalog");
var buy = document.querySelectorAll('.button-buy'),
    index, buttonBuy; //Купить
var buttonCatalog=document.querySelector(".button-catalog"); //Продолжить покупки

//Обратная связь
if(buttonContact){
buttonContact.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.add("popup-show");
    userName.focus();
});
};

if(closeButton){
closeButton.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.remove("popup-show");
});
};

window.addEventListener("keydown", function(evt){
    if(evt.keyCode===27){
        if(popup.classList.contains("popup-show")){
            evt.preventDefault();
            popup.classList.remove("popup-show");
        }
    }
});

//Карта

if(map){
map.addEventListener("click",function(evt){
    evt.preventDefault();
    popupMap.classList.add("popup-show");
});
};

if(closeMap){
closeMap.addEventListener("click",function(evt){
    evt.preventDefault();
    popupMap.classList.remove("popup-show");
});
};

window.addEventListener("keydown", function(evt){
    if(evt.keyCode===27){
        if(popupMap.classList.contains("popup-show")){
            evt.preventDefault();
            popupMap.classList.remove("popup-show");
        }
    }
});

//Кнопки купить

if (buy){
    for (index = 0; index < buy.length; index++) {
    buttonBuy = buy[index];
    buttonBuy.addEventListener('click', function (evt) {
        evt.preventDefault();
        popupCotalog.classList.add("popup-show");
    }); }
};


if(buttonCatalog){
    buttonCatalog.addEventListener("click",function(evt){
        evt.preventDefault();
        popupCotalog.classList.remove("popup-show");
    });
};
