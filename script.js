document.addEventListener("DOMContentLoaded", () => {
    const floatingContainer = document.getElementById("floating-flowers");

    function createFloatingFlower() {
        const flower = document.createElement("div");
        flower.classList.add("floating-flower");
        flower.innerHTML = "🌻"; // Icono de girasol
        flower.style.position = "absolute";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.bottom = "0px";
        flower.style.fontSize = "24px";
        flower.style.animation = "floatUp 5s linear infinite";

        floatingContainer.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    setInterval(createFloatingFlower, 1000);
});
