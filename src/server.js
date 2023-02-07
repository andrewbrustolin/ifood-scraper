import express from 'express';
import products_list from './scraper/scraper-ifoodmercado/city_markets_items.json' assert {type: 'json'};

const app = express();

const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(products_list);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);