<template>
<div>
  <div>
    <div>
      <routerlink/>
      <h1>This is an GPSTracking page</h1>
    </div>
    <div class="about">
      <iframe id="iframe1" src="http://www.igpstracking.net/" frameborder="0"></iframe>
    </div>
  </div>
</div>
</template>

<script>
import routerlink from '@/components/router-link.vue'

export default {
  name: 'listjob',
  components: {
    routerlink
  }
}
</script>
