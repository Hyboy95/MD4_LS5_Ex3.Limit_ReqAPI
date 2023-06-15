import express from 'express';
import path from "path"; 
import bodyParser from 'body-parser';
import { router } from './src/routers/web.router';

const PORT = 3000;
const app = express();
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(express.static('src/public'));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`) 
})