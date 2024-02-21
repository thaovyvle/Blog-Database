# MongoDB Blog with Comments

For this project, I created a Node.js / Express application. Going on the theme of content management, I created a file-backed express server that handles blog posts and comments using a JSON file to store the data.


# Specifications

## Document Schema

Posts:

```text
title: string
author: string
date: DateTime
postId: string
comments: [
{
 author: string
 date: DateTime
 commentId: string
 content: string
}
]
content: string
```

## Routes

The application handles the following routes:

- GET /posts : Returns the array of posts.
- GET /posts/\[author\] : Returns an array of posts by a given author (assume author username is unique).
- GET /post/\[postId\]/ : Retrieves a single post object based on **postId** (not
  **\_id**, which is generated by MongoDB)
- POST /post : Accepts a JSON object as the body of the request containing all post
  fields and saves to the database.
- DELETE /post/\[postId\] : Removes the post from the database based on the **postId** field.
- POST /post/\[postId\]/comment : Adds a comment to the end of the post and returns the commentId
- GET /post/\[postId\]/comments : Returns all comments associated with a given postId
- DELETE /post/\[postId\]/comment/\[commentId\] : Deletes the comment with the provided **commentId** on the post with the **postId**
