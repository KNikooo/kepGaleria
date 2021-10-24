class Kep {
	constructor(cim, kep, leiras, elem) {
		this.elem = elem;
        this.cim=cim;
        this.kep=kep;
        this.leiras=leiras;

        this.cimElem = elem.children("h3");
        this.cimElem.html(this.cim);

        this.kepElem = elem.children("img");
        this.kepElem.attr("src", this.kep);

        this.leirasElem = elem.children("p");
        this.leirasElem.html(this.leiras);

        this.elem.on("click", () => {
            console.log(":)");
            this.KattintasTrigger(); 
          });
	}

    KattintasTrigger() {
        let esemeny = new CustomEvent("lampaKattintas", { detail: this });
        window.dispatchEvent(esemeny);
      }
}
