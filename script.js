document.getElementById('click').addEventListener('click',function() {
    alert('button is clicked')
})

let navBarLinks = document.getElementById('nav1');
let toggleButton = document.getElementById('togglebutton');



toggleButton.addEventListener('click', function(){
    navBarLinks.classList.toggle('active');
})