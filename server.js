var express =require('express')

var app = express()

app.use(express.static('./public'))

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





app.listen(8080, function(){

	console.log('Running on port 8080')
})