function showPreorderForm()
{
    let forma = `
    <form action="https://docs.google.com/forms/d/e/1FAIpQLSdfic_0Q0D5jr127c1gn_wO26kmamTHjM3ZAQKZA8EIFO72aA/formResponse"
        target="targetIframe"
        id="mainForm"
        onsubmit="alert('Zahtev uspesno poslat!'); Swal.close()"
        method="POST">

        <!-- Field type: "short" id: "1633920210" -->
        <fieldset>
            <legend for="1633920210">Ime i prezime</legend>
            <input id="2005620554" type="text" name="entry.2005620554" class="form-control" required>
        </fieldset>
        
        <!-- Field type: "short" id: "235329302" -->
        <fieldset>
            <legend for="235329302">Država</legend>
            <input id="835883743" type="text" name="entry.835883743" class="form-control" required>
        </fieldset>


        <!-- Field type: "short" id: "790080973" -->
        <fieldset>
            <legend for="790080973">Ulica i broj</legend>
            <input id="1065046570" type="text" name="entry.1065046570" class="form-control" required>
        </fieldset>
        
        <!-- Field type: "short" id: "1265461668" -->
        <fieldset>
            <legend for="1265461668">Grad</legend>
            <input id="476110520" type="text" name="entry.476110520" class="form-control" required>
        </fieldset> 

        <!-- Field type: "short" id: "1316787962" -->
        <fieldset>
            <legend for="1316787962">Poštanski broj</legend>
            <input id="2134337608" type="text" name="entry.2134337608" class="form-control" required>
        </fieldset> 

     
        <!-- Field type: "short" id: "1770822543" -->
        <fieldset>
            <legend for="1770822543">Telefon</legend>
            <input id="1166974658" type="text" name="entry.1166974658" class="form-control" >
        </fieldset>
        
        <!-- Field type: "short" id: "227649005" -->
        <fieldset>
            <legend for="227649005">Email</legend>
            <input id="1045781291" type="text" name="entry.1045781291" class="form-control" required>
        </fieldset>

        <fieldset>
            <input class="btn btn-primary" type="submit" value="Pošalji">
        </fieldset>
    </form>
    <iframe class="hidden" name="targetIframe"></iframe>
    `
Swal.fire({
    title: "<h2>Preorder „Euforije“ na vinilu</h2>",
    html: forma,
    showConfirmButton: false,
    showCloseButton: true,
  });
}