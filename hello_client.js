var unirest = require('unirest');

// console.log('Status:', response.statusCode);
//   console.log('Headers:', response.headers);
//   console.log('Body', response.body);


unirest.get('http://localhost:3000/headers').end(function(response) {
  console.log('Headers:', response.headers);
});

unirest.get('http://localhost:3000/headers/:header_name').end(function(request,response) {
  console.log(request);
  // var headerName = request.params.header_name;
  // console.log(headerName, response.headers[headerName]);
});

unirest.get('http://localhost:3000/version').end(function(response) {
  console.log('version:', response.httpVersion);
});


// unirest.get('http://www.thinkful.com/').end(function(response) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers: ', response.headers);
//   console.log('Body:', response.body);
// });
