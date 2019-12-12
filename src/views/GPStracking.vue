<template>
    <GPSTracking gpstrackingweb="http://www.igpstracking.net/"/>
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
