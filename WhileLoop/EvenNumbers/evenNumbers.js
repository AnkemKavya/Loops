function onCliclToPrintEvenNumbers() {
    debugger;
    let startNumber = Number(document.getElementById("txtStartNumber").value);
     let endNumber = Number(document.getElementById("txtEndNumber").value);
     if(startNumber % 2 == 1){
        startNumber += 1;
     }
     if(endNumber % 2 == 1){
        endNumber -= 1;
     }
     let i = startNumber;
     while(i <= endNumber){
        console.log(i);
        i+=2;
     }
}