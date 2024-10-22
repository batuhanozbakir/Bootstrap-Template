function ValidateForm()
{
    let isim = document.getElementById("isim").value;
    if(isim=="")
    {
        alert("isim zorunludur.");
        return false;
    }
    return false;
}