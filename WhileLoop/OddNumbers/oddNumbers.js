function onClickOddNumbers(){
    debugger;
    let startNumber = Number(document.getElementById("txtStartNumber").value);
    let endNumber = Number(document.getElementById("txtEndNumber").value);
    if(startNumber % 2 == 0){
        startNumber += 1;
    }
    i = startNumber;
    while(i <= endNumber){
        console.log(i);
        i+=2;
    }
}