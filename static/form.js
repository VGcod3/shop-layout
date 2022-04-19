function removeParent(e) {
  let parent = e.target.parentNode;

  if (parent.classList.contains('form-row')) {
    parent.remove()
  } else if (parent.parentNode.classList.contains('form-row')) {
    parent.parentNode.remove()
  }

  console.log('remove');
}

$('.btn-add').on('click', () => {
  const formRow = document.createElement('div');
  formRow.className = 'form-row';
  formRow.innerHTML = `
    <input type="text" class="form-control" placeholder="Название">
    <input type="file" class="form-control file-upload-button" name="" id="">
    <button type="button" class="btn btn-light btn-remove" >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle"
        viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </button>
    `
  $(".form-row-container").append(formRow)
  console.log(formRow);
})

$(document).on('click', '.btn-remove', removeParent)