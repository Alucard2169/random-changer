let color = [
    "#E27D60",
    "#85DCB",
    "#E8A87C",
    "#C38D9E",
    "#41B3A3",
    "#242582",
    "#553D67",
    "#F64C72",
    "#99738E",
]
let point;
let _cC;
let _cN;
let randCol = (pack) => {

    point = Math.floor(Math.random() * pack.length);
    _cC = document.body.style.background = pack[point];
    document.getElementById("cN").innerHTML = _cN;
    switch(_cC){
        case "#E27D60":
        _cN = ' Terracotta';
        break;

        case "#85DCB":
        _cN = " Mintgreen";
        break;

        case "#E8A87C":
        _cN = " Tacao";
        break;

        case "#C38D9E":
        _cN = " Oriental Pink";
        break;

        case "#41B3A3":
        _cN = " Keppel";
        break;

        case "#242582":
        _cN = " Jacksons Purple";
        break;

        case "#553D67":
        _cN = " Mulled Wine";
        break;

        case "#F64C72":
        _cN = " French Rose";
        break;

        case "#99738E":
        _cN = " Mountbatten Pink";
        break;

        default:
            _cN = "black";
        break;
    }

    document.getElementById('change-me').style.background = pack[point];
}

let r = () => randCol(color);

document.getElementById('change-me').addEventListener("click", r)