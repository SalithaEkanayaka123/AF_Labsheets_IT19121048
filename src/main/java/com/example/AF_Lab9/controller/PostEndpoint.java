package com.example.AF_Lab9.controller;

import com.example.AF_Lab9.api.PostApi;
import com.example.AF_Lab9.domain.Post;
import com.example.AF_Lab9.domain.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/posts")
public class PostEndpoint {


    private final PostApi postApi;

    @Autowired
    public PostEndpoint(PostApi postApi) {
        this.postApi = postApi;
    }

    @GetMapping
    public List<Post> getPosts(){
        return postApi.getAllPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto){
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.addPost(post);
    }
}
