document.addEventListener("DOMContentLoaded", function () {
    // Select all dropdown toggles
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent link default action

            // Get the corresponding dropdown menu
            const dropdownMenu = this.nextElementSibling;

            // Close all dropdowns except the one being clicked
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("active");
                }
            });

            // Toggle current dropdown menu
            dropdownMenu.classList.toggle("active");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.classList.remove("active");
            });
        }
    });
});