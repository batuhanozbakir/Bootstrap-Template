const Kutu = document.getElementById("Kutu");

Kutu.onmouseover=()=> Kutu.style.backgroundColor="green";

Kutu.addEventListener('mouseout',()=>{
    Kutu.style.backgroundColor="blue"
})
