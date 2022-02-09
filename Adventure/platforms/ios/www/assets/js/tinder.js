// $(document).ready(function() {
var tinder = function(){
    var animating = false;
    var cardsCounter = 0;
    var numOfCards = 6;
    var decisionVal = 80;
    var pullDeltaX = 0;
    var deg = 0;
    var $card, $cardReject, $cardLike;
    var position;
    function pullChange() {
      setTimeout(() => {
        numOfCards = $('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card').length-1;
        
        
      }, 1500);
        animating = true;
        deg = pullDeltaX / 10;

        // if(cardsCounter<numOfCards){
          $card.css("transform", "translateX("+ pullDeltaX +"px) rotate("+ deg +"deg)");
          $card.css('z-index','4');
          if (pullDeltaX<0) {
            $($('ion-tab[aria-hidden="false"] page-detailfeed:last .below')[0]).css('z-index','2');
          }else{
            $($('ion-tab[aria-hidden="false"] page-detailfeed:last .below')[0]).css('z-index','0');
          }
          var opacity = pullDeltaX / 100;
          var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
          var likeOpacity = (opacity <= 0) ? 0 : opacity;
          $cardReject.css("opacity", rejectOpacity);
          $cardLike.css("opacity", likeOpacity);
        // }
  

      // }
     
    };
  
    function release() {
            if (pullDeltaX >= decisionVal) {
              if(cardsCounter<numOfCards){
                  position="right";
                  $card.addClass("to-right");
              }
              
            } else if (pullDeltaX <= -decisionVal) {
              if (cardsCounter > 0) {
              position="left";
              $card.addClass("to-left");
              }
            }
            
            if (Math.abs(pullDeltaX) >= decisionVal) {
              
              
              
              setTimeout(function() {
                if (position=="right" ) {
                  // console.log($('#inputHidden'));
                  console.log(cardsCounter);
                  console.log(numOfCards);
                  
                  if($('ion-tab[aria-hidden="false"] page-detailfeed:last  .action input')[0]['value'] != 0){
                    $('ion-tab[aria-hidden="false"] page-detailfeed:last #clickright').click();
                    $('ion-tab[aria-hidden="false"] page-detailfeed:last #clickBtn').click();
                    $card.addClass('below demo__card_hide').removeClass("inactive to-left to-right action");
                    $('ion-tab[aria-hidden="false"] page-detailfeed:last .action').removeClass('action');
                    $($('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card')[($('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card').length-1)-$('.below').length]).removeClass("demo__card_hide").addClass('action');
                    cardsCounter++;
                    console.log("right");
                    
                  }
                }else{
                  if (cardsCounter > 0) {
                  $($('ion-tab[aria-hidden="false"] page-detailfeed:last .below')[0]).removeClass("below");
                  $($('ion-tab[aria-hidden="false"] page-detailfeed:last .action')[0]).removeClass('action');
                  $card.addClass("inactive demo__card_hide");
                  $card.removeClass("inactive to-left to-right action");
                  $('ion-tab[aria-hidden="false"] page-detailfeed:last #clickBtn').click();
                  $('ion-tab[aria-hidden="false"] page-detailfeed:last #clickleft').click();
                  // $($(".below")[0]).addClass("action");
                  console.log("left");
                  $($('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card')[($('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card').length-1)-$('ion-tab[aria-hidden="false"] page-detailfeed:last .below').length]).removeClass("demo__card_hide").addClass('action');
                  cardsCounter--;
                  }
                }
                
              },100);
              
            }
        
            if (Math.abs(pullDeltaX) < decisionVal) {
              $card.addClass("reset");
            }
        
            setTimeout(function() {
                $card.attr("style", "").removeClass("reset")
                .find('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card__choice').attr("style", "");

                  $('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card').attr("style", "").removeClass("reset")
                  .find('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card__choice').attr("style", "");
    
        
                // if (cardsCounter==0) {
                //   $($(".demo__card")[0]).attr("style", "").removeClass("reset")
                //   .find(".demo__card__choice").attr("style", "");
                // }else{
                  // $($(".below")[0]).attr("style", "").removeClass("reset")
                  // .find(".demo__card__choice").attr("style", "");
                // }
              pullDeltaX = 0;
              animating = false;
            }, 300);
          };
        
          $(document).on("mousedown touchstart", 'ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card:not(.inactive)', function(e) {
            numOfCards = $('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card').length-1;
            if(numOfCards != 0){
              if (animating) return;
              $card = $(this);
              $cardReject = $('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card__choice.m--reject', $card);
              $cardLike = $('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card__choice.m--like', $card);
              var startX =  e.pageX || e.originalEvent.touches[0].pageX;
              $(document).on("mousemove touchmove", function(e) {
                $('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card_hide').removeClass('demo__card_hide');
                var x = e.pageX || e.originalEvent.touches[0].pageX;
                console.log(x - startX);
                if(x - startX>20 && x - startX< -20){
                  $('ion-tab[aria-hidden="false"] page-detailfeed:last .scroll-content').css('overflow-y','hidden');
                }else{
                  $('ion-tab[aria-hidden="false"] page-detailfeed:last .scroll-content').css('overflow-y','scroll');
                }
                
                if((x - startX) > 0 || cardsCounter != 0){
                  if ($('ion-tab[aria-hidden="false"] page-detailfeed:last  .action input')[0]['value'] != 0 || (x - startX) < 0) {
                    pullDeltaX = (x - startX);
                  }
                }
                if (!pullDeltaX) return;
                pullChange();
              });
              
              $(document).on("mouseup touchend", function() {
                setTimeout(() => {
                  $('ion-tab[aria-hidden="false"] page-detailfeed:last .demo__card').addClass('demo__card_hide');
                }, 500);
                $(document).off("mousemove touchmove mouseup touchend");
                if (!pullDeltaX) return; // prevents from rapid click events
                release();
              });


            }
            
          });
        // }
}
  
  
  // });
  