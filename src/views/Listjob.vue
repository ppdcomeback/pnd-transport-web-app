<template>
  <div class="listjob">
    <div class="row">
      <div class="col" id="ListJobHeader">
        <h1>This is a listjob page</h1>
      </div>
      <div class="col-2">
        <printPDFbutton/>
      </div>
    </div>
    <div id="ListJobTable">
      <table class="table table-hover">
        <thListJob/>
        <trListJob/>
    </table>
    </div>
  </div>
</template>

<script>
import thListJob from '@/components/ListJob-table/tableListJob.vue'
import trListJob from '@/components/ListJob-table/trListJob.vue'
import printPDFbutton from '@/components/printPDFbutton.vue'
export default {
  name: 'listjob',
  components: {
    thListJob,
    trListJob,
    printPDFbutton
  }
}
</script>
