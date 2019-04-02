function kiemTraSNT(number) {
    if (number < 2) return false;
    else if (number >= 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) return false;
        }
        return true;
    }

}

function hienThiSNT() {
    var count = 0;
    for (let i = 1; i < 1000; i++) {
        if (kiemTraSNT(i)) {
            document.write(i + '<br>');
        }
        count++;
    }
}

hienThiSNT();