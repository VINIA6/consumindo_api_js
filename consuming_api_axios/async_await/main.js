const url = "http://localhost:5500/api"


async function getUsers() {
    try {
        const resp = await axios.get(url)
        const data = resp.data

        apiResult.textContent = JSON.stringify(data)
        
    } catch (error) {
        console.log(error)
    }
}

async function addNewUser(newUser){
    try {
        const resp = await axios.post(url,newUser)
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}

async function getUser(id){
    try {
        const resp = await axios.get(`${url}/${id}`)
        const data = resp.data

        userName.textContent = data.name
        userCity.textContent = data.city
        userId.textContent = data.id
        userAvatar.src = data.avatar

    } catch (error) {
        console.log(error)
    }
}

// Cânticos 4:7

async function updateUser(id,userUpdated){
    try {
        const resp = await axios.put(`${url}/${id}`,userUpdated)
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(id){
    try {
        const resp = await axios.delete(`${url}/${id}`)
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}

getUsers()
getUser(1)
deleteUser(3)
userUpdated = {
    name:"Arthur Vidal",
    avatar:"https://picsum.photos/200/300",
    city: "Russas",
}

updateUser(2,userUpdated)

newUser = {
    name:"Lucia Jacinta",
    avatar:"https://picsum.photos/200/300",
    city: "Limoeiro do Norte",
}

// addNewUser(newUser)