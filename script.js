document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('background-video');
  video.pause();
  video.currentTime = 0;

  function reproducirVideo() {
    video.playbackRate = 2.0;
    video.play();
  }

  document.getElementById('item1').addEventListener('click', function() {
      let home = document.querySelector('.inventario-home');
      let about = document.querySelector('.inventario-about');
      let volver = document.querySelector('#volver-home');
    home.classList.add('hidden');
    about.classList.remove('hidden');
    volver.classList.remove('hidden');
});

  // Eventos para el video
  document.getElementById('item1').addEventListener('click', reproducirVideo);
  document.getElementById('item2').addEventListener('click', reproducirVideo);
  document.getElementById('item3').addEventListener('click', reproducirVideo);
  document.getElementById('item4').addEventListener('click', reproducirVideo);
  // Volver al home
  document.getElementById('volver-home').addEventListener('click', reproducirVideo);
});



