document.addEventListener("DOMContentLoaded", function () {
    // ======================
    // Mobile Menu Functionality
    // ======================
    const mobileMenuButtons = document.querySelectorAll("#mobile-menu-button");
    const mobileMenus = document.querySelectorAll("#mobile-menu");

    mobileMenuButtons.forEach((button) => {
        button.addEventListener("click", function () {
            mobileMenus.forEach((menu) => {
                menu.classList.toggle("hidden");
            });
        });
    });

    // Mobile dropdown toggle
    const mobileMenuDropdowns = document.querySelectorAll(
        "#mobile-menu-dropdown"
    );
    const mobileDropdownContents = document.querySelectorAll(
        "#mobile-dropdown-content"
    );

    mobileMenuDropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function () {
            mobileDropdownContents.forEach((content) => {
                content.classList.toggle("hidden");
            });
        });
    });

    // ======================
    // Dark Mode System
    // ======================
    function initializeTheme() {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    function toggleDarkMode() {
        const html = document.documentElement;
        const isDark = html.classList.contains("dark");

        if (isDark) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    function setupThemeSync() {
        window.addEventListener("storage", (e) => {
            if (e.key === "theme") {
                if (e.newValue === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        });
    }
    // starter page
    const orderButtons = document.querySelectorAll(".order-btn");
    orderButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Order taken");
        });
    });

    // Initialize theme system
    initializeTheme();
    setupThemeSync();

    // Listen for system preference changes
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
                document.documentElement.classList.toggle("dark", e.matches);
            }
        });

    // Make toggle function available globally
    window.toggleDarkMode = toggleDarkMode;
});
