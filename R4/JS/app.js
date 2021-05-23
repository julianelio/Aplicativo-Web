let url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(response => response.json())
.then(datos => MostrarDatos(datos))
.catch(error => console.log(error))

const MostrarDatos =(datos) => {
    console.log(datos)
    let body = ''
    for (let i = 0; i<datos.length; i++){
        body += 
        `<tr><td>${datos[i].id}
        <td><td>${datos[i].name}
        <td><td>${datos[i].username}
        <td><td>${datos[i].email}</td></tr>`
    }
    document.getElementById('datos').innerHTML = body
}