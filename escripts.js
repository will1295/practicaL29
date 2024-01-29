function funcion1(){
    num1 = (document.getElementById("num1")).value;
    num2 = (document.getElementById("num2")).value;
    //document.write(sumar(num1,num2));
    var suma = sumar(num1,num2);
    var result=document.getElementById("resultado");
    result.innerHTML=suma;
}

function sumar(n1,n2){
    var num1=Number(n1);
    var num2=Number(n2);
    var suma = num1+num2;
    if(isNaN(suma)){
        return("No se puede realizar la suma");
    }
    else{
        return("La suma es: "+suma);
    }
    
}