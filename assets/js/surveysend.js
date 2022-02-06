function closeModal(modalview) {
    var modalview = document.getElementById("modal-survey-form")
    modalview.classList.remove("view-modal")
}

function handleSubmit(event) {
    event.preventDefault();
    modalview.classList.add("view-modal")
    
}

