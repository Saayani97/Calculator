function calc(opt){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out;
    if(opt == 'Add'){
        out = `Sum of Number is ${Number(a)+Number(b)}`
    }else if(opt == 'Mul'){
        out = `Multiply of Number is ${a*b}`
    }else if(opt == 'Div'){
        out = `Division of Number is ${a/b}`
    }else{
        out = `Sub of Number is ${Number(a)-Number(b)}`
    
    }
    document.getElementsByClassName('output')[0].innerText = out
}