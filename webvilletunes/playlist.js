function setUpButtonHandler() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    alert("insert a song");
}