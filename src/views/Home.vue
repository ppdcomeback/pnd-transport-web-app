<template>
<div>
  <div>
  <routerlink/>
</div>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your PND App"/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import routerlink from '@/components/router-link.vue'

export default {
  name: 'home',
  components: {
    routerlink,
    HelloWorld
  }
}
</script>
