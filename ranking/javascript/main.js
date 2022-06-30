let close = document.querySelectorAll(".close");
close.forEach(function(close) {
    close.addEventListener('click', function() {
        console.log("click");
    })
});