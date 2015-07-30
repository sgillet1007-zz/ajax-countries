// console.log('TEST');

$('#cntry-btn').on('click',function(){
	$.ajax({
		method : 'GET',
		url    : '/countries',
		success : function(data){
			for(i=0,i<data.length,i++){
				$('.cntry-container').append('<li>' + data[i].name +'</li>');
			}
		}
	})
})