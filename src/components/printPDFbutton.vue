<template>
    <button @click="print" type="button" class="btn btn-primary glyphicon glyphicon-name" id="printContent">พิมพ์เอกสาร</button>
</template>

<script>

import { Printd } from 'printd'
const btcss = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
const cssText = '#table-header{ color: yellow;}'

const d = new Printd()
// const d = new Printd()

export default {
  data () {
    return {
      output: null
    }
  },
  methods: {
    print () {
      // d.print(document.getElementById('ListJobTable'), [btcss])
      //

      d.printURL('http://localhost:8080/printlistjob', ({ launchPrint }) => {
        console.log('Content loaded!')
        // fire printing!
        launchPrint()
      })
    }
  }
}
</script>
