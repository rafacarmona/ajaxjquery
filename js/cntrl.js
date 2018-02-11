{
	let init = function(){
		let arrEstados = ['No inicializada ','Cargando', 'Cargado', 'Interactive', 'Completa'];
		//recoger variables.
		$("#btnDesc").click(function(){
			$.ajax(
				{type: "GET", url: $("#inputHtml").val(), success: function(result, textStatus, xhr){
	            	$("textarea#textDownload").val(result);
			   		//metemos las variables
			   		$("#estado").html("Estado: "+arrEstados[xhr.readyState]+" | "+xhr.readyState);
			   		$("#status").html("Status: "+xhr.status);
			   		$("#statusText").html("StatusText: "+textStatus);
	       		}
	    	});
		});
	}

	$(document).ready(function(){
		init();
	});
}