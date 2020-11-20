(function($) {
  $.fn.change = function(cb, e) {
    e = e || { subtree:true, childList:true, characterData:true };
    $(this).each(function() {
      function callback(changes) { cb.call(node, changes, this); }
      var node = this;
      (new MutationObserver(callback)).observe(node, e);
    });
  };
})(jQuery);

$(function() {

  // $('body').change(function(changes, observer) {
  //   console.log('element ' + this.id, changes, observer);
  // })
  

  $( "#mydiv" ).mousedown(function() {
    console.log( "Handler for .mousedown() called." );
  });

  // console.log( "aria-hidden" + $('.aui-flag').attr("aria-hidden") );
  // $('.js-quickfilter-button');
  
});

