import * as fs from 'fs/promises';
import { fetchCityMarkets } from './city_markets_scraper.js'

export async function jsonGeneration(){

    async function jsonConversion(){
        const city_markets = await fetchCityMarkets();
        const data = JSON.stringify(city_markets, null, 2);
        return data;
    }
     async function jsonFileCreation(){
        const data = await jsonConversion();
        const path = "src/scraper/scraper-ifoodmercado/city_markets.json";
        console.log("Generating json data");
        fs.writeFile(path, data)
        .then(console.log("File created successfully"));
        
     }
    
     await jsonFileCreation();
 
}

