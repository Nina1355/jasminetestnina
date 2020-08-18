function divide(a,b){
    var division=(a/b);

    if(b===0){
        return "error";
    }else if (isNaN(a)||isNaN(b))
    {
         division= "Invalid"
    }else{
         division=(a/b);

}
return division;
}
//  module.exports= divide;