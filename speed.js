function Sdetector(Ispeed){
    /*this function to calculate speed 
    it takes Ispeed as parameter 
    then converts the parameter to integer using parseInt
    checks if the speed entered in a number*/
    const speed=parseInt(Ispeed);
    if (isNaN(speed)){return 'enter a number'}

    const limit=70;
    let message;
    let point=parseInt((speed-limit)/5);
    if(speed<=limit){
      message='OK'
    } else if(speed>limit &&point<13){
     message=point;
    }else{
        message='License suspended.'
    }
    return message;
}

console.log(Sdetector('135'));