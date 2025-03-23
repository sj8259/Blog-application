const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Store posts in memory (will not persist between server restarts)
let posts = [];

// Set up EJS as templating engine
app.set("view engine", "ejs");

// Serve static files from public directory
app.use(express.static("public"));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
// Home route - display all posts
app.get("/", (req, res) => {
    res.render("home", { posts: posts });
  });
  
  // Compose route - display form to create new post
  app.get("/compose", (req, res) => {
    res.render("compose");
  });
  
  // Handle new post submission
  app.post("/compose", (req, res) => {
    const post = {
      id: Date.now(), // Use timestamp as unique ID
      title: req.body.title,
      content: req.body.content,
      date: new Date().toLocaleDateString()
    };
    posts.push(post);
    res.redirect("/");
  });
  
  // View single post
  app.get("/posts/:id", (req, res) => {
    const requestedId = parseInt(req.params.id);
    const post = posts.find(p => p.id === requestedId);
    
    if (post) {
      res.render("post", { post: post });
    } else {
      res.redirect("/");
    }
  });
  
  // Edit post form
  app.get("/posts/edit/:id", (req, res) => {
    const requestedId = parseInt(req.params.id);
    const post = posts.find(p => p.id === requestedId);
    
    if (post) {
      res.render("edit", { post: post });
    } else {
      res.redirect("/");
    }
  });
  
  // Update post
  app.post("/posts/edit/:id", (req, res) => {
    const requestedId = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === requestedId);
    
    if (index !== -1) {
      posts[index].title = req.body.title;
      posts[index].content = req.body.content;
    }
    
    res.redirect("/");
  });
  
  // Delete post
  app.post("/posts/delete/:id", (req, res) => {
    const requestedId = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== requestedId);
    res.redirect("/");
  });
  

// Routes will go here

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
