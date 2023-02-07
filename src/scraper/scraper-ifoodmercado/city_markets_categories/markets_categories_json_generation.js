import * as fs from 'fs/promises';
import { fetchMarketsCategories } from './city_markets_categories_scraper.js'

export async function jsonGeneration(){

    async function jsonConversion(){
        const city_markets = await fetchMarketsCategories();
        const data = JSON.stringify(city_markets, null, 2);
        return data;
    }
     async function jsonFileCreation(){
        const data = await jsonConversion();
        const path = "src/scraper/scraper-ifoodmercado/city_markets_categories.json";
        console.log("Generating json data");
        fs.writeFile(path, data)
        .then(() => {
            console.log("File created successfully");
            deleteFile("src/scraper/scraper-ifoodmercado/city_markets.json");
        });
        
     }

     async function deleteFile(filePath) {
        try {
          await fs.unlink(filePath);
          console.log(`Successfully deleted file: ${filePath}`);
        } catch (error) {
          console.error(`Error deleting file: ${error}`);
        }
      }
    
     await jsonFileCreation();
 
}

