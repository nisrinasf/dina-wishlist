async function handleFormSubmit(e) {
  e.preventDefault();
  disable(judul);
  disable(harga);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(judul.value, harga.value);
    show(successMessage, judul.value, harga.value);
    hide(form);
  } catch (err) {
    show(errorMessage);
    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(judul);
    enable(button);
  }
}

function handleTextareaChange() {
  if (judul.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function hide(el) {
  el.style.display = 'none';
}

function show(el, judul, harga) {
  el.style.display = 'block'
  answerjudul.innerText = judul
  answerharga.innerText = harga
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

function submitForm(judul, harga) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    if(judul.length > 0 && harga.length > 0){
        resolve()
    }else{
        reject(new Error('Kolom Berlum Terisi'));
    }
  });
}

let form = document.getElementById('form');
let judul = document.getElementById('textarea-judul');
let harga = document.getElementById('textarea-harga');
let answerjudul = document.getElementById('answer-judul');
let answerharga = document.getElementById('answer-harga');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');
form.onsubmit = handleFormSubmit;
judul.oninput = handleTextareaChange;
