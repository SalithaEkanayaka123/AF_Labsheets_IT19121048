

let posts = new Map();

const UUID = require('uuid');

//name, description
let createPost = (obj) => {
    let post = {
        id: UUID.v4(),
        date: new Date(),
        name:obj.name,
        description: obj.description
    };
    posts.set(post.id, post);
    return post;
}

let getPosts = () => {
    return [...posts.values()]
}

let getPost = (id) =>{
    return posts.getId(id);
}

module.exports = {
  createPost,
  getPost,
  getPosts
};