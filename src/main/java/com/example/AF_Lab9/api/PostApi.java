package com.example.AF_Lab9.api;

import com.example.AF_Lab9.domain.Post;

import java.util.*;

public class PostApi {
    private final Map<String, Post> posts;

    public PostApi() {
        this.posts = new HashMap<>();
    }

    public List<Post> getAllPosts() {
        return new ArrayList<>(posts.values());
    }

    public Post addPost(Post post){
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(), post);
        return post;
    }
}
