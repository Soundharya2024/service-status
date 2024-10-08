/* Code for single toggle button 
document.querySelector("#toggle-button").addEventListener("change", (e) => {
    e.target.checked = !e.target.checked; //do not toggle
    const serviceSwitchToggleState = e.target.checked ? "OFF" : "ON";
    const currentServiceName = e.target.parentElement.parentElement.previousElementSibling.innerText;
    const popup = document.querySelector("#staticBackdrop");
    popup.querySelector(".modal-title").textContent = "Confirm Action";
    popup.querySelector(".modal-body").textContent = `Are you sure you want to switch \"${serviceSwitchToggleState}\" the ${currentServiceName}?`
    $("#staticBackdrop").modal("show");
});

document.querySelector("#switch-toggle-confirm").addEventListener("click", () => {
    const toggleSwitch = document.querySelector("#toggle-button");
    toggleSwitch.checked = !toggleSwitch.checked;
    $("#staticBackdrop").modal("hide");
});
*/

/* Code for multiple toggle buttons */
document.querySelectorAll("input.switch").forEach((ele) => {
    ele.addEventListener("change", (e) => {
        e.target.checked = !e.target.checked; //do not toggle
        const serviceSwitchToggleState = e.target.checked ? "OFF" : "ON";
        const currentServiceName = e.target.parentElement.parentElement.previousElementSibling.innerText;
        e.target.setAttribute("data-clicked", true);
        const popup = document.querySelector("#staticBackdrop");
        popup.querySelector(".modal-title").textContent = "Confirm Action";
        popup.querySelector(".modal-body").textContent = `Are you sure you want to switch \"${serviceSwitchToggleState}\" the ${currentServiceName}?`
        $("#staticBackdrop").modal("show");
    }); 
});

document.querySelector("#switch-toggle-confirm").addEventListener("click", () => {
    const toggleSwitch = document.querySelector("input.switch[data-clicked='true']");
    console.log(toggleSwitch);
    toggleSwitch.checked = !toggleSwitch.checked;
    toggleSwitch.removeAttribute("data-clicked");
    $("#staticBackdrop").modal("hide");
});