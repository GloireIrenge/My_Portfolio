const modal = document.getElementById('myModal');

const btn = document.getElementById('myModal');

const span = document.getElementById('close')[0];

btn.onclick = () => {
  modal.style.display = 'block';
};

span.onclick = () => {
  modal.style.display = 'none';
};

window.onload = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
