document.getElementById("openChat").addEventListener("click", function() {
    document.getElementById("chatBox").classList.remove("hidden");
    this.classList.add("hidden");
});

document.getElementById("closeChat").addEventListener("click", function() {
    document.getElementById("chatBox").classList.add("hidden");
    document.getElementById("openChat").classList.remove("hidden");
});