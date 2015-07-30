// console.log('TEST');

$('#cntry-btn').on('submit',function(event){
	event.preventDefault();
	$.ajax({
		method : 'GET',
		url    : '/countries',
		success : function(data){
			data.forEach(function(country){
				// console.log(country.name);
				$('.cntry-list').append('<li>' + country.name + '</li>');
				// $('body').after('<li>' + country.name + '</li>');
			})
		}
	})
});