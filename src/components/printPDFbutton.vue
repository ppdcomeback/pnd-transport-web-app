<template>
    <button @click="print" type="button" class="btn btn-primary" id="printContent">พิมพ์เอกสาร</button>
</template>

<script>

import { Printd } from 'printd'
// const css = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
const d = new Printd()
export default {
  data () {
    return {
      output: null
    }
  },
  methods: {
    print () {
      d.print(document.getElementById('ListJobTable'))
    }
  }
}
</script>
