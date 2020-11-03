const check = document.querySelectorAll('.check');

for (let i = 0; i < check.length; i++ ) {
    check[i].addEventListener('click', () => {
        if (check[i].classList.contains('checked')) {
            check[i].classList.remove('checked');
            check[i].style.border = '2px solid #333';
        } else {
            check[i].classList.add('checked');
            check[i].style.border = '0px solid #333';
        }
    })
}

function clearInputs() {
    let input = document.querySelectorAll('input, textarea');
    for (i = 0; i <= input.length; i++) {
        input[i].value = '';
    }
}

const addModal = document.querySelector('.add-task-modal');
const overlay = document.querySelector('.overlay');


// Deb
const closeBtn = document.querySelectorAll('.btn_undo');
closeBtn.forEach((e) => {
   e.addEventListener('click', () => {
       closeModal();
   })
});

function closeModal() {
    overlay.style.display = 'none';
    addModal.style.display = 'none';
    clearInputs();
}

function taskModal() {
    overlay.addEventListener('click', () => {
        closeModal();
    });
    addModal.style.display = 'block';
    overlay.style.display = 'block';
 }

function checkForm() {
    let form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        if (form.checkValidity()) {
            createTask();
        }
    });
}

function createTask() {
    const task = document.querySelector('.task-list');
    const taskTitle = document.getElementById('task-name').value;
    const taskDate = document.getElementById('datetime').value;
    const option = document.getElementById('priority').value;
    const text = document.getElementById('tasktext').value;
    function checkOption () {
        const priority = document.querySelector('.priority');
        if (option === 'Высокий') {
            return priority.classList.add('high-lvl');
        }

    }

    task.innerHTML +=
        `
        <div class="task">
            <ul>
                <li>
                    <div class="check-wrapper">
                        <div class="check"></div>
                        <div class="priority"></div>
                    </div>
                    <div class="task-main">
                        <div>
                            <a href="#" class="task-title">${taskTitle}</a>
                        </div>
                        <div class="task-preload-text">
                            ${text}
                        </div>
                    </div>
                </li>
                <li class="task-date">
                    <div>
                        <div>${taskDate}</div>
                        <!--<div class="clocks">19:17</div>-->
                    </div>
                </li>
                <li class="task-priority-wrapper">
                    <div class="task-priority">${option}</div>
                </li>
                <li>
                    <div class="task-edit">
                        <a href="#" class="edit_btn">
                            <img src="assets/img/edit-icon.svg" alt="edit-icon">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
       `;
    checkOption();
    closeModal();
}

