window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        500
    )
});
document.querySelector("#close","click", function(){
    document.querySelector(".popup").style.display = "none";
});