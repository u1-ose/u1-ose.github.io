let list_eat = document.getElementsByClassName("mini_pizza")
console.log(list_eat)

document.getElementById("show_eat").onclick = function(){
    document.getElementById("show_eat").style.display = "none";
    for (let i = 0; i < list_eat.length; i++){
        list_eat[i].classList.remove("hiden_pizza");
    }
};
