# ifood-scraper

Extrator de preços de supermercados do ifood-mercados de diversas cidades do Brasil.

Instruções:

- Navegue até o diretório do projeto em seu terminal
- Rode "node src/scraper/full_extraction.js"
- A extração demorará por ter adicionado delay para que o ifood não dê blacklist no meu ip. Qualquer coisa adicione rotação de ip e tire o delay.
- Feita a extração, você observará a criação de um arquivo chamado "city_markets_items.json", os produtos com seus preços estarão lá. 

--------------------------------------------------------------------------------------------------------------------------------------------------


Ifood markets price extractor from several cities in Brazil.

Instructions:

- Navigate to the project directory in your terminal
- Run "node src/scraper/full_extraction.js"
- The extraction will take a while because it's been added a delay so that ifood doesn't blacklist my ip. You can add ip rotation and remove the delay.
- Once the extraction is done, a file called "city_markets_items.json" will be created, the products with their prices will be there.
