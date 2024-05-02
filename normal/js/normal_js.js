$(function(){
	$('.icon_share').click(function(){
		$('#share.modal_bg').addClass('open');
	});
	$('.close_modal, .modal_bg').click(function(){
		$('#share.modal_bg, #video.modal_bg').removeClass('open');
	})


	$('.director_video').click(function(){
		$('#video.modal_bg').addClass('open');
	})


	$('.william_article img').mouseover( function () {
        $(this).attr('src', $(this).attr('src').replace(/\.png/, '_hover.png') );
    });
    $('.william_article img').mouseout( function () {
        $(this).attr('src', $(this).attr('src').replace('william_article_hover.png', 'william_article.png') );
    });
})