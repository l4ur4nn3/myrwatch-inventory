// add event listeners to all checkboxes
for (let i = 1; i <= 50; i++) {
    const checkbox = document.getElementById(`item${i}`);
    checkbox.addEventListener('change', function () {
        // save the checkbox state in localstorage
        localStorage.setItem(`item${i}`, checkbox.checked);
    });
    
    // load the checkbox state from localstorage
    const isChecked = localStorage.getItem(`item${i}`) === 'true';
    checkbox.checked = isChecked;
}

