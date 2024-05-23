// URL'den post ID'sini al
const urlParams = new URLSearchParams(window.location.search);
const todoId = urlParams.get('id');

// JSON verisini almak için API URL'si
const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

// JSON verisini API'den al
fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        showTodoDetails(data);
    })
    .catch((error) => {
        console.error('Veri alınırken bir hata oluştu: ', error);
    });


function showTodoDetails(data) {
    const todoDetails = document.getElementById('todo-details');
    const completedColor = data.completed ? 'green' : 'red'; 
    
    todoDetails.innerHTML = `
        <h2>${data.title}</h2>
        <p style="color: ${completedColor};">${data.completed}</p>
        `;
   
}