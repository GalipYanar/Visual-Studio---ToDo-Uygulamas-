// JSON verisini almak için API URL'si
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Tabloyu güncelleyen işlev
function updateTable(todos) {
    const tableBody = document.getElementById('todo-table');
    tableBody.innerHTML = '';

    todos.forEach((todo) => {
        const row = document.createElement('tr');
        const completedColor = todo.completed ? 'green' : 'red'; 
        row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td style="color: ${completedColor};">${todo.completed}</td> 
            <td><button class="btn btn-primary" data-todo-id="${todo.id}">Detay</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// JSON verisini API'den al
fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        updateTable(data);
        // Detay butonlarına tıklamayı dinle
        const detailButtons = document.querySelectorAll('.btn-primary');
        detailButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const todoId = button.getAttribute('data-todo-id');
                window.location.href = `detail-todo.html?id=${todoId}`;
            });
        });
    })
    .catch((error) => {
        console.error('Veri alınırken bir hata oluştu: ', error);
    });