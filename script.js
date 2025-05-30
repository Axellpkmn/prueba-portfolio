document.addEventListener('DOMContentLoaded', function () {
  const video1 = document.getElementById('background-video')
  video1.pause();
  const videoReversa = document.getElementById('background-video-reversa')
  videoReversa.pause();

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

    // Esperar 1 segundo antes de reiniciar el video
    setTimeout(function () {
      video1.currentTime = 0;
    }, 1000); // 1000 milisegundos = 1 segundo

  }, 1700); // Tiempo inicial antes de ejecutar el bloque principal
};

const goServices = () => {
  setTimeout(function () {
    let home = document.querySelector('.inventario-home');
    let services = document.querySelector('.inventario-servicios');
    let volver = document.querySelector('#volver-home');

    home.classList.add('hidden');
    services.classList.remove('hidden');
    volver.classList.remove('hidden');
    video1.classList.add('hidden');
    videoReversa.classList.remove('hidden');

    // Esperar 1 segundo antes de reiniciar el video
    setTimeout(function () {
      video1.currentTime = 0;
    }, 1000);

  }, 1600);
};


const goProyectos = () => {
  setTimeout(function () {
    let home = document.querySelector('.inventario-home');
    let proyectos = document.querySelector('.inventario-proyectos');
    let volver = document.querySelector('#volver-home');

    home.classList.add('hidden');
    proyectos.classList.remove('hidden');
    volver.classList.remove('hidden');
    video1.classList.add('hidden');
    videoReversa.classList.remove('hidden');

    // Esperar 1 segundo antes de reiniciar el video
    setTimeout(function () {
      video1.currentTime = 0;
    }, 1000);

  }, 1600);
};


const goContacto = () => {
  setTimeout(function () {
    let home = document.querySelector('.inventario-home');
    let contacto = document.querySelector('.inventario-contacto');
    let volver = document.querySelector('#volver-home');

    home.classList.add('hidden');
    contacto.classList.remove('hidden');
    volver.classList.remove('hidden');
    video1.classList.add('hidden');
    videoReversa.classList.remove('hidden');

    // Esperar 1 segundo antes de reiniciar el video
    setTimeout(function () {
      video1.currentTime = 0;
    }, 1000);

  }, 1600);
};

  
const goBackMenu = () => {
  setTimeout(function () {
    let home = document.querySelector('.inventario-home');
    let about = document.querySelector('.inventario-about');
    let services = document.querySelector('.inventario-servicios');
    let proyectos = document.querySelector('.inventario-proyectos');
    let contacto = document.querySelector('.inventario-contacto');
    let volver = document.querySelector('#volver-home');
    const video1 = document.getElementById('background-video');

    home.classList.remove('hidden');
    about.classList.add('hidden');
    services.classList.add('hidden');
    proyectos.classList.add('hidden');
    contacto.classList.add('hidden');
    volver.classList.add('hidden');
    video1.classList.remove('hidden');
    videoReversa.classList.add('hidden');

    // Esperar 1 segundo más antes de reiniciar el video
    setTimeout(function () {
      videoReversa.currentTime = 0;
    }, 1000); // 1000 milisegundos = 1 segundo

  }, 1600); // Ejecutar los cambios iniciales después de 1600 ms
};




  document.getElementById('volver-home').addEventListener('click', function () {
    reproducirVideo(videoReversa);
    goBackMenu();
    
  });

  // Eventos para el video
  document.getElementById('item1').addEventListener('click', () => {
    reproducirVideo(video1);
    goAbout();
  });

  document.getElementById('item2').addEventListener('click', () => {
    reproducirVideo(video1);
    goServices();
  });

  document.getElementById('item3').addEventListener('click', () => {
    reproducirVideo(video1);
    goProyectos();
  });

  document.getElementById('item4').addEventListener('click', () => {
    reproducirVideo(video1);
    goContacto();
  });
});


function esDispositivoMovil() {
  return /Android|iPhone|iPad|iPod|Windows Phone|BlackBerry/i.test(navigator.userAgent);
}

window.addEventListener('DOMContentLoaded', () => {
  if (esDispositivoMovil()) {
    // Oculta el contenido y muestra la pantalla de error
    document.getElementById('pantalla-error').style.display = 'flex';
  }
});

