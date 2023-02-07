import  cidades  from '../cities_500k.json' assert {type: 'json'};

const options = {
    method: 'POST',
    headers: {
    authority: 'marketplace.ifood.com.br',
    accept: 'application/json, text/plain, */*',
    'accept-language': 'pt-BR,pt;q=1',
    app_version: '9.82.41',
    browser: 'Linux',
    'cache-control': 'no-cache, no-store',
    'content-type': 'application/json',
    country: 'BR',
    newrelic: 'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6Ijg5ODYyNiIsImFwIjoiMTY1MzIyNjI2OCIsImlkIjoiYmViMDJhNDc5MTgxZDBmMiIsInRyIjoiNjhjZTlhMGE0ODRlMmI3OTIzMjU1Y2YzN2E4YzI3ZjAiLCJ0aSI6MTY2NzU3OTQ1OTcyNn19',
    origin: 'https://www.ifood.com.br',
    platform: 'Desktop',
    referer: 'https://www.ifood.com.br/',
    'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    test_merchants: 'undefined',
    traceparent: '00-68ce9a0a484e2b7923255cf37a8c27f0-beb02a479181d0f2-01',
    tracestate: '898626@nr=0-1-898626-1653226268-beb02a479181d0f2----1667579459726',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'x-client-application-key': '41a266ee-51b7-4c37-9e9d-5cd331f280d5',
    'x-device-model': 'Linux Chrome',
    'x-ifood-device-id': '2f88789c-491c-41b5-b384-8ec11a027ba8',
    'x-ifood-session-id': 'c7f6f02a-5dd1-4683-ad15-e800a29a241d'
  },
  body: '{"supported-headers":["OPERATION_HEADER"],"supported-cards":["MERCHANT_LIST","CATALOG_ITEM_LIST","CATALOG_ITEM_LIST_V2","CATALOG_ITEM_LIST_V3","FEATURED_MERCHANT_LIST","CATALOG_ITEM_CAROUSEL","CATALOG_ITEM_CAROUSEL_V2","CATALOG_ITEM_CAROUSEL_V3","BIG_BANNER_CAROUSEL","IMAGE_BANNER","MERCHANT_LIST_WITH_ITEMS_CAROUSEL","SMALL_BANNER_CAROUSEL","NEXT_CONTENT","MERCHANT_CAROUSEL","MERCHANT_TILE_CAROUSEL","SIMPLE_MERCHANT_CAROUSEL","INFO_CARD","MERCHANT_LIST_V2","ROUND_IMAGE_CAROUSEL","BANNER_GRID","MEDIUM_IMAGE_BANNER","MEDIUM_BANNER_CAROUSEL","RELATED_SEARCH_CAROUSEL"],"supported-actions":["catalog-item","merchant","page","card-content","last-restaurants","webmiddleware","reorder","search","groceries","home-tab"],"feed-feature-name":"","faster-overrides":""}'
};

function delay(time) {
return new Promise(resolve => setTimeout(resolve, time));
}

export async function fetchCityMarkets() {

    let response;
    let json_object;
    const city_markets = [];
    
    

        for (let i = 0; i < cidades.length; i++) {

                response = await fetch(`https://marketplace.ifood.com.br/v2/home?latitude=${cidades[i].latitude}&longitude=${cidades[i].longitude}&channel=IFOOD&size=20&alias=HOME_MERCADO_BR`, options);
           
                json_object = await response.json();

                city_markets[i] = {};
                city_markets[i].city = cidades[i].cidade;
                city_markets[i].markets = [];

                console.log(`generating markets for city: ${city_markets[i].city}`)

                try{
                    for (let j = 0; j < json_object.sections[0].cards[1].data.contents.length; j++){
                    
                        city_markets[i].markets[j] = {};
                        city_markets[i].markets[j].market_name = json_object.sections[0].cards[1].data.contents[j].name;
                        city_markets[i].markets[j].market_id = json_object.sections[0].cards[1].data.contents[j].id;
                        
                    }
    
                    await delay(Math.random() * 10000);
                }catch(err){console.log(err)}
                

        
    }
    return city_markets;
}

        








/* percorrer toda a lista de cidades em um loop e retornar a latitude e longitude como parametros
para uma funcao que faz fetch dos supermercados em cada coordenada 
ex: https://marketplace.ifood.com.br/v2/home?latitude=-18.9127749&longitude=-48.2755227&channel=IFOOD&size=20&alias=HOME_MERCADO_BR
*/

/* procurar por tags "id" e "name" no json retornado pelo fetch de supermercados */