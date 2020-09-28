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


        <!-- Field type: "paragraph" id: "790080973" -->
        <fieldset>
            <legend for="790080973">Adresa za slanje (ulica i broj, grad, država)</legend>
            <textarea id="1065046570" name="entry.1065046570" class="form-control" required></textarea>
        </fieldset>


        <!-- Field type: "short" id: "227649005" -->
        <fieldset>
            <legend for="227649005">E-mail</legend>
            <input id="1045781291" type="text" name="entry.1045781291" class="form-control" required>
        </fieldset>


        <!-- Field type: "short" id: "1770822543" -->
        <fieldset>
            <legend for="1770822543">Broj telefona</legend>
            <input id="1166974658" type="text" name="entry.1166974658" class="form-control" >
        </fieldset>

        <input type="hidden" name="fvv" value="1">
        <input type="hidden" name="fbzx" value="-2455484333168085333">
        <input type="hidden" name="pageHistory" value="0">
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