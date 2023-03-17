const url = 'http://localhost:5500/api'

function getUsers() {
    axios.get(url)
    .then(response=>{
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error=>console.error(error))
}

function addNewUser(newUser){
    axios.post(url,newUser)
    .then(response=>{
        console.log(response)
    })
    .catch(error=>console.log(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response=> {

        const data = response.data

        userName.textContent = data.name
        userCity.textContent = data.city
        userId.textContent = data.id
        userAvatar.src = data.avatar

    })
    .catch(error => console.error(error))
}

function updateUser(id,userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(resp =>{
        console.log(resp)
    })
    .catch(error=>console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(resp =>{
        console.log(resp)
    })
    .catch(error=>console.error(error))
}

// -------------------------------------------------------------

const userUpdated = {
    name:"Lucia",
    avatar:"https://picsum.photos/200/300",
    city: "Russas",
}

// updateUser(1, userUpdated)
// deleteUser(1)
// deleteUser(1)
getUsers()
getUser(1)

const newUser = {
    name:"Vinícius",
    avatar:"https://picsum.photos/200/300",
    city: "Limoeiro do Norte",
}
// addNewUser(newUser)
