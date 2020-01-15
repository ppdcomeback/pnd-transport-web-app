<template>
    <div>
      <h1>This is an GPSTracking page</h1>
      <GPSTracking/>
    </div>
</template>

<script>
// @ is an alias to /src
import GPSTracking from '@/components/GPStracking.vue'

export default {
  name: 'gpstrackingweb',
  components: {
    GPSTracking
  }
}
</script>
