function copiarNumero() {
  // Seleccionar el elemento span que contiene el número de teléfono o nombre
  var spanElement = document.querySelector(
    "#main > header > div._amie > div > div > div > span"
  );
  console.log(spanElement);
  var searchText = spanElement.innerText.trim();
  // Verificar si el texto es un número de teléfono
  if (/^\+\d{1,3}\s\d{3}\s\d{6,}$/.test(searchText)) {
    // Si es un número de teléfono, copiar al portapapeles
    var tempElement = document.createElement("textarea");
    tempElement.value = searchText;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
  } else {
    // Si no es un número de teléfono, hacer clic en otro elemento para intentar encontrarlo
    document.querySelector("#main > header > div._amie > div > div").click();

    setTimeout(function () {
      var newSpanElement = document.evaluate(
        "/html/body/div[1]/div/div/div[2]/div[5]/span/div/span/div/div/section/div[1]/div[2]/div/span/span",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      console.log(newSpanElement);
      if (newSpanElement) {
        var newSearchText = newSpanElement.innerText.trim();
        // Verificar si el texto es un número de teléfono
        if (/^\+\d{1,3}\s?\d{1,5}(\s?\d+)+$/.test(newSearchText)) {
          // Si es un número de teléfono, copiar al portapapeles
          var tempElement = document.createElement("textarea");
          tempElement.value = newSearchText;
          document.body.appendChild(tempElement);
          tempElement.select();
          document.execCommand("copy");
          document.body.removeChild(tempElement);
          //alert('Número copiado al portapapeles: ' + newSearchText);
          document
            .querySelector(
              "#app > div > div.three._aigs > div._aigv._aig- > span > div > span > div > header > div > div.x1okw0bk.x1fxk84t > div > span"
            )
            .click();
        } else {
          alert("No hay número que copiar");
        }
      } else {
        var newSpanElement = document.querySelector(
          "#app > div > div.three._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div._aig-.x1n2onr6.xyw6214.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.xy80clv.x26u7qi.x1ux35ld > span > div > span > div > div > section > div.x13mwh8y.x1q3qbx4.x1wg5k15.x1bnvlk4.x1n2onr6.x1c4vz4f.x2lah0s.xdl72j9.xyorhqc.x13x2ugz.x7sb2j6.x6x52a7.x1i2zvha.xxpdul3 > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4 > div > span > span"
        );
        console.log(newSpanElement);
        var newSearchText = newSpanElement.innerText.trim();
        // Verificar si el texto es un número de teléfono
        if (/^\+\d{1,3}\s?\d{1,5}(\s?\d+)+$/.test(newSearchText)) {
          // Si es un número de teléfono, copiar al portapapeles
          var tempElement = document.createElement("textarea");
          tempElement.value = newSearchText;
          document.body.appendChild(tempElement);
          tempElement.select();
          document.execCommand("copy");
          document.body.removeChild(tempElement);
          //alert('Número copiado al portapapeles: ' + newSearchText);
          document
            .querySelector(
              "#app > div > div.three._aigs > div._aigv._aig- > span > div > span > div > header > div > div.x1okw0bk.x1fxk84t > div > span"
            )
            .click();
        } else {
          alert("No se encontró el número de teléfono.");
        }
      }
    }, 500); // Espera de 1 segundo
  }
}

copiarNumero();
