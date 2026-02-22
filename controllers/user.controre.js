var users =[]; 
const getusers= (req,res)=>{
  return res.json(users);  
}

const update= (req,res)=>{
    const {id}=req.params;
    const user=users.find((users)=>users.id == id);
    if(!user){
      return res.status(404).send()
    }
  return res.json(users);  
}

const create=(req,res)=>{
    const {name, email}=req.body;
    const user={id:users.length + 1,name,email}
    users.push(user);
    //creacte cheyathath json add avaam other restart avum ath povum 
    return res.status(201).send()
}


const deletu=(req,res)=>{
    const {id}=req.params;
    const user=users.find((users)=>users.id == id);
    if(!user){
      return res.status(404).send()
    }
    users =users.filter((user)=> user.id != id)
  return res.status(204).send();  
}

const edituser=(req,res)=>{
    const {id}=req.params;
     const user=users.find((users)=>users.id == id);
      if(!user){
      return res.status(404).send()
    }
     const {name, email}=req.body;
     if(name){
        user.name=name;
     }
     if(email){
        user.name=email;
     }
   const index=users.findIndex((users)=>users.id == id)
   users[index]=user;
   return res.json(user)
}

module.exports= {edituser,getusers,update,deletu,create};