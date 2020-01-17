<template>
    <button @click="print" type="button" class="btn btn-primary" id="printContent">พิมพ์เอกสาร</button>
</template>

<script>
export default {
  data () {
    return {
      output: null
    }
  },
  methods: {
    print () {
      // Pass the element id here
      this.$htmlToPaper('ListJobTable', () => { console.log('Printing completed or was cancelled!') })
    }
  }
}
</script>
