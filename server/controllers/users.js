const users=[]

const addUser = ({id,name,room}) =>{
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!name || !room){
        return {error:'Required fields to be complete'}
    }

    const userExist = users.find(user=>user.room === room && user.name === name)

    if(userExist) return {error :'User Exists'}

    const user = {id,name,room}

    users.push(user)

    // console.log(users);
    

    return {user}
}

const removeUser = ({id})=>{
    const userIndex = users.findIndex(user=>user.id === id)

    if(userIndex === -1){
        return {error:'user not exist'}
    }

    const [user] = users.splice(userIndex,1)
    console.log(users,user); 
    

    return {user}
}

const getUser = ({id}) =>{
    const userArr = users.filter(user=>user.id === id)

    console.log(users);


    if(userArr.length === 0){
        return {error:'user not exists'}
    }
    const [user] = userArr 

    return {user}
}

const getUsersInRoom = ({room}) =>{
    const usersArr = users.filter(user=>user.room === room)
    
    return usersArr
}

module.exports = {
    addUser,removeUser,getUser,getUsersInRoom,users
}