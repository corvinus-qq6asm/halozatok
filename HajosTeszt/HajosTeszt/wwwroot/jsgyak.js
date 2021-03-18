window.onload = function () {
    let hely = document.getElementById("ide");

    var faktoriálisR = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * faktoriálisR(n - 1)
        }
    }


    for (var n = 0; n < 10; n++) {
        let sor = document.createElement("div");
        sor.classList.add(sor);
        hely.appendChild(sor);

        for (var k = 0; k < n; k++) {
            let szam = document.createElement("div");
            szam.classList.add("elem");
            szam.innerText = faktoriálisR();
            sor.appendChild(szam);
        }
    }
}

