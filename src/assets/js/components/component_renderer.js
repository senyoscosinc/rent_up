// Elements
const login_openBtn = document.getElementById("login-button"); // your trigger button
const login_overlay = document.getElementById("login-overlay");
const login_card = document.getElementById("login-card");

const login_listerBtn = document.getElementById("login-lister-btn");
const login_seekerBtn = document.getElementById("login-seeker-btn");

const login_listerForm = document.getElementById("login-lister-form");
const login_seekerForm = document.getElementById("login-seeker-form");

let login_currentRole = "lister"; // default role

// Open modal
function login_openModal() {
    login_overlay.classList.add("active");
    login_card.classList.add("show");
    login_overlay.setAttribute("aria-hidden", "false");
    login_card.setAttribute("aria-hidden", "false");

    setTimeout(() => {
    if (login_currentRole === "lister") {
        login_listerForm.querySelector("input")?.focus();
    } else {
        login_seekerForm.querySelector("input")?.focus();
    }
    }, 140);
}

            // Close modal
function login_closeModal() {
    login_overlay.classList.remove("active");
    login_card.classList.remove("show");
    login_overlay.setAttribute("aria-hidden", "true");
    login_card.setAttribute("aria-hidden", "true");
}

// Toggle role with sliding animation
function login_showRole(role) {
    if (role === login_currentRole) return;

    if (role === "lister") {
    login_listerBtn.classList.add("active");
    login_seekerBtn.classList.remove("active");

    login_seekerForm.classList.remove("active", "to-right");
    login_seekerForm.classList.add("to-left");

    login_listerForm.classList.remove("to-left", "to-right");
    void login_listerForm.offsetWidth; // force reflow
    login_listerForm.classList.add("active");
    } else {
    login_seekerBtn.classList.add("active");
    login_listerBtn.classList.remove("active");

    login_listerForm.classList.remove("active", "to-left");
    login_listerForm.classList.add("to-left");

    login_seekerForm.classList.remove("to-left", "to-right");
    void login_seekerForm.offsetWidth;
    login_seekerForm.classList.add("active");
    }

    login_currentRole = role;
}

// Event listeners
login_openBtn.addEventListener("click", login_openModal);

login_overlay.addEventListener("click", (e) => {
    if (e.target === login_overlay) login_closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && login_overlay.classList.contains("active"))
    login_closeModal();
});

login_listerBtn.addEventListener("click", () => login_showRole("lister"));
login_seekerBtn.addEventListener("click", () => login_showRole("seeker"));

// Prevent form submission reload
[login_listerForm, login_seekerForm].forEach((form) => {
    form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const role = form === login_listerForm ? "Lister" : "Seeker";
    console.log(`Submitting ${role} login`, {
        email: form.querySelector('input[type="email"]').value,
    });
    login_closeModal();
    });
});