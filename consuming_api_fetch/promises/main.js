const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id){
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name 
            userCity.textContent = data.city
            userAvatar.src = data.avatar 
        })
        .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url,{
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
        .then(response =>response.json())
        .then(data=> alertApi.textContent=data)
        .catch(error => console.log(error))
}

function updateUser(id, upUser){
    fetch(`${url}/${id}`,{
        method:"PUT",
        // Não podemos mandar um objeto, precisamos enviar uma JSONstring
        body: JSON.stringify(upUser),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })   
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.log(error))
}

function deleteUser(id){
    fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
        .then(response=>response.json())
        .then(data=>alertApi.textContent=data)
        .catch(error=>console.error(error))

}
getUser(1)

const newUser = {
    name:"Olivia",
    avatar:"https://picsum.photos/200/300",
    city: "Limoeiro do Norte"
}

// addUser(newUser)

const upUser = {
    name: "Marcelo",
    avatar:"https://picsum.photos/200/300",
    city: "Recife"
}

// updateUser(1,upUser)

getUsers()

// deleteUser(4)