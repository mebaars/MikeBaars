// script.js
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("iframeModal");
    var btn = document.getElementById("openModalButton");
    var span = document.getElementsByClassName("close")[0];

    if (!modal) {
        console.error('Element with id "iframeModal" not found.');
    }

    if (!btn) {
        console.error('Element with id "openModalButton" not found.');
    }

    if (modal && btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});
