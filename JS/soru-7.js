// function Ekle(){
//     var div = document.getElementById("urunContainer");
//     var inputTypeFile = document.createElement("input");
//     inputTypeFile.setAttribute("type","text");
//     div.appendChild(inputTypeFile);

//     var buton = document.getElementById("ekleBtn");
//     var buttonTypeFile = document.createElement("input");
//     buttonTypeFile.setAttribute("type" ,"button");
//     div.appendChild(buttonTypeFile);
//     buttonTypeFile.value = "mahmut"

//     urunContainer.appendChild(document.createElement("br"))
// }

document.addEventListener('DOMContentLoaded',()=>{
    const ekleButon = document.querySelector('#ekleButon')
    const urunContainer2 = document.querySelector('#urunContainer2')

    ekleButon.onclick=()=>{
        const label = document.createElement('label')
        label.textContent = "Urun Adi"
        const input = document.createElement('input') 
        input.type = "text"
        input.placeholder="Urun adi giriniz"

        urunContainer2.appendChild(label)
        urunContainer2.appendChild(input)
        
    }
})