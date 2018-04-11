var start = "hello45 ";
console.log(start);
//hhhddаss
var AvatarCrop,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

$(function() {
  return new AvatarCrop();
});

AvatarCrop = (function() {
  function AvatarCrop() {
    this.updatePreview = bind(this.updatePreview, this);
    this.update = bind(this.update, this);
    var height, width;
    width = parseInt($('#cropbox').width());
    height = parseInt($('#cropbox').height());
    $('#cropbox').Jcrop({
      aspectRatio: 9 / 12,
      setSelect: [0, 0, width, height],
      onSelect: this.update,
      onChange: this.update
    });
  }

  AvatarCrop.prototype.update = function(coords) {
    $('#employee_crop_x').val(coords.x);
    $('#employee_crop_y').val(coords.y);
    $('#employee_crop_w').val(coords.w);
    $('#employee_crop_h').val(coords.h);
    return this.updatePreview(coords);
  };

  AvatarCrop.prototype.updatePreview = function(coords) {
    var rx, ry;
    rx = 90 / coords.w;
    ry = 120 / coords.h;
    return $('#preview').css({
      width: Math.round(rx * $('#cropbox').width()) + 'px',
      height: Math.round(ry * $('#cropbox').height()) + 'px',
      marginLeft: '-' + Math.round(rx * coords.x) + 'px',
      marginTop: '-' + Math.round(ry * coords.y) + 'px'
    });
  };

  return AvatarCrop;

})();

//delete destroy withowt refresh page rails
jQuery(function($){
	$(".deleteAction").click( function(){
		var current_item_tr = $(this).parents('tr')[0];
		if(confirm("Точно удалить?")){
			$.ajax({
				beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
				url: document.location.pathname + '/' + $(current_item_tr).attr('data-item_id'),
				type: 'POST',
				data: { _method: 'DELETE'},
				success: function(){
					$(current_item_tr).fadeOut(200);
				}
			});
		};
	});
});

