<template>
  <div>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JS', body: 'Описание JS' },
        { id: 1, title: 'JS2', body: 'Описание JS2' },
        { id: 1, title: 'JS3', body: 'Описание JS3' },
      ],
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
