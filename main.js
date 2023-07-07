function stringToInteger(string) {
    const hash = CryptoJS.SHA256(string);
    const integer = parseInt(hash.toString(), 16);
    return integer;
}
function gcd(a, b) {
    if (b === BigInt(0)) {
        return a;
    }
    return gcd(b, a % b);
}

function nghichDaoModulo(a, m) {
    let r0 = m;
    let r1 = a;
    let s0 = BigInt(1);
    let t0 = BigInt(0);
    let s1 = BigInt(0);
    let t1 = BigInt(1);
    while (r1 !== BigInt(0)) {
        const q = r0 / r1;
        const r2 = r0 % r1;
        const s2 = s0 - s1 * q;
        const t2 = t0 - t1 * q;

        r0 = r1;
        r1 = r2;
        s0 = s1;
        s1 = s2;
        t0 = t1;
        t1 = t2;
    }
    while (t0 < BigInt(0)) {
        t0 += m;
    }
    return t0;
}

function binhPhuongVaNhan(a, b, m) {
    let result = BigInt(1);
    a = a % m;
    while (b > BigInt(0)) {
        if (BigInt(b) % BigInt(2) === BigInt(1)) {
            result = (result * a) % m;
        }
        a = (a * a) % m;
        b = BigInt(b) / BigInt(2);
    }
    return result;
}
function kiemTraSNT(num) {
    if (num <= 1n) {
        return false;
    }
    for (let i = 2n; i * i <= num; i++) {
        if (num % i === 0n) {
            return false;
        }
    }
    return true;
}
var p
var g
var x
var y
var k
var r;
var s;
function elgamal(z) {
    function taoP(min, max) {
        let kiemTra = false;
        let p;
        while (!kiemTra) {
            const randomNum = BigInt(Math.floor(Number(min) + Math.random() * (Number(max) - Number(min) + 1)));
            if (kiemTraSNT(randomNum)) {
                p = randomNum;
                kiemTra = true;
            }
        }
        return p;
    }
    function taoG(n) {
        let kiemTra = false;
        let g;
        while (!kiemTra) {
            const randomNum = BigInt(Math.floor(1 + Math.random() * (Number(n) - 1)));
            if (randomNum !== 1n && randomNum !== n && gcd(randomNum, n) === 1n) {
                g = randomNum;
                kiemTra = true;
            }
        }
        return g;
    }
    function taoX(p) {
        return BigInt(Math.floor(2 + Math.random() * (Number(p) - 3)));
    }

    function tinhY(g, x, p) {
        return binhPhuongVaNhan(g, x, p);
    }

    function taoK(p) {
        let kiemTra = false;
        let k;
        while (!kiemTra) {
            const randomNum = BigInt(Math.floor(1 + Math.random() * (Number(p) - 2)));
            if (gcd(randomNum, p - 1n) === 1n) {
                k = randomNum;
                kiemTra = true;
            }
        }
        return k;
    }

    p = taoP(10n, 10000n);
    g = taoG(p);
    x = taoX(p);
    y = tinhY(g, x, p);
    k = taoK(p);
    r = binhPhuongVaNhan(g, k, p);
    s = (((BigInt(z) - BigInt(x) * BigInt(r)) * nghichDaoModulo(BigInt(k), BigInt(p) - BigInt(1))) % (BigInt(p) - BigInt(1)));

    while (s <= 0n) {
        s += (p - 1n);
    }
    function toHexString(number) {
        return number.toString(16);
    }

    const r_hex = toHexString(r);
    const s_hex = toHexString(s);
    return {
        publicKey: {
            p,
            g,
            y
        },
        privateKey: {
            x
        },
        k,
        chuKy: {
            r,
            s
        },
        chuKyDangChuoi:
            r_hex + s_hex
    };
}
function kiemTra(z) {
    const ktra = ((binhPhuongVaNhan(y, r, p) * binhPhuongVaNhan(r, s, p)) % p) === binhPhuongVaNhan(g, z, p);
    let message
    if (ktra === true) {
        message = 'Chữ ký đúng'
    }
    else {
        message = 'Chữ ký sai'
    }
    return message;
}
