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

document.querySelectorAll("#mediaFilterLabel, .listbox__selected").forEach(elem =>
    elem.addEventListener("click", () => {
        const listboxOptionsContainer = document.querySelector(".listbox__options");

        // toggle the listbox
        document.querySelector(".listbox__selected").setAttribute("aria-expanded", "true");
        listboxOptionsContainer.style.display = "flex";
    })
);

document.querySelectorAll(".listbox__option").forEach(option => {
    const listboxOptionsContainer = document.querySelector(".listbox__options");

    option.addEventListener("click", e => {
        const selectedValue = e.target.getAttribute("data-value");

        // only sort if the selected option is different from the current one
        if (e.target.getAttribute("aria-selected") !== "true") {
            handleSort(selectedValue);
        }

        // update the text of the selected option
        document.querySelector(".listbox__selected").textContent = event.target.textContent;

        // close the listbox
        listboxOptionsContainer.style.display = "none";
        // update the aria-selected status
        document.querySelectorAll(".listbox__option").forEach(element => element.setAttribute("aria-selected", "false"));
        option.setAttribute("aria-selected", "true");
    });
});