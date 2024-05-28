document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("iframeModal");
    var btn = document.getElementById("openModalButton");
    
    if (!modal) {
        console.error('Element with id "myModal" not found.');
    }

    if (!btn) {
        console.error('Element with id "openModalButton" not found.');
    }

    if (modal && btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});