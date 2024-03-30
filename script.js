function setup() {
  const content = document.getElementById("content");
  const kotak = document.getElementById("kotak");
  const text_deskripsi = document.getElementById("text-deskripsi"); 
  const image = document.getElementById("image");
  const title = document.getElementById("title");
  const button = document.getElementById("button");
  const button_iya = document.getElementById("button-iya");
  const button_tidak = document.getElementById("button-tidak");

  button_iya.addEventListener('click', () => {
    changeContent("Anda Berbohong!", "Anda adalah seorang Teknisi", "#E12E2E", "ASSET/teknisi.png");
  });

  button_tidak.addEventListener('click', () => {
    changeContent("Anda Benar!", "Anda adalah seorang Mahasiswa", "#6FD240", "ASSET/mahasiswa.png");
  });

  function changeContent(titleText, deskripsiText, backgroundColor, imagePath) {
    title.innerHTML = titleText;
    text_deskripsi.innerHTML = deskripsiText;
    kotak.style.backgroundColor = backgroundColor;
    image.src = imagePath;
    button.style.display = 'none';
  }
}
window.onload = setup;
