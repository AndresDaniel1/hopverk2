const data = {
    "videos": [
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
       {
           "id": 2,
           "title": "Stóra kanínan fer á kreik",
           "description": "",
           "created": 1604046400000,
           "duration": 62,
           "poster": "./videos/bunny.png",
           "video": "./videos/bunny.mp4",
           "related": [1, 3, 4]
       },
       {
           "id": 3,
           "title": "Prufu myndband",
           "description": "",
           "created": 1604144000000,
           "duration": 3600,
           "poster": "./videos/16-9.png",
           "video": "./videos/bunny.mp4",
           "related": []
       },
       {
           "id": 4,
           "title": "Manneskja að vefforrita",
           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, blandit quis turpis nec, ultricies placerat ante. Suspendisse viverra enim id tempus interdum. Maecenas cursus nec leo ac auctor. ",
           "created": 1603256400000,
           "duration": 3600,
           "poster": "./videos/typing.png",
           "video": "./videos/typing.mp4",
           "related": [5, 6]
       },
       {
           "id": 5,
           "title": "Ótrúlegt myndband sem þú verður að sjá til að trúa því hvað gerist. Vá.",
           "description": "Morbi bibendum molestie cursus. Suspendisse quis convallis lacus. In mollis tellus in tellus imperdiet pharetra. Praesent a dictum ipsum. Suspendisse potenti. Fusce commodo rutrum venenatis.",
           "created": 1602346400000,
           "duration": 220,
           "poster": "./videos/16-9.png",
           "video": "./videos/bunny.mp4",
           "related": [1]
       },
       {
           "id": 6,
           "title": "Fallegt náttúrúlífsmyndband",
           "description": "",
           "created": 1601046400000,
           "duration": 220,
           "poster": "./videos/drone.png",
           "video": "./videos/drone.mp4",
           "related": [2, 5]
           }
       ],
       "categories": [
           {
           "title": "Nýleg myndbönd",
           "videos": [2, 1, 3]
           },
           {
           "title": "Kennslumyndbönd",
           "videos": [1, 3, 4, 6, 5, 2]
           },
           {
           "title": "Skemmtimyndbönd",
           "videos": [2, 3, 4, 1, 6, 5]
           }
       ]
   };

/*
data = {
    videos: ...,
    categories: ...,
}

*/

const createVideoThumbnail = (video) => {
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
    const container = document.createElement('div')
    // <div>...</div>
    container.classList.add('thumbnail')
    // <div class="thumbnail">...</div>

    const imageEl = document.createElement('img', {
        src: video.poster,
        alt: video.description
    })
    // <img src="./videos/....png" alt="Maecenas cursus nec leo ac auctor."/>
    imageEl.classList.add('thumbnail__image')

    container.appendChild(imageEl)
    // <div class="thumbnail">
    //     <img src="./videos/....png" alt="Maecenas cursus nec leo ac auctor."/>
    // </div>
    return container
}

const list = [1, 2, 3, 4, 5]
const addOne = (num) => {
    return num + 1
}
list.map(addOne) // => [2, 3, 4, 5, 6]

export default function frontpage(/*data*/) {
    const list = document.querySelector('.list')
    const { videos } = data
    const videoElements = videos.map(createVideoThumbnail)

    videoElements.forEach(element => list.appendChild(element))
    console.log('frotngpate')
}