$(document).ready(function(){
	var countriesLoaded = false;
	$('#cntry-btn').on('submit',function(event){
		event.preventDefault();
		$.ajax({
			method : 'GET',
			url    : '/countries',
			success : function(data){
				if (!countriesLoaded){
					data.forEach(function(country){
					$('.cntry-list').append('<li class="'+ country.name.replace(/ /g,'') +'">' + country.name + '</li>');
					countriesLoaded = 1;
					})
				}	
				else {
					console.log('countriesLoaded:', countriesLoaded);
				}
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
					if ($('#str').val().toLowerCase() === country.name.toLowerCase()){
						$('.cntry-list').append('<li>' + country.name + '</li>');
					}
				})
			},
		})
	});
})