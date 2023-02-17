document.querySelector('.card-number-input').oninput = ()=>{
    document.querySelector('.card-number-box').innerText=
        document.querySelector('.card-number-input').value
}

document.querySelector('.card-holder-input').oninput = ()=>{
    document.querySelector('.card-holder-name').innerText=
        document.querySelector('.card-holder-input').value
}

document.querySelector('.month-input').oninput = ()=>{
    document.querySelector('.exp-month').innerText=
        document.querySelector('.month-input').value
}

document.querySelector('.year-input').oninput= ()=>{
    document.querySelector('.exp-year').innerText= 
        document.querySelector('.year-input').value

        
}
// document.querySelector('.cvv-input').onmouseenter = ()=>{
//     document.querySelector('.front').style.transform=
//         'perspective(1000px) rotateY(-180deg)'
//     document.querySelector('.back').style.transform
//         'perspective(1000px) rotateY(0deg)'
// }

// document.querySelector('.cvv-input').onmouseleave = ()=>{
//     document.querySelector('.front').style.transform=
//         'perspective(1000px) rotateY(0eg)'
//     document.querySelector('.back').style.transform=
//         'perspective(1000px) rotateY(-60deg)'
    
// }

document.querySelector('.cvv-input').onfocus =()=>{

    document.querySelector('.front').style.transform=
           'perspective(1000px) rotateY(90deg)';
           setTimeout(()=>{
            document.querySelector('.back').style.transform=
           'perspective(1000px) rotateY(0deg)'      
           },400)
}

document.querySelector('.cvv-input').onblur =()=>{

    setTimeout(()=>{
        
    document.querySelector('.front').style.transform=''
    },400)        
    document.querySelector('.back').style.transform=''
          
}



document.querySelector('.cvv-input').oninput = ()=>{
    document.querySelector('.cvv-box').innerText=
        document.querySelector('.cvv-input').value
}

