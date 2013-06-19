
	 $.ajaxSetup ({  
        cache: false  
    });  
    var ajax_load = "<img src='../img/loading.gif' alt='loading...' />";  
      
	//  load() functions  
   
  /* var loadUrl = "feat1.html";
    $("#rond").click(function(){  
        $("#content").html(ajax_load).load(loadUrl);  
    });  
	var loadf2 = "feat2.html";  
    $("#rond1").click(function(){  
       $("#content").html(ajax_load).load(loadf2);  
    });*/  
	
	/*   moiton in mtion */ 

	
var $rd = $('#rond');
var $rd1 = $('#rond1');	
var $box = $('#mimi');
var $boxx = $('#momo');	
	 function moveBox(e) {
	var x = e.pageX,
		y = e.pageY;

	TweenMax.to($box, 1.4, {
		css: { left: x, top: y, scale: Math.random() * 0.1 + 1 },
		ease:Elastic.easeOut
	});
}

$rd.on('click', moveBox);

/*       */

 function moveBoxx(e) {
	var x = e.pageX,
		y = e.pageY;

	TweenMax.to($boxx, 1.4, {
		css: { left: x, top: y, scale: Math.random() * 0.1 + 1 },
		ease:Elastic.easeOut
	});
}

$rd1.on('click', moveBoxx);