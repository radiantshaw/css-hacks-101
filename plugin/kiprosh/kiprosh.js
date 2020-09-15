var Kiprosh = (function() {
  // Create the initial slide
  function _createInitialSlide(deck) {
    var $initialTitle = document.createTextNode(document.title);
    var $initialHeading = document.createElement('h1');
    $initialHeading.classList.add('kiprosh-intro-text');
    $initialHeading.appendChild($initialTitle);
    var $initialSlide = document.createElement('section');
    $initialSlide.appendChild($initialHeading);

    var $slides = deck.getSlidesElement();
    $slides.prepend($initialSlide);
  }

  function _addWaterMark(deck) {
    var slides = deck.getSlides();

    slides.forEach(function(slide, index) {
      var state = 'kiprosh-slide';
      if (index == 0) {
        state = 'kiprosh-initial-slide';
      }

      var attributeValue = slide.getAttribute('data-state');
      if (attributeValue == null) {
        slide.setAttribute('data-state', state);
      } else {
        slide.setAttribute('data-state', attributeValue + ' ' + state);
      }
    });
  }

  function init(deck) {
    _createInitialSlide(deck);
    _addWaterMark(deck);
  }

  return function() {
    return {
      id: 'kiprosh',
      init: init
    };
  };
})();
