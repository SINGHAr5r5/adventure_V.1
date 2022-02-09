
var masonryJs = function(){

  var _createClass = function () { 
    function defineProperties(target, props) { 
    
        
      for (var i = 0; i < props.length; i++) { 
        var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; 
        if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); 
      } 
    } 
       return function (Constructor, protoProps, staticProps) { 
            if (protoProps) defineProperties(Constructor.prototype, protoProps); 
            if (staticProps) defineProperties(Constructor, staticProps); 
            return Constructor; }; 
  }();         
    

  function _toConsumableArray(arr) { 
    if (Array.isArray(arr)) { 
      console.log(arr);
      
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { 
          arr2[i] = arr[i]; } return arr2; 
      } else { 
        return Array.from(arr); 
      } 
  }
  
  function _classCallCheck(instance, Constructor) { 
        if (!(instance instanceof Constructor)) { 
          throw new TypeError("Cannot call a class as a function"); 
        } 
  }
  
  (function () {
    // Classname reference
    var CLASSES = {
      MASONRY: 'masonry',
      PANEL: 'masonry-panel',
      PAD: 'masonry-pad'
    };
  
    var Masonry = function () {
      function Masonry(el) {
        _classCallCheck(this, Masonry);
        console.log( $('.masonry').height() );
        // setTimeout(() => {
        //   $('.masonry').css('height',$('.masonry').height()/2+100)
        // }, 10);
        
        this.container = el;
        this.panels = el.querySelectorAll('.' + CLASSES.PANEL);
        this.state = {
          heights: []
        };
        this.layout();
      }
      /**
        * Reset the layout by removing padding elements, resetting heights
        * reference and removing the container inline style
      */
  
  
      _createClass(Masonry, [{
        key: '__reset',
        value: function __reset() {
          var container = this.container;
          
          this.state.heights = [];
          var fillers = container.querySelectorAll('.' + CLASSES.PAD);
          if (fillers.length) {
            for (var f = 0; f < fillers.length; f++) {
              fillers[f].parentNode.removeChild(fillers[f]);
            }
          }
          container.removeAttribute('style');
        }
        /**
          * Iterate through panels and work out the height of the layout
        */
  
      }, {
        key: '__populateHeights',
        value: function __populateHeights() {
          var panels = this.panels,
              state = this.state;
          var heights = state.heights;
  
          for (var p = 0; p < panels.length; p++) {
            var panel = panels[p];
  
            var _getComputedStyle = getComputedStyle(panel),
                cssOrder = _getComputedStyle.order,
                msFlexOrder = _getComputedStyle.msFlexOrder,
                height = _getComputedStyle.height;
  
            var order = cssOrder || msFlexOrder;
            if (!heights[order - 1]) heights[order - 1] = 0;
            heights[order - 1] += parseInt(height, 10);
          }
        }
        /**
          * Set the layout height based on referencing the content cumulative height
          * This probably doesn't need its own function but felt right to be nice
          * and neat
        */
  
      }, {
        key: '__setLayout',
        value: function __setLayout() {
          
          var container = this.container,
              state = this.state;
          var heights = state.heights;
  
          this.state.maxHeight = Math.max.apply(Math, _toConsumableArray(heights));
          container.style.height = this.state.maxHeight + 'px';
        }
        // /**
        //   * JavaScript method for setting order of each panel based on panels.length and desired number of columns
        // */
        // __setOrders() {
        //   const {
        //     panels,
        //   } = this
        //   const cols = 3 // There needs to be an internal reference here that checks how many cols for viewport size
        //   panels.forEach((panel, idx) => {
        //     panel.style.order = ((idx + 1) % cols === 0) ? cols : (idx + 1) % cols
        //   })
        // }
        /**
          * Pad out layout "columns" with padding elements that make heights equal
        */
  
      }, {
        key: '__pad',
        value: function __pad() {
          console.log(5555);
          
          var container = this.container;
          var _state = this.state,
              heights = _state.heights,
              maxHeight = _state.maxHeight;
          // console.log($('ion-tab[aria-hidden="false"] .masonry')[0]);
          // console.log($('ion-tab[tabicon="menu2"]'));
          

          heights.map(function (height, idx) {
            if (height < maxHeight && height > 0) {
              var pad = document.createElement('div');
  
              
              pad.className = CLASSES.PAD;
              pad.style.height = maxHeight - height + 'px';
              pad.style.order = idx + 1;
              pad.style.msFlexOrder = idx + 1;
              // container.appendChild(pad);
            }
          });
        }
        /**
          * Resets and lays out elements
        */
  
      }, {
        key: 'layout',
        value: function layout() {
          this.__reset();
          // this.__setOrders()
          this.__populateHeights();
          this.__setLayout();
          this.__pad();
        }
      }]);
  
      return Masonry;
    }();
  
    window.myMasonry = new Masonry(document.querySelector('.' + CLASSES.MASONRY));
    /**
      * To make responsive, onResize layout again
      * NOTE:: For better performance, please debounce this!
    */
    window.addEventListener('resize', function () {
      return myMasonry.layout();
    });
  })();
}


