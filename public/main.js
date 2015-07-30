$(document).ready(function(){
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
	
	$('#search').on('click',function(event){
		event.preventDefault();
		console.log($('#str').val());
		$.ajax({
			method   : 'POST',
			url      : '/search',
			success  : function(data){
				data.forEach(function(country){
					if ($('#str').val().toLowerCase() === country.name.toLowerCase()) {
						$('.cntry-list').append('<li>' + country.name + '</li>');
					}
				})
			}
		})
	});
})