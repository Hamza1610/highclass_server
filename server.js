const express = require('express');
const nodemailer = require('nodemailer');


const app = express();

app.listen(4000, () => {
	console.log('Server runnign on port 4000! ');
}
)

app.get('/', (req, res) => {
	console.log('GET request placed');
})
