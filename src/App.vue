<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button style="margin: 15px 0" @click="showDialog"
      >Создать пост</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list v-if="!isPostsLoading" :posts="posts" @remove="removePost" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import axios from 'axios'

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
    }
  },
  methods: {
    createPost: function (post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost: function (post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    showDialog: function () {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        )
        this.posts = response.data
      } catch (e) {
        alert('Error')
      } finally {
        this.isPostsLoading = false
      }
    },
  },
  mounted() {
    this.fetchPosts()
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
