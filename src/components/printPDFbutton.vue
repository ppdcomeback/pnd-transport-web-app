<template>
    <button @click="print" type="button" class="btn btn-primary glyphicon glyphicon-name" id="printContent">พิมพ์เอกสาร</button>
</template>

<script>

import { Printd } from 'printd'
import printURL from '@/components/ListJob-table/tableListJob'
const btcss = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
const cssText = '#table-header{ color: yellow;}'
const d = new Printd()

export default {
  data () {
    return {
      output: null
    }
  },
  methods: {
    print () {
      d.printURL(printURL.printURL, ({ launchPrint }) => {
        console.log('Content loaded!')
        // fire printing!
        launchPrint()
      })
    }
  }
}
</script>
