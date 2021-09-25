console.log('hello')


function save() {

    var text = document.getElementById('text').value
    var content = document.getElementById('content')
    localStorage.setItem('input', text)
    var newText = localStorage.getItem('input')
    content.innerHTML = newText;
}
