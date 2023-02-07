
async function fullExtraction() {
    
    const { jsonGeneration: jsonGenerationMarkets } = await import('./scraper-ifoodmercado/city_markets_scraper/city_markets_json_generation.js');
    await jsonGenerationMarkets();

    const { jsonGeneration: jsonGenerationCategories } = await import('./scraper-ifoodmercado/city_markets_categories/markets_categories_json_generation.js');
    await jsonGenerationCategories();

    const { jsonGeneration: jsonGenerationProducts } = await import('./scraper-ifoodmercado/city_markets_items/markets_items_json_generation.js');
    await jsonGenerationProducts();
    
    console.log("scraping ended");
}

fullExtraction();