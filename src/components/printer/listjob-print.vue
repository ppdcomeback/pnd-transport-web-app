
<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ลำดับ</th>
          <th class="text-left">วันที่</th>
          <th class="text-left">ชื่อลูกค้า</th>
          <th class="text-left">ชื่อพนักงาน</th>
          <th class="text-left">ชนิดรถ</th>
          <th class="text-left">ต้นทาง</th>
          <th class="text-left">ปลายทาง</th>
          <th class="text-left">ราคา</th>
          <th class="text-left">การชำระเงิน</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in trListjob" :key="item.list_id">
          <td>{{ item.list_id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.customer }}</td>
          <td>{{ item.driver }}</td>
          <td>{{ item.trucks }}</td>
          <td>{{ item.source }}</td>
          <td>{{ item.destination }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.payment }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      trListjob: []
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
