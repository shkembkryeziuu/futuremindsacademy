const credentials = { username: 'admin', password: 'admin123' };
let games = [
    { name: 'CG FC 24', thumbnail: 'images/cgfc.avif', url: 'https://www.crazygames.com/game/cg-fc-24', likes: 150, views: 2000 },
    { name: 'Supermarket sort', thumbnail: 'images/supermarket.avif', url: 'https://www.crazygames.com/game/supermarket-sort-grocery-game', likes: 250, views: 5000 },
    { name: 'Gun Strike Runner', thumbnail: 'images/gun-strike-runner.avif', url: 'https://www.crazygames.com/game/gun-strike-runner', likes: 188, views: 4800 }
];
let isAddingNewGame = false;
let currentGameIndex = null;

const loginPage = document.querySelector("#login-page");
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const LogIn = document.querySelector("#LogIn");
const dashboardPage = document.querySelector("#dashboardPage");
const loginError = document.querySelector("#login-error");
const gameList = document.querySelector("#gameList");
const modalTitle = document.querySelector("#modal-title");
const editNameInput = document.querySelector("#edit-name");
const editThumbnailSelect = document.querySelector("#edit-thumbnail");
const editUrlInput = document.querySelector("#edit-url");
const editLikesInput = document.querySelector("#edit-likes");
const editViewsInput = document.querySelector("#edit-views");
const saveChanges = document.querySelector("#save-changes");
const confirmRemove = document.querySelector("#confirm-remove");
const editModal = document.querySelector("#edit-modal");
const removeModal = document.querySelector("#remove-modal");
const cancelRemove = document.querySelector("#cancel-remove");
const addNewGameBtn = document.querySelector("#add-new-game-btn");
const closeModalButton = document.querySelector("#close-edit-modal");

LogIn.addEventListener("click", () => {
    if (user.value === credentials.username && pass.value === credentials.password) {
        loginPage.style.display = "none";
        dashboardPage.style.display = "block";
    } else {
        loginError.innerHTML = "Login Error";
    }
});

function loadGames() {
    gameList.innerHTML = '';
    games.forEach((game, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${game.name}</td>
            <td><img src="${game.thumbnail}" width="50"></td>
            <td><a href="${game.url}" target="_blank">Play</a></td>
            <td>${game.likes}</td>
            <td>${game.views}</td>
            <td><button class="edit" data-index="${index}">Edit</button></td>
            <td><button class="remove" data-index="${index}">Remove</button></td>
        `;
        gameList.appendChild(row);
    });

    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            openEditModal(index);
        });
    });

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            openRemoveModal(index);
        });
    });
}

function openEditModal(index = null) {
    currentGameIndex = index;
    if (index === null) {
        isAddingNewGame = true;
        modalTitle.textContent = 'Add New Game';
        editNameInput.value = '';
        editThumbnailSelect.value = 'images/cgfc.avif';
        editUrlInput.value = '';
        editLikesInput.value = '';
        editViewsInput.value = '';
    } else {
        isAddingNewGame = false;
        modalTitle.textContent = 'Edit Game';
        const game = games[index];
        editNameInput.value = game.name;
        editThumbnailSelect.value = game.thumbnail;
        editUrlInput.value = game.url;
        editLikesInput.value = game.likes;
        editViewsInput.value = game.views;
    }
    editModal.style.display = 'block';
}

saveChanges.addEventListener('click', function (event) {
    event.preventDefault();
    const newGame = {
        name: editNameInput.value,
        thumbnail: editThumbnailSelect.value,
        url: editUrlInput.value,
        likes: parseInt(editLikesInput.value),
        views: parseInt(editViewsInput.value)
    };
    if (isAddingNewGame) {
        games.push(newGame);
    } else {
        games[currentGameIndex] = newGame;
    }
    loadGames();
    editModal.style.display = 'none';
});

function openRemoveModal(index) {
    currentGameIndex = index;
    removeModal.style.display = 'block';
}

confirmRemove.addEventListener("click", () => {
    if (currentGameIndex !== null) {
        games.splice(currentGameIndex, 1);
        loadGames();
    }
    removeModal.style.display = 'none';
});

cancelRemove.addEventListener("click", () => {
    removeModal.style.display = 'none';
});

addNewGameBtn.addEventListener("click", () => {
    openEditModal();
});

if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
        editModal.style.display = 'none';
    });
}

loadGames();