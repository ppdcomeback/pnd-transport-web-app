/* eslint-disable no-unreachable */
<template>

    <tbody class="table-hover">
        <tr id='v-for-object' class="show">
            <th v-for="id in user" scope="row"> {{ id.id }} </th>
            <td > {{ user.date }} </td>
            <td> {{ user.customer }} </td>
            <td>[sql]ชื่อพนักงาน</td>
            <td>[sql]ชนิดรถ</td>
            <td>[sql]รายการ</td>
            <td class="text-right">[sql]0000$</td>
            <td>[sql]การชำระเงิน</td>
        </tr>
    </tbody>
</template>

<script>
import axios from 'axios'

export default {
  name: 'show',
  data () {
    return {
      user: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/getlistjob')
      .then((response) => {
        console.log(response.data)
        this.user = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
