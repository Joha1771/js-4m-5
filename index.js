
// 1

class Avtomobil {
    constructor(model, rang) {
        this.model = model;
        this.rang = rang;
    }

    yurish() {
        console.log(this.model + " harakatni boshladi.");
    }
}

const jentra = new Avtomobil("Gentra", "Qora");
jentra.yurish();


// 2
class Hayvon {
    tovush() {
        console.log("Hayvon ovoz chiqaradi");
    }
}

class Kuchuk extends Hayvon {
    tovush() {
        console.log("Vov-vov!");
    }
}



// 3

class BankHisobi {
    #balans = 0; 

    constructor(egasi) {
        this.egasi = egasi;
    }

    depozit(miqdor) {
        if (miqdor > 0) {
            this.#balans = this.#balans + miqdor;
            console.log(this.egasi + " hisobiga " + miqdor + " so'm qo'shildi.");
        }
    }

    getBalans() {
        return "Joriy balans: " + this.#balans + " so'm";
    }
}

const hisob = new BankHisobi("Ali");
hisob.depozit(70000);
console.log(hisob.getBalans());