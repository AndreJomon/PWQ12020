window.addEventListener("load", function () {
    // alert("Hello World!");
    var button = document.getElementById("button");

    function handleClick(e) {
        alert("Hello World");
    }
    
    button.addEventListener("click", handleClick);
});