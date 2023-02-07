# ifood-scraper

Extrator de preços de supermercados do ifood-mercados de diversas cidades do Brasil.

Instruções:

- Navegue até o diretório do projeto em seu terminal
- Rode "node src/scraper/full_extraction.js"
- A extração demorará por ter adicionado delay para que o ifood não dê blacklist no meu ip. Qualquer coisa adicione rotação de ip e tire o delay.
- Feita a extração, você observará a criação de um arquivo chamado "city_markets_items.json", os produtos com seus preços estarão lá. 
