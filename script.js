// script.js
document.getElementById("button_github").addEventListener("click", function() {
    window.location.href = "https://github.com/Nelsolaa";
});

document.getElementById("button_linkdin").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/nelson-prado-8473bb2b1/";
});


document.getElementById("button_curriculo").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "fotos/CURRICULO_OFICIAL.pdf"; 
    link.download = "CURRICULO_OFICIAL.pdf";
    link.click();
});

document.getElementById("button_instagram").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/nelson.bpn/";
});
