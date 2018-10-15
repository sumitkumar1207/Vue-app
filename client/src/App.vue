<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PostComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PostComponent from "./components/PostComponent.vue";

export default {
  name: "app",
  components: {
    PostComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#create-text {
  height: 40px;
  border-radius: 5px;
  padding: 2px 2px;
}
.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
/* style for post cards start */
body {
  background: #e2e1e0;
  text-align: center;
}

.card {
  padding: 0.3rem;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 100%;
  margin: 1rem;
  position: relative;
  width: auto;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}

/* style for post cards end */

/* Media Queries */
@media only screen and (min-device-width: 320px) and (max-device-width: 699px) {
  .button2 {
    margin: 0.5rem;
  }
  .card {
    margin: 0px;
    width: 100%;
  }
}
</style>
