const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
e.preventDefault();
    const fd= new FormData(form);
    const obj= Object.fromEntries(fd);
    console.log(obj);
})

