<template>
  <div class="listjob" id="print-listjob">
    <div class="row w-100">
      <div class="col" id="ListJobHeader">
        <Header/>
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
import Header from '@/components/printer/header-printer'
import Summary from '@/components/summary-bottom.vue'
import thListJob from '@/components/ListJob-table/tableListJob.vue'
import trListJob from '@/components/ListJob-table/trListJob.vue'
export default {
  name: 'listjob-print',
  components: {
    Header,
    Summary,
    thListJob,
    trListJob
  }
}
</script>
