<template>
  <div>
    <h3>Список постов</h3>
    <post-item v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
