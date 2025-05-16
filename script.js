document.addEventListener('DOMContentLoaded', function () {
  const video1 = document.getElementById('background-video')
  video1.pause();
  video1.currentTime = 0;
  const videoReversa = document.getElementById('background-video-reversa')
  videoReversa.pause();
  videoReversa.currentTime = 0;

  function reproducirVideo(video) {
    video.playbackRate = 3.0;
    video.play();
  }


  const goAbout = () => {
    setTimeout(function () {
      let home = document.querySelector('.inventario-home');
      let about = document.querySelector('.inventario-about');
      let volver = document.querySelector('#volver-home');
      home.classList.add('hidden');
      about.classList.remove('hidden');
      volver.classList.remove('hidden');
      video1.classList.add('hidden');
      videoReversa.classList.remove('hidden');
      video1.currentTime = 0;
    }, 1600);
  }
  
  const goBackMenu = () => {
    setTimeout(function () {
      let home = document.querySelector('.inventario-home');
      let about = document.querySelector('.inventario-about');
      let volver = document.querySelector('#volver-home');
      const video1 = document.getElementById('background-video')
      home.classList.remove('hidden');
      about.classList.add('hidden');
      volver.classList.add('hidden');
      video1.classList.remove('hidden');
      videoReversa.classList.add('hidden');
      videoReversa.currentTime = 0;
    }, 1600);
  }



  document.getElementById('volver-home').addEventListener('click', function () {
    reproducirVideo(videoReversa);
    goBackMenu();
    
  });

  // Eventos para el video
  document.getElementById('item1').addEventListener('click', () => {
    reproducirVideo(video1);
    goAbout();
  });
  // document.getElementById('item2').addEventListener('click', () => {
  //   reproducirVideo();
  //   goMenu();
  // });
  // document.getElementById('item3').addEventListener('click', () => {
  //   reproducirVideo();
  //   goMenu();
  // });
  // document.getElementById('item4').addEventListener('click', () => {
  //   reproducirVideo();
  //   goMenu();
  // });
  // Volver al home
  document.getElementById('volver-home').addEventListener('click', () => {
    reproducirVideoReversa();
  });
});







