const input = document.getElementById("input_box")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseString(value)

    if(value === reverse){
        alert("Palindrom");
    }else{
       alert("Not palindrom");
    }
}