---
title: Početna
slug: order
date: 14-11-2020
category: static
save_as: .preorder.html
hide_title: True
status: draft
---
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/theme/css/forms.css" />
<script src="/static/js/preorder.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/themes@4.0.0/borderless/borderless.min.css" />
<div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="/static/img/04.png" alt="Ploča - prednja strana"/>
            </div>
            <div class="flip-card-back">
                <img src="/static/img/03.png" alt="Ploča - zadnja strana"/>
            </div>
        </div>
</div>

<h2 class="hero-title">
	<a href="#" id="hero__title">
		EUFORIJA VINYL PREORDER
	</a>
</h2>
<div class="container">
 <!-- Modal -->
  

  <!-- Modal Thank You -->
  <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <circle class="path circle" fill="none" stroke="#fff" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
            <polyline class="path check" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <p class="success">Hvala!</p>
            <p class="success">Vaša porudžbina je primljena</p>
          </div>
        </div> <!-- end modal content -->
      </div><!-- end modal dialog -->
    </div> <!-- END #myModal modal -->
  
  
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
                              <img class="vinyl-image big" src="/static/img/04.png">
                          </div>
                          <div class="vinyl-flex-container">
                              <img class="vinyl-flex-item item-1 vinyl-image small" src="/static/img/01.png">
                              <img class="vinyl-flex-item item-2 vinyl-image small" src="/static/img/03.png">
                              <img class="vinyl-flex-item item-3 vinyl-image small" src="/static/img/02.png">
                             <img class="vinyl-flex-item item-4 vinyl-image small hidden" src="/static/img/04.png">
                          </div>
                  </div>
                  <div class="order-flex-item item-2">
		      <div class="order-flex-item title">
			      <h2 class="form__header big" style="text-align: left;">BUČ KESIDI - EUFORIJA </h2>
			      <h2 style="text-align: left;">12" VINYL LP (LIMITED EDITION)</h2>
			      <p>3000 RSD / 28 €</p>
			      <p class="smallest">BESPLATNA POŠTARINA</p>
		      </div>
                      <div id="error"></div>
                      <form action="https://docs.google.com/forms/d/e/1FAIpQLSdfic_0Q0D5jr127c1gn_wO26kmamTHjM3ZAQKZA8EIFO72aA/formResponse"
                          target="targetIframe"
                          id="mainForm"
                          onsubmit="validateForm(event);"
                          method="POST">
                  
                          <!-- Field type: "short" id: "1633920210" -->
                          <fieldset>
                              <legend for="1633920210">Ime i prezime</legend>
                              <input id="2005620554" placeholder="Ime i prezime" type="text" name="entry.2005620554" class="form-control">
                          </fieldset>
                          
                          <!-- Field type: "short" id: "235329302" -->
                          <fieldset>
                              <legend for="235329302">Država</legend>
                              <input id="835883743" placeholder="Država" type="text" name="entry.835883743" class="form-control">
                          </fieldset>
                  
                  
                          <!-- Field type: "short" id: "790080973" -->
                          <fieldset>
                              <legend for="790080973">Ulica i broj</legend>
                              <input id="1065046570" placeholder="Ulica i broj" type="text" name="entry.1065046570" class="form-control">
                          </fieldset>
                          
                          <!-- Field type: "short" id: "1265461668" -->
                          <fieldset>
                              <legend for="1265461668">Grad</legend>
                              <input id="476110520" placeholder="Grad" type="text" name="entry.476110520" class="form-control">
                          </fieldset> 
                  
                          <!-- Field type: "short" id: "1316787962" -->
                          <fieldset>
                              <legend for="1316787962">Poštanski broj</legend>
                              <input id="2134337608" placeholder="Poštanski broj" type="number" min="0" name="entry.2134337608" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno (koristite brojeve)')"
                              oninput="this.setCustomValidity('')">
                          </fieldset> 
                  
                       
                          <!-- Field type: "short" id: "1770822543" -->
                          <fieldset>
                              <legend for="1770822543">Telefon</legend>
                              <input id="1166974658" placeholder="Telefon u formatu (+)123456789" type="text" name="entry.1166974658" class="form-control" oninvalid="this.setCustomValidity('Ovo polje je obavezno')"
                              oninput="this.setCustomValidity('')" required>
                          </fieldset>
                          
                          <!-- Field type: "short" id: "227649005" -->
                          <fieldset>
                              <legend for="227649005">Email</legend>
                              <input id="1045781291" placeholder="Email" type="email" name="entry.1045781291" class="form-control">
                          </fieldset>
                          
                          <!-- Field type: "short" id: "1930483335" -->
                         <fieldset>
                          <legend for="1930483335">Količina (maks. 4)</legend>
                          <input id="631847714" placeholder="Količina (maks. 4)" type="number" min="1" max="4" name="entry.631847714" class="form-control"
                           oninvalid="this.setCustomValidity('Ovo polje je obavezno, maks. je 4 (koristite brojeve)')"
                            oninput="this.setCustomValidity('')"
                           required>
                         </fieldset>
                         
                         <!-- Field  type: "text" id:"525111118" -->
                          <fieldset>
                            <legend for="525111118">Komentar (opciono)</legend>
                            <input id="1356197128" placeholder="Komentar (opciono)" type="text" name="entry.1356197128" class="form-control">
                          </fieldset>
                  
                          <fieldset>
                              <input class="btn btn-primary" type="submit" style="background-color: #f2483d" value="Naruči">
                          </fieldset>
                      </form>
                      <iframe class="hidden" name="targetIframe"></iframe>
                  </div> <!-- END order-flex-item item-2 -->
          </div> <!-- END order-flex-container -->

        </div> <!-- END modal-content -->
        
      </div> <!-- END modal-dialog -->
    </div><!-- #formModal modal -->
    <!--END Modal Form-->
    
</div> <!-- END CONTAINER -->
