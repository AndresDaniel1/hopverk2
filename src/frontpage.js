import createElement from "./helpers";


const data = await fetch('videos.json'); 



/*
data = {
    videos: ...,
    categories: ...,
}

*/

const getTimeDiff = (date) => {
  const rightNow = (new Date()).getTime()
  const diff = rightNow - date

  // diff / milliseconds / seconds / minutes / days
  return diff / 1000 / 60 / 60 / 24
}

const createThumbnail = (video) => {
  /*
        {
           "id": 1,
           "title": "Ótrúleg lego maskína",
           "description": "Maecenas cursus nec leo ac auctor.",
           "created": 1604246400000,
           "duration": 5,
           "poster": "./videos/small.png",
           "video": "./videos/small.mp4",
           "related": [2, 3, 4]
       },
    */
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.classList.add('thumbnail');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('thumbnail__image_container');
  const image = document.createElement('img');
  image.src = video.poster;
  image.alt = '';
  imageContainer.appendChild(image);

  const textContainer = document.createElement('div');
  const title = createElement('p', video.title);
  const date = createElement('p', `Fyrir ${getTimeDiff(video.created)} dögum`);
  textContainer.appendChild(title);
  textContainer.appendChild(date);

  thumbnailContainer.appendChild(imageContainer);
  thumbnailContainer.appendChild(textContainer);

  return thumbnailContainer
};

const list = [1, 2, 3, 4, 5];
const addOne = (num) => num + 1;
list.map(addOne); // => [2, 3, 4, 5, 6]

export default function frontpage(/* data */) {
  const listContainer = document.querySelector('#thumbnail_list');

  const { videos } = data;
  const videoElements = videos.map(createThumbnail);
  console.log(videoElements)
  videoElements.forEach((element) => listContainer.appendChild(element));
  console.log('frotngpate');
}
