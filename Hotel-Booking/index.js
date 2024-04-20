function myfun(){
    window.alert("Successfully Completed Your Hotel");
}
function myfunction(){
    const data1 = document.getElementsByClassName('data1')[0].value;
    const data2 = document.getElementsByClassName('data2')[0].value;
    const data3 = document.getElementsByClassName('data3')[0];
    const data4 = data3.value; 
    if (data4==1){
        if(data2==1){
            total_price=data1 * 2000;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
        else{
            val= (data2 * 1000) - 1000 
            total_price=data1 * 2000 + val;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
    }
    else if (data4==2){
        if(data2==1){
            total_price=data1 * 3000;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
        else{
            val= (data2 * 1000) - 1000 
            total_price=data1 * 3000 + val;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
    }
    else if (data4==3){
        if(data2==1){
            total_price=data1 * 3500;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
        else{
            val= (data2 * 1000) - 1000 
            total_price=data1 * 3500 + val;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
    }
    if (data4==4){
        if(data2==1){
            total_price=data1 * 5000;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
        else{
            val= (data2 * 1000) - 1000 
            total_price=data1 * 5000 + val;
            document.getElementById("demo").innerHTML = ("Total price :" + total_price);
        }
    }
}
