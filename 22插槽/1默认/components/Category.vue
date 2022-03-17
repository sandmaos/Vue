<template>
  <div class="category">
      <h3>{{title}}</h3>
      <slot></slot>
      <!-- <ul>
          <li v-for="(item,index) in listData" :key="index">{{item}}</li>
      </ul>
      <img v-show="title==='美食'" src="https://www.thisislocallondon.co.uk/resources/images/12088462.jpg" alt=""> -->
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}

</style>