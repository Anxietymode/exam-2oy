document.getElementById('addBtn').addEventListener('click', function() {

    const name = document.getElementById('newName').value;
    const email = document.getElementById('newEmail').value;
    const phone = document.getElementById('newPhone').value;

    if (name === "" || email === "" || phone === "") {
        alert("Заполните все поля!");
        return;
    }


    const tableBody = document.getElementById('studentsBody');


    const newRow = document.createElement('tr');

  
    newRow.innerHTML = `
        <td class="student-info">
            <img src="https://i.pravatar.cc/150?u=${name}" alt="">
            <span>${name}</span>
        </td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${Math.floor(Math.random() * 1000000000000000)}</td> <!-- Случайный номер -->
        <td>${new Date().toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'})}</td>
        <td class="row-actions">
            <i class="fa-solid fa-pen edit"></i>
            <i class="fa-regular fa-trash-can delete" onclick="this.parentElement.parentElement.remove()"></i>
        </td>
    `;

  
    tableBody.appendChild(newRow);

 
    document.getElementById('newName').value = "";
    document.getElementById('newEmail').value = "";
    document.getElementById('newPhone').value = "";
});