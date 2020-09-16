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
  function(deck) {
    var $initialTitle = document.createTextNode(document.title);
    var $initialHeading = document.createElement('h1');
    $initialHeading.classList.add('kiprosh-intro-text');
    $initialHeading.appendChild($initialTitle);
    var $initialSlide = document.createElement('section');
    $initialSlide.appendChild($initialHeading);

    var $slides = deck.getSlidesElement();
    $slides.prepend($initialSlide);
  },
  function(deck) {
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
]);
