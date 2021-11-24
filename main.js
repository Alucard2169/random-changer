color = [
    "#8EE4AF",
    "#5CDB95",
    "#3500D3",
    "#C38D9E",
    "#41B3A3",
    "#F64C72",
    "#8D8741",
    "#05386B",
    "#FC4445",
    "#3FEEE6",
    "#C3073F",
];



function random_selector(list){
    const RANDOM = Math.floor(Math.random() * list.length);
    return list[RANDOM];
}

function background(theme){
    let current_color  = random_selector(theme);
    document.body.style.backgroundColor = current_color;
    document.getElementById("color").innerHTML = current_color;
    document.getElementById("color").style.background = current_color;
    
}

let a = () => background(color);



let changerButton = document.getElementById("changer").addEventListener('click', a);