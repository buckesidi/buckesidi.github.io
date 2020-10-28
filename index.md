---
layout: default
---
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/css/forms.css" />
<script src="/js/preorder.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/themes@4.0.0/borderless/borderless.min.css" />
<a href="#" onclick="showPreorderForm()">
	<img src="/img/ploca.png" alt="Vinyl album - Euforija" />
</a>
<h2 class="hero-title">
	<a href="#" onclick="showPreorderForm()">
		EUFORIJA VINYL PREORDER
	</a>
</h2>

  <!-- Modal -->
  
<div class="container">

  <!-- Modal Thank You -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Hvala!</h4>
        </div>
        <div class="modal-body">
          <p>Porudžbina je primljena.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Zatvori</button>
        </div>
      </div>
      
    </div>
  </div>
  
  
  <!-- Modal Form-->
    <div class="modal fade" id="formModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class='order-flex-container'>
                  <div class="vinyl__container order-flex-item item-1">
                          <div class="vinyl-image-container">
                              <img class="vinyl-image big" src="/img/ploca.png">
                          </div>
                          <div class="vinyl-flex-container">
                              <img class="vinyl-flex-item item-1 vinyl-image small" src="/img/ploca.png">
                              <img class="vinyl-flex-item item-2 vinyl-image small" src="/img/ploca.png">
                              <img class="vinyl-flex-item item-3 vinyl-image small" src="/img/ploca.png">
                          </div>
                  </div>
                  <div class="order-flex-item item-2>
                      <div id="error"></div>
                      <form action="https://docs.google.com/forms/d/e/1FAIpQLSdfic_0Q0D5jr127c1gn_wO26kmamTHjM3ZAQKZA8EIFO72aA/formResponse"
                          target="targetIframe"
                          id="mainForm"
                          onsubmit="validateForm(event);"
                          method="POST">
                  
                          <!-- Field type: "short" id: "1633920210" -->
                          <fieldset>
                              <legend for="1633920210">Ime i prezime</legend>
                              <input id="2005620554" placeholder="Ime i prezime" type="text" name="entry.2005620554" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset>
                          
                          <!-- Field type: "short" id: "235329302" -->
                          <fieldset>
                              <legend for="235329302">Država</legend>
                              <input id="835883743" placeholder="Država" type="text" name="entry.835883743" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset>
                  
                  
                          <!-- Field type: "short" id: "790080973" -->
                          <fieldset>
                              <legend for="790080973">Ulica i broj</legend>
                              <input id="1065046570" placeholder="Ulica i broj" type="text" name="entry.1065046570" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset>
                          
                          <!-- Field type: "short" id: "1265461668" -->
                          <fieldset>
                              <legend for="1265461668">Grad</legend>
                              <input id="476110520" placeholder="Grad" type="text" name="entry.476110520" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset> 
                  
                          <!-- Field type: "short" id: "1316787962" -->
                          <fieldset>
                              <legend for="1316787962">Poštanski broj</legend>
                              <input id="2134337608" placeholder="Poštanski broj" type="number" name="entry.2134337608" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset> 
                  
                       
                          <!-- Field type: "short" id: "1770822543" -->
                          <fieldset>
                              <legend for="1770822543">Telefon</legend>
                              <input id="1166974658" placeholder="Telefon" type="text" name="entry.1166974658" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset>
                          
                          <!-- Field type: "short" id: "227649005" -->
                          <fieldset>
                              <legend for="227649005">Email</legend>
                              <input id="1045781291" placeholder="Email" type="email" name="entry.1045781291" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset>
                  
                          <fieldset>
                              <input class="btn btn-primary" type="submit" value="Naruči">
                          </fieldset>
                      </form>
                      <iframe class="hidden" name="targetIframe"></iframe>
                  </div>
          </div>

        </div>
        
      </div>
    </div>
  
</div>


{% comment %}

<iframe src="https://www.youtube.com/embed/UMTMFX_IKkY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<ul class="menu">
  <li> <a href="https://kontra.fanlink.to/euforija" target="_blank">NOVI ALBUM - EUFORIJA</a> </li>
  <li> <a href="koncerti">KONCERTI</a> </li>
  <li> <a href="radnja">RADNJA</a> </li>
</ul>



<section id="novialbum">
	<h1> Euforija - novi album </h1>
	<img src="img/Euforija-omot.jpg" alt="Omot" />
	<ul>
		<li> <a class="button" href="https://open.spotify.com/album/17ic4waAX7buHeY0PGVwB4" target="_blank"> Spotify </a> </li>
		<li> <a class="button" href="https://www.deezer.com/sr/album/120025442" target="_blank"> Deezer </a> </li>
		<li> <a class="button" href="https://buckesidi.bandcamp.com/album/euforija" target="_blank"> Bandcamp </a> </li>
	</ul>
</section>



<section id="koncerti">

<h1> Predstojeći koncerti </h1>

Datum:  | Mesto:           | Lokacija:                         |
--------|------------------|-----------------------------------|----------------------------
10. APR | Kruševac         | Basement Bar                      | [INFO](https://www.facebook.com/events/2829739917109244)
11. APR | Jagodina         | Gimnazija „Svetozar Marković“     | [INFO](https://www.facebook.com/events/1263733304016012)
12. APR | Požarevac        | Klub Kb Požarevac                 | [INFO](https://www.facebook.com/events/619285958852087)
16. APR | Apatin           | CK PIK Apatin                     | [INFO](https://www.facebook.com/events/588399515097093)
17. APR | Vršac            | Dom Omladine Vršac                | [INFO](https://www.facebook.com/events/2788046581277972)
18. APR | Zrenjanin        | Mitraljez                         | [INFO](https://www.facebook.com/events/184086823018476)
19. APR | Šabac            | Kulturni Centar Šabac             | [INFO](https://www.facebook.com/events/2937986539594317)

</section>

{% endcomment %}
