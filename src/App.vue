<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JS', body: 'Описание JS' },
        { id: 2, title: 'JS2', body: 'Описание JS2' },
        { id: 3, title: 'JS3', body: 'Описание JS3' },
      ],
    }
  },
  methods: {
    createPost: function (post) {
      this.posts.push(post)
    },
    removePost: function (post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
