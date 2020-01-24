<template>
<div>
  <div>
    <routerlink/>
  </div>
  <div class="listjob">
    <div class="row w-100">
      <div class="col" id="ListJobHeader">
        <h1>This is a listjob page</h1>
      </div>
      <div class="col-2">
        <printPDFbutton/>
      </div>
    </div>
    <div id="ListJobTable">
      <table class="table table-hover table-bordered">
        <thListJob/>
        <trListJob/>
        <Summary/>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import Summary from '@/components/summary-bottom.vue'
import thListJob from '@/components/ListJob-table/tableListJob.vue'
import trListJob from '@/components/ListJob-table/trListJob.vue'
import printPDFbutton from '@/components/printPDFbutton.vue'
import routerlink from '@/components/router-link.vue'

export default {
  name: 'listjob',
  components: {
    routerlink,
    Summary,
    thListJob,
    trListJob,
    printPDFbutton
  }
}
</script>
