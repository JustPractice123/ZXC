let branch=prompt("Choose your branch:\n1 - Science \n2 - Humanitarian subjects\n3 - Art\n4 - Sport")
if(branch==1){
    let Science=prompt("You choosed Science.\nChoose prof:\n1 - Math\n2 - Physics")
    if(Science==1){
        alert("You are Financier")
    }else{
        alert("You are Engineer")
    }
}if(branch==2){
    let Hum=prompt("You choosed Humanitarian subjects.\nChoose prof:\n1 - History\n2 - Foreign Languages")
    if(Hum==1){
        alert("You are Historic or Diplomat")
    }else{
        alert("You are Translator")
    }
}if(branch==3){
    let art=prompt("You choosed Art.\nChoose prof:\n1 - Drawing\n2 -Singing")
    if(art==1){
        alert("You are Painter or Architect")
    }else{
        alert("You are Singer or Tamada")
    }
}if(branch==4){
    let sport=prompt("You choosed Sport.\nChoose prof:\n1 - Team\n2 - Individual")
    if(sport==1){
        alert("You are footballer or Basketball player")
    }else{
        alert("You are boxer or tennis player")
    }
}