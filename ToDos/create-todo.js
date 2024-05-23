const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', function (event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    console.log(title);
    const body = document.getElementById('body').value;
    console.log(body);
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 1,
        })
    }).then(response => response.json())
        .then(data =>{
            console.log('Oluşturulan Görev', data);
            alert('Görev oluşturuldu');
           // postForm.requestFullscreen();
        })
        .catch(error =>{
            console.error("Error:", error);
        })
        console.log("Görev oluşturuldu")
} )