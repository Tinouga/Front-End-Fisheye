const modal = document.getElementById("contact_modal");
const mainWrapper = document.getElementById("main");
const closeModalBtn = document.getElementById("closeModalBtn");
const openModalBtn = document.getElementById("openModalBtn");

function displayModal() {
    mainWrapper.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    modal.style.display = "flex";
    closeModalBtn.focus()
}

function closeModal() {
    mainWrapper.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    modal.style.display = "none";
    openModalBtn.focus()
}

// close the modal when a user press the ESC key
document.addEventListener("keydown", e => {
    const keyCode = e.key || e.keyCode || e.which;

    if ((keyCode === "Escape" || keyCode === 27) && modal.getAttribute("aria-hidden") === "false") {
        closeModal();
    }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
    e.preventDefault();

    const firstName = form.querySelector("#firstName").value;
    const lastName = form.querySelector("#lastName").value;
    const email = form.querySelector("#email").value;
    const message = form.querySelector("#message").value;

    console.log("Form values: ", firstName, lastName, email, message);

    closeModal();
});