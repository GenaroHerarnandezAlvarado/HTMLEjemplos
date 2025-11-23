document.getElementById("FormContacto").addEventListener("submit",function(e){
    e.preventDefault();
    const nombre = document.getElementById("NombreConta").value;
    const telefono = document.getElementById("TelefonoConta").value;

    const ListaItem = document.createElement("li");
    ListaItem.textContent = `${nombre} - ${telefono}`;
    const deletebtn = document.createElement("button");
    deletebtn.textContent = 'Eliminar';
    deletebtn.addEventListener('click', function(e){
        ListaItem.remove();
    });
    ListaItem.appendChild(deletebtn);

    document.getElementById("Listaconta").appendChild(ListaItem);

});

document.getElementById("buscarbtn").addEventListener("input", function(e){
    
    const busquedaT = e.target.value.toLowerCase();
    const contacts = document.querySelectorAll("#Listaconta li");

    contacts.forEach((contact) =>{
        if(contact.textContent.toLocaleLowerCase().includes(busquedaT)){
            contact.style.display = '';
        }else{
            contact.style.display = 'none';
        }
    });
});