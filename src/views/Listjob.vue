<template>
  <div class="about">
    <h1>This is a listjob page</h1>
    <table class="table table-hover">
        <thListJob/>
        <trListJob/>
    </table>
  </div>
</template>

<script>
import thListJob from '@/components/ListJob-table/tableListJob.vue'
import trListJob from '@/components/ListJob-table/trListJob.vue'
export default {
  name: 'listjob',
  components: {
    thListJob,
    trListJob
  }
}
</script>
