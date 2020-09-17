/*Start - MENU DE BOTÕES*/
$(".btn01").click(function(){
	
	$('.btn01').addClass('div09-menu-btn-ativo');
	$('.btn02').removeClass('div09-menu-btn-ativo');
	$('.btn03').removeClass('div09-menu-btn-ativo');
	
	$('.div09-menu-pagina01').addClass('div09-menu-ativo');
	$('.div09-menu-pagina02').removeClass('div09-menu-ativo');
	$('.div09-menu-pagina03').removeClass('div09-menu-ativo');
	
});
$(".btn02").click(function(){
	
	$('.btn01').removeClass('div09-menu-btn-ativo');
	$('.btn02').addClass('div09-menu-btn-ativo');
	$('.btn03').removeClass('div09-menu-btn-ativo');
	
	$('.div09-menu-pagina01').removeClass('div09-menu-ativo');
	$('.div09-menu-pagina02').addClass('div09-menu-ativo');
	$('.div09-menu-pagina03').removeClass('div09-menu-ativo');
	
});
$(".btn03").click(function(){
	
	$('.btn01').removeClass('div09-menu-btn-ativo');
	$('.btn02').removeClass('div09-menu-btn-ativo');
	$('.btn03').addClass('div09-menu-btn-ativo');
	
	$('.div09-menu-pagina01').removeClass('div09-menu-ativo');
	$('.div09-menu-pagina02').removeClass('div09-menu-ativo');
	$('.div09-menu-pagina03').addClass('div09-menu-ativo');
	
});
/*End - MENU DE BOTÕES*/

/*Start - MENU MOVEL*/
$(".menu-btn01").click(function(){
	
    $('html, body').animate({
		scrollTop:$(".footer").offset().top
	},1500);
	
});
$(".menu-btn02").click(function(){
	
    $('html, body').animate({
		scrollTop:$(".fundo08").offset().top
	},1500);
	
});
/*End - MENU MOVEL*/