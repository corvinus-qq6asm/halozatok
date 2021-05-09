window.onload = () => {

    console.log("betoltodott");
    var faktorialis = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            return n * faktorialis(n-1)
        }
    }

    for (var sor = 0; sor < 10; sor++) {
        var sorok = document.createElement("div");
        sorok.classList.add("sor");
        document.getElementById("ide").appendChild(sorok);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var elemek = document.createElement("div");
            sorok.appendChild(elemek);
            elemek.classList.add("elem");
            elemek.innerText = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));
            elemek.style.background = 'rgb(0, 0, ${(255 * 2 / elemek.innerText) + 125})';
        }
    }

    //

}
