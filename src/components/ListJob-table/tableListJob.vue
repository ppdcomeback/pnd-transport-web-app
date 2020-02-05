
<template>
<div>
    <v-card-title>
      <v-text-field
        v-model="search"
        label="ค้นหาข้อมูล"
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="trListjob"
    :search="search"
  />
</div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'ลำดับ',
          align: 'left',
          sortable: false,
          value: 'list_id'
        },
        { text: 'วันที่', value: 'date' },
        { text: 'ชื่อลูกค้า', value: 'customer' },
        { text: 'ชื่อพนักงาน', value: 'driver' },
        { text: 'ชนิดรถ', value: 'trucks' },
        { text: 'ต้นทาง', value: 'source' },
        { text: 'ปลายทาง', value: 'destination' },
        { text: 'ราคา', value: 'price' },
        { text: 'การชำระเงิน', value: 'payment' }
      ],
      trListjob: [],
      source_destination: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/getlistjob')
      .then((response) => {
        console.log(response.data)
        this.trListjob = response.data
        this.source_destination = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
