const euro = document.getElementById("euro");
const dollar = document.getElementById("dollar");
const indianRs = document.getElementById("indianrs");
const lankaRs = document.getElementById("lankars");

euro.addEventListener("input", euroToOthers)

  function euroToOthers() {

    const e = parseFloat(euro.value);
    const d = 1.12*e;
    const i = 85.23*e;
    const l = 208.43*e;
    dollar.value = d;
    indianRs.value = i;
    lankaRs.value = l;
  }
  


  dollar.addEventListener("input", dollarToOthers)

  function dollarToOthers() {

    const d = parseFloat(dollar.value);
    const e = 0.89*d;
    const i = 76.25*d;
    const l = 186.47*d;
    euro.value = e;
    indianRs.value = i;
    lankaRs.value = l;
  }
 

  indianRs.addEventListener("input", indiaToOthers)

  function indiaToOthers() {

    const i = parseInt(indianRs.value);
    const e = 0.012*i;
    const d = 0.013*i;
    const l = 2.45*i;
    dollar.value = d;
    euro.value = e;
    lankaRs.value = l;
  }
  

  lankaRs.addEventListener("input", lankaToOthers)

  function lankaToOthers() {

    const l = parseInt(lankaRs.value);
    const d = 0.0054*l;
    const i = 0.41*l;
    const e = 0.0048*l;
    dollar.value = d;
    indianRs.value = i;
    euro.value = e;
  }

function main() {
    euroToOthers();
    dollarToOthers();
    indiaToOthers();
    lankaToOthers();
}

