$(document).ready(function(){
	
	
	$("#days button").click(function(){
		let y = $(this).index();
		console.log(y);
		$(this).removeClass("active").siblings().addClass("active");	
		$("#dramatable>div").eq(y-1).removeClass("active").siblings().addClass("active");
	});
	
	$("#dramabut").click(function(){
		$("#drama").css("display","block");
		$("#movie").css("display","none");
	});
	
	$("#moviebut").click(function(){
		$("#movie").css("display","block");
		$("#drama").css("display","none");
	});
	
	/*ī�װ�*/
	$("#category").click(function(){
		$("body").addClass("hidden");
		$("#navi").css("display","block");
	});
	
	$("#navi li,span").click(function(){
		$("body").removeClass("hidden");
		$("#navi").css("display","none");
	});
	
	$("#dramatable button,#movietable button").click(function(){
		$(this).toggleClass("red");
	});
	
	/*���ε�*/
	$("#upbut").click(function(){
		$("#upload").animate({height:"150px"});
		$("#gb").fadeIn();
	});
	
	$("#upload").click(function(){
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});
	
	$("#gb").click(function(){
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});
	
	/*$("#gu rt").click(function(){
		$(this).css("color","red");
		if( $(this).hasClass("add") ){ 
			$(".add").hide();
			$(".favorite").show();
			console.log("add");
			}
			
		if( $(this).hasClass("favorite") ){ 
			$(".favorite").hide();
			$(".add").show();
			}	 
	});*/
	$("#gu b").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
});//��ü��