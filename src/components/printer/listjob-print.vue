<template>
  <div class="listjob" id="print-listjob">
    <div class="row w-100">
      <div class="col" id="ListJobHeader">
        <h1>Print</h1>
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
</template>

<script>
import Summary from '@/components/summary-bottom.vue'
import thListJob from '@/components/ListJob-table/tableListJob.vue'
import trListJob from '@/components/ListJob-table/trListJob.vue'
export default {
  name: 'listjob-print',
  components: {
    Summary,
    thListJob,
    trListJob
  }
}
</script>
