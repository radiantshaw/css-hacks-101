var Kiprosh = (function() {
  // Create the initial slide
  function _createInitialSlide(deck) {
    var $initialTitle = document.createTextNode(document.title);
    var $initialHeading = document.createElement('h1');
    $initialHeading.appendChild($initialTitle);
    var $initialSlide = document.createElement('section');
    $initialSlide.appendChild($initialHeading);

    var $slides = deck.getSlidesElement();
    $slides.prepend($initialSlide);
  }

  function _addWaterMark(deck) {
    var slides = deck.getSlides();

    slides.forEach(function(slide, index) {
      if (index == 0) { return }

      var attributeValue = slide.getAttribute('data-state');
      if (attributeValue == null) {
        slide.setAttribute('data-state', 'kiprosh-slide');
      } else {
        slide.setAttribute('data-state', attributeValue + ' kiprosh-slide');
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
