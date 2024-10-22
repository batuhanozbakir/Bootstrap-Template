// function ButtonDegıs(){
   
//     document.body.style.backgroundColor ="blue";
// }

function ButtonDegıs()
{
   
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    const rastgeleRenk = `rgb(${red},${blue},${green})`
    document.body.style.backgroundColor = rastgeleRenk;
}




