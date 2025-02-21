  
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scrollContainer");
    const scrollLeft = document.getElementById("scrollLeft");
    const scrollRight = document.getElementById("scrollRight");

    // Khoảng cách cuộn mỗi lần bấm (có thể chỉnh sửa)
    const scrollAmount = 300;

    scrollLeft.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});


document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


document.getElementById("language-toggle").addEventListener("click", function () {
    document.getElementById("language-menu").classList.toggle("hidden");
});

// Đóng dropdown khi click ra ngoài
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("language-menu");
    const toggleBtn = document.getElementById("language-toggle");

    if (!toggleBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});

