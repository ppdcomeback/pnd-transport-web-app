<!--<template>
  <pdf src="./static/relativity.pdf"></pdf>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  }
}-->
<template>
    <div>
        <button
            @click="printd"
        >
            print
        </button>
        <pdf
            ref="myPdfComponent"
            src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
        ></pdf>
    </div>
</template>

<script>

import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  methods: {
    printd () {
      this.$refs.myPdfComponent.pdf.forEachPage(function (page) {
        return page.getTextContent()
          .then(function (content) {
            var text = content.items.map(item => item.str)
            console.log(text)
          })
      })
    }
  }
}

</script>
