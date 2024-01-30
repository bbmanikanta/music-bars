var num=0;
var allInput=document.querySelectorAll("input")

function rangebar(){
    var val=allInput[0].value
    // console.log(val)
    allInput[2].value=val;
    num=val;
}
function inc(){
    num++;
    if(num>=30){
        num=30;
        allInput[2].value=num;
        allInput[0].value=num;
    }
    else
    {
        allInput[2].value=num;
        allInput[0].value=num;
    }
}
function dec(){
    num--;
    if(num<=0){
        num=0;
        allInput[2].value=num;
        allInput[0].value=num;
    }
    else
    {
    allInput[2].value=num;
    allInput[0].value=num;
    }
}