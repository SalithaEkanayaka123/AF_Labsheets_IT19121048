import React from 'react';
export default function PostListItem(props) {
    const {post, selectPost} = props;
    //something to added

    return <tr>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.description}</td>
        <td><a onClick={() => selectPost(post)}>Select</a></td>
    </tr>
}
