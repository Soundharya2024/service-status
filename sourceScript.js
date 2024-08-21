const allToggleSwitches = document.querySelectorAll("toggle-button-container input");
allToggleSwitches.forEach((toggleSwitch) => {
    toggleSwitch.addEventListener("click", (e) => {
        e.preventDefault();
    });;
});

const myModalEl = document.getElementById('staticBackdrop');
myModalEl.addEventListener('shown.bs.modal', event => {
    myModalEl.on('click','#switch-toggle-confirm', function (e) {
        const toggleSwitch = event.relatedTarget;
        if(toggleSwitch.checked)
            toggleSwitch.checked = false;
        else
            toggleSwitch.checked = true;
    });
});