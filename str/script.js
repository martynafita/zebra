
function wyslijMaila() {
    emailjs.send("service_gjtfkmd", "template_qmm2o08", {
        message: "Kliknął TAK"
    }).then(function() {
        alert("Jupiiii <3");

    });
}

(function(){
    emailjs.init("-b7yRa5eyd6fh3lAa");
})();

function pokazEkran2() {
    document.getElementById("ekran1").style.display = "none";
    document.getElementById("ekran2").style.display = "block";
}

function wroc() {
    document.getElementById("ekran2").style.display = "none";
    document.getElementById("ekran1").style.display = "block";
}

const przycisk = document.getElementById("zmieniajacy");

przycisk.addEventListener("mouseover", () => {
    przycisk.textContent = "Nie, żartowałem";
});

przycisk.addEventListener("mouseout", () => {
    przycisk.textContent = "Tak";
});