const lowerset ="qwertyuiopasdfghjklzxcvbnm";
const upperset ="QWERTYUIOPASDFGHJKLZXCVBNM"
const numberset = "1234567890"
const specialset = "!@#$%^&*()<>,.?/;:'`~"


const passbox = document.getElementById("password")
const upperInput = document.getElementById("uppdercase")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.querySelector(".number")
const specialInput = document.getElementById("char")
const total = document.getElementById("number")



function getRandomData (dataset){
    return dataset[Math.floor(Math.random() * dataset.length)]
}

function genratepass(password=''){
        if (upperInput.checked){
            password+=getRandomData(upperset);
        }
        if (lowerInput.checked){
            password+=getRandomData(lowerset);
        }
        if (numberInput.checked){
            password+=getRandomData(numberset);
        }
        if (specialInput.checked){
            password+=getRandomData(specialset);
        }

        if(password.length <= total.value){
            return genratepass(password);

        }

        console.log(password)
       passbox.value=truncateString(password,total.value)
}


var btn = document.getElementById("btn")

btn.addEventListener("click",function (){
    genratepass();
})

function truncateString(str,num){
    if(str.length > num){
        let substr =str.substring(0,num);
        return substr
    }else{
        returnstr;
    }
}