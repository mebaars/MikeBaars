document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("iframeModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    if (!modal) {
        console.error('Element with id "iframeModal" not found.');
        return;
    }
    if (!btn) {
        console.error('Element with id "openModalButton" not found.');
        return;
    }
    if (!span) {
        console.error('Element with class "close" not found.');
        return;
    }

    console.log('All necessary elements are found.');

    var openModal = function(event) {
        console.log('Open button clicked or touched', event.type);
        modal.classList.add("show");
        console.log('Modal class set to show');
    };

    var closeModal = function(event) {
        console.log('Close button clicked or touched', event.type);
        modal.classList.remove("show");
        console.log('Modal class removed show');
    };

    // Attach event listeners with logging
    btn.addEventListener('click', function(event) {
        console.log('Button click event listener triggered.');
        openModal(event);
    });
    btn.addEventListener('touchstart', function(event) {
        console.log('Button touchstart event listener triggered.');
        openModal(event);
    }, { passive: true });

    span.addEventListener('click', function(event) {
        console.log('Close span click event listener triggered.');
        closeModal(event);
    });
    span.addEventListener('touchstart', function(event) {
        console.log('Close span touchstart event listener triggered.');
        closeModal(event);
    }, { passive: true });

    window.addEventListener('click', function(event) {
        console.log('Window click event listener triggered.');
        if (event.target == modal) {
            console.log('Click outside modal detected.');
            closeModal(event);
        }
    });

    window.addEventListener('touchstart', function(event) {
        console.log('Window touchstart event listener triggered.');
        if (event.target == modal) {
            console.log('Touch outside modal detected.');
            closeModal(event);
        }
    }, { passive: true });

    console.log('Event listeners attached.');
});
