var express =require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static('./public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(request, response){

 	response.sendFile('./public/html/index.html', {root: './'})

 	console.log('sent index.html')
})

app.get('/Denver', function(request, response){

	response.sendFile('./public/html/denver.html', {root: './'})

	console.log('sent denver.html')
})

app.get('/Kansas-City', function(request, response){

	response.sendFile('./public/html/kansas-city.html', {root: './'})

	console.log('sent kansas-city.html')
})

app.get('/Nashville', function(request, response){

	response.sendFile('./public/html/nashville.html', {root: './'})

	console.log('sent nashville.html')
})

app.get('/Atlanta', function(request, response){

	response.sendFile('./public/html/atlanta.html', {root: './'})

	console.log('sent atlanta.html')
})

app.get('/Charleston', function(request, response){

	response.sendFile('./public/html/charleston.html', {root: './'})

	console.log('sent charleston.html')
})

app.get('/End', function(request, response){

	response.sendFile('./public/html/end.html', {root: './'})

	console.log('sent end.html')
})

app.get('/Cargo-Validator', function(request, response){

	response.sendFile('./public/html/cargo-val.html', {root: './'})

	console.log('sent cargo-val.html')
})

app.post('/Cargo-Validator', function(request, response){

	body = request.body
		
	console.log(body)

	if(body.cost > 200 && body.weight > 200) {

		console.log('invalid cargo')

		response.send('Invalid Cargo: Over Budget AND Over the Weight Limit')
	}

	else if(body.cost > 200 && body.weight < 200) {

		console.log('over budget')

		response.send('Invalid Cargo: Over Budget')
	}

	else if(body.cost < 200 && body.weight > 200) {

		console.log('over weight')

		response.send('Invalid Cargo: Over the Weight Limit')
	}

	else {

		console.log('cargo is valid')
		
		response.send('Cargo is Valid.')
	}


})





app.listen(8080, function(){

	console.log("'Roadtrip_Itinerary' on port 8080")
})