# buckesidi.com
Oficijelni portal benda „Buč kesidi“

## Instalacija
* Skinuti `python3` i `pip`
* ```
    pip install -r requirements.txt
    ```

## Lokalno pokretanje
* Neophodno je instalirati `GNU Make`
```
make html
make serve
```
Sajt je onda dostupan na [http://localhost:8000](http://localhost:8000).

## Postavljanje na github pages
Svaki push na `master` granu će pokrenuti github akciju koja će najnoviju verziju pustiti na 
`gh-pages` granu (koja se i hostuje na produkciji).


*Napravljeno pomoću Pelican static website generatora.*

