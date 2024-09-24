const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/hpRouter');  // Root routes
const hpRoutes = require('./routes/hpRouter');  // HP routes
const app = express();



app.set('view engine', 'ejs');

app.use(body_parser.urlencoded({extended:true}));
app.use(express.json());
app.use('/hp', hpRoutes); 

const PORT = 3000;
//Run 
app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}/`);
})
