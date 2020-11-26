(function () {
  'use strict';

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /* eslint-disable no-restricted-syntax */
  function createElement(elementType) {
    var element = document.createElement(elementType);

    for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      children[_key - 1] = arguments[_key];
    }

    if (Array.isArray(children)) {
      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
          } else if (child) element.appendChild(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return element;
  }

  var data = {
    videos: [{
      id: 1,
      title: 'Ótrúleg lego maskína',
      description: 'Maecenas cursus nec leo ac auctor.',
      created: 1604246400000,
      duration: 5,
      poster: './videos/small.png',
      video: './videos/small.mp4',
      related: [2, 3, 4]
    }, {
      id: 2,
      title: 'Stóra kanínan fer á kreik',
      description: '',
      created: 1604046400000,
      duration: 62,
      poster: './videos/bunny.png',
      video: './videos/bunny.mp4',
      related: [1, 3, 4]
    }, {
      id: 3,
      title: 'Prufu myndband',
      description: '',
      created: 1604144000000,
      duration: 3600,
      poster: './videos/16-9.png',
      video: './videos/bunny.mp4',
      related: []
    }, {
      id: 4,
      title: 'Manneskja að vefforrita',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, blandit quis turpis nec, ultricies placerat ante. Suspendisse viverra enim id tempus interdum. Maecenas cursus nec leo ac auctor. ',
      created: 1603256400000,
      duration: 3600,
      poster: './videos/typing.png',
      video: './videos/typing.mp4',
      related: [5, 6]
    }, {
      id: 5,
      title: 'Ótrúlegt myndband sem þú verður að sjá til að trúa því hvað gerist. Vá.',
      description: 'Morbi bibendum molestie cursus. Suspendisse quis convallis lacus. In mollis tellus in tellus imperdiet pharetra. Praesent a dictum ipsum. Suspendisse potenti. Fusce commodo rutrum venenatis.',
      created: 1602346400000,
      duration: 220,
      poster: './videos/16-9.png',
      video: './videos/bunny.mp4',
      related: [1]
    }, {
      id: 6,
      title: 'Fallegt náttúrúlífsmyndband',
      description: '',
      created: 1601046400000,
      duration: 220,
      poster: './videos/drone.png',
      video: './videos/drone.mp4',
      related: [2, 5]
    }],
    categories: [{
      title: 'Nýleg myndbönd',
      videos: [2, 1, 3]
    }, {
      title: 'Kennslumyndbönd',
      videos: [1, 3, 4, 6, 5, 2]
    }, {
      title: 'Skemmtimyndbönd',
      videos: [2, 3, 4, 1, 6, 5]
    }]
  };
  /*
  data = {
      videos: ...,
      categories: ...,
  }

  */

  var getTimeDiff = function getTimeDiff(date) {
    var rightNow = new Date().getTime();
    var diff = rightNow - date; // diff / milliseconds / seconds / minutes / days

    return diff / 1000 / 60 / 60 / 24;
  };

  var createThumbnail = function createThumbnail(video) {
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
    var thumbnailContainer = document.createElement('div');
    thumbnailContainer.classList.add('thumbnail');
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('thumbnail__image_container');
    var image = document.createElement('img');
    image.src = video.poster;
    image.alt = '';
    imageContainer.appendChild(image);
    var textContainer = document.createElement('div');
    var title = createElement('p', video.title);
    var date = createElement('p', "Fyrir ".concat(getTimeDiff(video.created), " d\xF6gum"));
    textContainer.appendChild(title);
    textContainer.appendChild(date);
    thumbnailContainer.appendChild(imageContainer);
    thumbnailContainer.appendChild(textContainer);
    return thumbnailContainer;
  };

  function frontpage()
  /* data */
  {
    var listContainer = document.querySelector('#thumbnail_list');
    var videos = data.videos;
    var videoElements = videos.map(createThumbnail);
    console.log(videoElements);
    videoElements.forEach(function (element) {
      return listContainer.appendChild(element);
    });
    console.log('frotngpate');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var isFrontpage = document.querySelector('body').classList.contains('frontpage');
    frontpage(); // const json = await fetch('videos.json'); // sjá v9 sýnilausn
    // if (isFrontpage) {
    // } else {
    //     // ef við förum á video.html?video=ID þá verður id breyt að neðan með ID gildi
    //   const querystring = new URLSearchParams(window.location.search);
    //   const id = querystring.get('video');
    //   singleVideo(id, json);
    // }
  });

}());
//# sourceMappingURL=bundle.js.map
