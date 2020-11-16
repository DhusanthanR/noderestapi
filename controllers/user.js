import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) => {   
    res.send(users);
}

export const createUser = (req,res) => {
    
    const data = req.body;

    users.push({ ... data, id : uuidv4() });

    res.send(`User with the name ${data.firstName} added to the database`);
}

export const getUser = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((data) => data.id == id) 

    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    const { id } = req.params;
    users = users.filter((data) => data.id != id);
    res.send(`User with id ${id} deleted from database`);
   }

export const updateUser = (req,res) => {
    const { id } = req.params;

    const {firstName, lastName, age} = req.body;
    const user  = users.find((user) => user.id == id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with id ${id} has been update`)
}