import React from 'react';
import Posts from "./components/ Posts";
const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    }, {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
];
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>ID</th>*/}
            {/*        <th>Name</th>*/}
            {/*        <th>Description</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {posts.map(post => {*/}
            {/*        return <tr key={post.id.toString()}>*/}
            {/*            <td>{post.id}</td>*/}
            {/*            <td>{post.name}</td>*/}
            {/*            <td>{post.description}</td>*/}
            {/*        </tr>*/}
            {/*    })}*/}
            {/*    </tbody>*/}
            {/*</table>*/}

            {/*//newly added*/}

            <Posts posts = {posts}/>
        </div>
        //return <h1>Hello to React</h1>;
    };

}
