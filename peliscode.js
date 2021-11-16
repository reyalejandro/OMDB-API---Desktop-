


const TraerData = () => 
{
    let type = TipoPeli();
    let strUsuario = document.getElementById("struser").value;
fetch(`http://www.omdbapi.com/?apikey=44163530&s=${strUsuario}${type}`)
.then (api => api.json())
.then (pelicula => {
    ReiniciarBusqueda();
    let OMDBpeli = pelicula.Search;
    let respuesta = pelicula.Response;

    Validar(respuesta);
    buildTable(OMDBpeli);
    console.log(pelicula);
});
};

const Validar = (respuesta) =>
{
    
    if(respuesta == "False")
        {
            
            var para = document.createElement("p");
            let node = document.createTextNode("No se encontró el elemento, no existe o lo escribió mal");
            para.appendChild(node);
            let element = document.getElementById("diverror");
            // Ni idea de por que no cambia el color del texto
            element.style.color = "red";
            element.style.textAlign = "center";
            element.style.fontFamily = "Comic Sans MS";
            element.appendChild(para);
        }   
}



    const buildTable = (data) =>
    { 
        let table = document.getElementById('pelitable');
        data.forEach(pelicula => {
            let row = `<tr> 
            <td><img src="${pelicula.Poster}" width = "200px" height = "300px"></img></td>
            <td>${pelicula.Title}</td>
            <td>${pelicula.Year}</td>
                    </tr> `;
            table.innerHTML += row;
        }); 
    }
 
    



const TipoPeli = () =>
{
let dropdown = document.getElementById("useroption");
switch(dropdown.value){
    case dropdown.value = "serie":
        t = "&type=series";
        break;

        case dropdown.value = "episode":
            t = "&type=episode";
            break;

            case dropdown.value = "movie":
                t = "&type=movie";
                break;
}
return t;
}


    const alertaMensaje = (cambiarmsg) =>
    {
        let errordiv = document.getElementById('modalbody');
        errordiv.innerHTML = cambiarmsg;
    }

    const ReiniciarBusqueda = () =>
    {
        let table = document.getElementById('pelitable');
        table.innerHTML= "";
        let diverror = document.getElementById('diverror');
        diverror.innerHTML = "";
    }

    
