import { useState,useEffect } from "react";
import React from 'react'
import AXIOS_INSTATNCE from "../api/axios";

function addBlog() {

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        title: '',
        content: ''
    });

    useEffect( async () => {
       
           try {
    
            const response= await AXIOS_INSTATNCE.post("/addBlog",formdata)
            console.log(response);
            setPosts(response.data);
           } catch (error) {
            console.log(error);

           }
                
          
       
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddPost = () => {
        axios.post(`${apiUrl}/posts`, newPost)
            .then(response => {
                setPosts(prevState => [...prevState,
                response.data]);
                setNewPost({ title: '', content: '' });
            })
            .catch(error => {
                console.error('Error adding post:', error);
            });
    };

    const handleDeletePost = (id) => {
        axios.delete(`${apiUrl}/posts/${id}`)
            .then(() => {
                setPosts(prevState => prevState.filter(
                    post => post._id !== id));
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

  return (
    <div>

{/* <div className="app"> */}
            {/* <AppBar position="static" className="app-bar">
                <Toolbar>
                    <Typography variant="h6">
                        My Blog
                    </Typography>
                </Toolbar>
            </AppBar> */}
    
            {/* <Container maxWidth="lg" className="container">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                       

                    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
                        <Card className="card">
                            <CardContent className="card-content">
                                <TextField
                                    label="Title"
                                    name="title"
                                    value={newPost.title}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Content"
                                    name="content"
                                    value={newPost.content}
                                    onChange={handleInputChange}
                                    multiline
                                    fullWidth
                                    margin="normal"
                                />
                            </CardContent>
                           
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddIcon />}
                                className="add-post-button"
                                onClick={handleAddPost}
                            >
                                Add Post
                            </Button>
                        </Card>
                        </div>
                        </div>
                        </div>
                    </Grid>
                    {posts.map(post => (
                        <Grid key={post._id} item xs={12} sm={6} md={4}>
                            <Card className="card">
                                <CardContent className="card-content">
                                    <Typography variant="h5"
                                        className="post-title">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2"
                                        className="post-content">
                                        {post.content}
                                    </Typography>
                                </CardContent>
                                <div className="card-actions">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={
                                            () => handleDeletePost(post._id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div> */}



<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span class="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50" />
          <div class="text-sm/6">
            <p class="font-semibold text-gray-900">
              <a href="#">
                <span class="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p class="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
      </article>

      
    </div>
  </div>
</div>
</div>
  )
}

export default addBlog