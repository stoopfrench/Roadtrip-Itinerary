$(document).ready(function(){


	
	var tpCount = 0
	var tpPrice = 11.85
	var tpWeight = 3
	
	var lbCount = 0
	var lbPrice = 29.99
	var lbWeight = 5
	
	var vestCount = 0
	var vestPrice = 75
	var vestWeight = 6
	
	var waterCount = 0
	var waterPrice = 15.78
	var waterWeight = 27.9
	
	var totalPrice = 0
	var totalWeight = 0
	var fixedPrice
	var fixedWeight


// Toilet-Paper
 
	$('#toiletPaperMinus').on('click', function(){


		if(tpCount > 0) {
		
			tpCount--

		}

		console.log(totalPrice)

		if(totalPrice > 0) {

			totalPrice -= tpPrice


		}

		if(totalWeight > 0) {

			totalWeight -= tpWeight

		}

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.toilet-paper-display').text(tpCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#toiletPaperPlus').on('click', function(){

		tpCount++

		totalPrice += tpPrice

		totalWeight += tpWeight

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.toilet-paper-display').text(tpCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})

// Lunch-Box
 
	$('#lunchBoxMinus').on('click', function(){

		if(lbCount > 0) {
		
		lbCount--

		}

		if(totalPrice > 1) {

			totalPrice -= lbPrice


		}

		if(totalWeight > 1) {

			totalWeight -= lbWeight

		}

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.lunch-box-display').text(lbCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#lunchBoxPlus').on('click', function(){

		lbCount++

		totalPrice += lbPrice

		totalWeight += lbWeight

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.lunch-box-display').text(lbCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})


// Water
 
	$('#waterMinus').on('click', function(){

		if(waterCount > 0) {
		
		waterCount--

		}

		if(totalPrice > 1) {

			totalPrice -= waterPrice


		}

		if(totalWeight > 1) {

			totalWeight -= waterWeight

		}

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.water-display').text(waterCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#waterPlus').on('click', function(){

		waterCount++

		totalPrice += waterPrice

		totalWeight += waterWeight

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.water-display').text(waterCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})	

// Vest
 
	$('#vestMinus').on('click', function(){

		if(vestCount > 0) {
		
		vestCount--

		}

		if(totalPrice > 1) {

			totalPrice -= vestPrice

		}

		if(totalWeight > 1) {

			totalWeight -= vestWeight

		}

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.vest-display').text(vestCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	}) 

	$('#vestPlus').on('click', function(){

		vestCount++

		totalPrice += vestPrice

		totalWeight += vestWeight

		var fixedPrice = totalPrice.toFixed(2)
		var fixedWeight = totalWeight.toFixed(2)

		$('.vest-display').text(vestCount)
		$('#totalPriceDisplay').text(fixedPrice)
		$('#totalWeightDisplay').text(fixedWeight)

	})

	$('#cargoSubmitButton').on('click', function(){


		if(totalPrice <= 200 && totalWeight  <= 200) {

			$('#validateTitle').text('Congratulations')
			$('#validateMessage').text('Cargo Valid')
		}

		if (totalPrice > 200 && totalWeight > 200) {

			$('#validateTitle').text('Invalid Cargo')
			$('#validateMessage').text('Over weight and over budget.')
		}

		if(totalPrice > 200 && totalWeight < 200) {

			$('#validateTitle').text('Invalid Cargo')
			$('#validateMessage').text('Over budget.')
		}

		if(totalWeight < 200 && totalWeight > 200) {

			$('#validateMessage').text('Over the weight limit.')

		} 
	
	})	

})