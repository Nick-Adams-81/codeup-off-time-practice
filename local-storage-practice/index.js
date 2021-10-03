


var text = document.getElementById('text').value
var content = document.getElementById('content')
localStorage.setItem('input', text)
var data = localStorage.getItem('input')
content.innerHTML = data

