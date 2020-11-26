import frontpageVideos from './frontpage';
// import singleVideo from './single';

document.addEventListener('DOMContentLoaded', () => {
  const isFrontpage = document.querySelector('body').classList.contains('frontpage');
  frontpageVideos({});
  // const json = await fetch('videos.json'); // sjá v9 sýnilausn
  // if (isFrontpage) {
  // } else {
  //     // ef við förum á video.html?video=ID þá verður id breyt að neðan með ID gildi
  //   const querystring = new URLSearchParams(window.location.search);
  //   const id = querystring.get('video');
  //   singleVideo(id, json);
  // }
});