
function get(element) {
    return document.getElementById(element);
}

function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var name = get('edit-name-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    title.value = '';
    text.value = '';
    name.value = '';
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var name = get('edit-name-text');
    var content = get('display-content');
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);
    var newName = document.createElement('h3');
    var newNameText = document.createTextNode(name.value);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    newName.appendChild(newNameText);
    content.appendChild(newTitle);
    content.appendChild(newContent);
    content.appendChild(newName);

    closeModal();
}

window.addEventListener('load', function() {
    var postButton = get('post-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    postButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);    
});


