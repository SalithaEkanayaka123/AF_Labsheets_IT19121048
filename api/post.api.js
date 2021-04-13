

//let posts = new Map();

const UUID = require('uuid');
const {getAll, getById, removeById, save, update} = require('../dal/posts.dao');
//name, description
let createPost = async ({name, description}) => {
    const post = {
        id: UUID.v4(),
        date: new Date(),
        name,
        description
    };
    return await save(post);
}

let getPosts = async () => {
    return await getAll();
}

let getPost = async id =>{
    return await getById(id);
}

const removePost = async id =>{
    return await removeById(id);
}

const updatePost = async (id, {name, description, postedDate}) =>{
    return await update(id,{name,description,postedDate});
}

module.exports = {
  createPost,
  getPost,
  getPosts,
  removePost,
  update
};