<template>
 <div class="container">
   <h1>Latest Posts</h1>
   <div class="create-post">
     <label for="create-post" class="create-post">Say Something:</label>
      <form v-on:submit="createPost">
     <input type="text" id="create-text" v-model="text" placeholder="Create a post." required /> &emsp;
     <button type="submit" value="submit" class="btn btn-light btn-outline-secondary button2">Post!</button>
     </form>
   </div>
   <hr>
   <p class="error" v-if="error">{{error}}</p>
   <div class="posts-container">
     <div class="posts"
     v-for="(post, index) in posts"
     v-bind:item="post"
     v-bind:index="index"
     v-bind:key="post._id"
     >
    <div class="card card-1">
      {{post.text}}
      &emsp;
    <i class="fas fa-trash" @click="deletePost(post._id)"></i>
    </div>
    <!--  -->
     {{`${post.createdAt.getHours()}:${post.createdAt.getMinutes()}:${post.createdAt.getSeconds()}  ${post.createdAt.getDate()}/${post.createdAt.getMonth()+1}/${post.createdAt.getFullYear()}`}}
     </div>
   </div>
 </div>
</template>

<script>
import PostService from "../PostService.js";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    empty() {
      var x;
      x = document.getElementById("create-text").value;
      if (x == "") {
        alert("Enter Something..");
        return false;
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
