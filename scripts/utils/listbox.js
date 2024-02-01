function handleSort(optionValue) {
    switch(optionValue) {
        case "popularity":
            medias.sort((a, b) => b.likes - a.likes);
            break;
        case "date":
            medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case "title":
            medias.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    displayData(medias, true);
}

const listboxOptionsContainer = document.querySelector(".listbox__options");
const listboxSelected = document.querySelector(".listbox__selected");

document.querySelectorAll("#mediaFilterLabel, .listbox__selected").forEach(elem =>
    elem.addEventListener("click", () => {
        // toggle the listbox
        if (listboxSelected.getAttribute("aria-expanded") === "false") {
            openListbox();
        } else {
            closeListbox()
        }

        // todo asked why it behaved weirdly
        // if (listboxOptionsContainer.style.display === "none") {
        //     openListbox();
        // } else {
        //     closeListbox()
        // }
    })
);

// allow opening the listbox with the keyboard
listboxSelected.addEventListener("keydown", e => {
    const keyCode = e.key || e.keyCode || e.which;

    if (keyCode === "Enter" || keyCode === 13) {
        openListbox();
    }
});

document.querySelectorAll(".listbox__option").forEach(option => {
    option.addEventListener("click", e => {
        handleOptionClicked(e);
    });
    // allow navigating through the listbox with the keyboard
    option.addEventListener("keydown", e => {
        const keyCode = e.key || e.keyCode || e.which;

        switch(keyCode) {
            case "Enter":
            case 13:
                handleOptionClicked(e);
                break;
            case "ArrowUp":
            case 38:
                if (option.previousElementSibling) {
                    option.previousElementSibling.focus();
                }
                break;
            case "ArrowDown":
            case 40:
                if (option.nextElementSibling) {
                    option.nextElementSibling.focus();
                }
                break;
            case "Escape":
            case 27:
                closeListbox();
                break;
        }
    });
});

function handleOptionClicked(e) {
    // only sort if the selected option is different from the current one
    if (e.target.getAttribute("aria-selected") !== "true") {
        const selectedValue = e.target.getAttribute("data-value");
        handleSort(selectedValue);

        listboxOptionsContainer.setAttribute("aria-activedescendant", e.target.id);

        // update the text of the selected option
        listboxSelected.textContent = e.target.textContent;

        // update the aria-selected status
        document.querySelectorAll(".listbox__option").forEach(element => element.setAttribute("aria-selected", "false"));
        e.target.setAttribute("aria-selected", "true");
    }

    // close the listbox
    closeListbox();
}

function openListbox() {
    listboxSelected.setAttribute("aria-expanded", "true");
    listboxOptionsContainer.style.display = "flex";
    listboxOptionsContainer.children[0].focus();
}

function closeListbox() {
    listboxSelected.setAttribute("aria-expanded", "false");
    listboxOptionsContainer.style.display = "none";
    // give the focus back to the selected option
    listboxSelected.focus();
}