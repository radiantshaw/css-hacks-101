var Kiprosh = (function(callbacks) {
  function init(deck) {
    callbacks.forEach(function(callback) {
      callback(deck);
    });
  }

  var Kiprosh = function() {
    return {
      id: 'kiprosh',
      init: init
    };
  }

  return Kiprosh;
})([
  /**
   * Create the initial slide from the document title
   */
  function(deck) {
    var $introSquareImage = document.createElement('img');
    $introSquareImage.src = 'plugin/kiprosh/intro-square.svg';
    $introSquareImage.width = 500;

    var $logoImage = document.createElement('img');
    $logoImage.src = 'plugin/kiprosh/logo.png';
    $logoImage.width = 128;
    $logoImage.style.position = 'absolute';
    $logoImage.style.left = 'calc(50% - 64px)';
    $logoImage.style.top = '15%';

    var $mainHeading = document.createElement('h1');
    $mainHeading.innerText = document.title;
    $mainHeading.style.color = '#fff';
    $mainHeading.style.fontSize = '1.3em';
    $mainHeading.style.position = 'absolute';
    $mainHeading.style.top = '50%';
    $mainHeading.style.left = 'calc(50% - 210px)';
    $mainHeading.style.width = '420px';
    $mainHeading.style.maxHeight = '200px';
    $mainHeading.style.overflow = 'hidden';

    var $initialSlide = document.createElement('section');
    $initialSlide.appendChild($introSquareImage);
    $initialSlide.appendChild($logoImage);
    $initialSlide.appendChild($mainHeading);

    var $slides = deck.getSlidesElement();
    $slides.prepend($initialSlide);
  },
  /**
   * Add watermark to the rest of the slides
   */
  function(deck) {
    var slides = deck.getSlides();

    slides.forEach(function(slide, index) {
      if (index == 0) { return }

      var hasBackground =
        slide.hasAttribute('data-background-color') ||
        slide.hasAttribute('data-background-image') ||
        slide.hasAttribute('data-background-video') ||
        slide.hasAttribute('data-background-iframe');

      if (hasBackground) { return }

      slide.setAttribute('data-background-image', 'plugin/kiprosh/watermark.jpg');
      slide.setAttribute('data-background-size', '23%');
      slide.setAttribute('data-background-position', '-4% 96%');
    });
  }
]);
