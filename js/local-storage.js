(function() {
    var form = document.getElementsByName('myform')[0];
    if (localStorage['name'] !== undefined) {
        var displayArea = document.getElementById('theName');
        displayArea.textContent = localStorage['name'];
    }
    form.addEventListener('submit', function() {
        var nameField = document.getElementsByName('name')[0];
        localStorage['name'] = nameField.value;
    }, false);
})();