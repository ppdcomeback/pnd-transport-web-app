<template>
    <button @click="print" type="button" class="btn btn-primary glyphicon glyphicon-name" id="printContent">พิมพ์เอกสาร</button>
</template>

<script>
import { Printd } from 'printd'
import { Prop } from 'vue-property-decorator'
const btcss = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
const cssText = '#table-header{ color: yellow;}'
const d = new Printd()

// const printPage = this.printurl
// const printURL = 'http://localhost:8080/' + 'print' + printPage
const printURL = 'http://localhost:8080/printlistjob'
export default {
  data () {
    return {
      output: null
    }
  },
  methods: {
    print () {
      d.printURL(printURL, ({ launchPrint }) => {
        console.log('Content loaded!')
        // fire printing!
        launchPrint()
      })
    }
  }
}
</script>
