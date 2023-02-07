import city_markets from '../city_markets.json' assert {type: 'json'};


const options = {
    method: 'GET',
    headers: {
      
      authority: 'wsloja.ifood.com.br',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'pt-BR,pt;q=1',
      access_key: '69f181d5-0046-4221-b7b2-deef62bd60d5',
      app_version: '9.82.41',
      browser: 'Linux',
      'cache-control': 'no-cache, no-store',
      newrelic: 'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6Ijg5ODYyNiIsImFwIjoiMTY1MzIyNjI2OCIsImlkIjoiODI0ZDEwNTBhZDRjMGViMCIsInRyIjoiNWU1MzBlOTI0MzVlMTIwM2Q2YmJhNTk3OGY5NmY5NzAiLCJ0aSI6MTY2Nzc5OTEzMDI2OX19',
      origin: 'https://www.ifood.com.br',
      platform: 'Desktop',
      referer: 'https://www.ifood.com.br/',
      'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      secret_key: '9ef4fb4f-7a1d-4e0d-a9b1-9b82873297d8',
      traceparent: '00-5e530e92435e1203d6bba5978f96f970-824d1050ad4c0eb0-01',
      tracestate: '898626@nr=0-1-898626-1653226268-824d1050ad4c0eb0----1667799130269',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      'x-client-application-key': '41a266ee-51b7-4c37-9e9d-5cd331f280d5',
      'x-device-model': 'Linux Chrome',
      'x-ifood-device-id': '2f88789c-491c-41b5-b384-8ec11a027ba8',
      'x-ifood-session-id': 'ec41560c-bac9-4fe5-a69e-55f714fc0d5b'
    }
  };
  

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
    }

export async function fetchMarketsCategories() {

    let response;
    let json_object;

    // for (let i = 0; i < city_markets.length; i++)
    for (let i = 0; i < city_markets.length; i++){

        console.log(`generating market categories for city: ${city_markets[i].city}`);

        for (let j = 0; j < city_markets[i].markets.length; j++){

            city_markets[i].markets[j].categories = [];

            response = await fetch(`https://wsloja.ifood.com.br/ifood-ws-v3/v1/merchants/${city_markets[i].markets[j].market_id}/taxonomies`, options);

            json_object = await response.json();

            
            // console.log(json_object)

            try {

                for (let k = 0; k < json_object.data.categories.length; k++){

                    city_markets[i].markets[j].categories[k] = {};
                    city_markets[i].markets[j].categories[k].id = json_object.data.categories[k].id;
                    city_markets[i].markets[j].categories[k].name = json_object.data.categories[k].name;
    
    
                }

            }catch(err){
                console.log(err);
                
            }
            
            await delay(Math.random() * 10000);
        }
    }
    return city_markets;
}


// console.log(fetchMarketsCategories());
// fetchMarketsCategories()