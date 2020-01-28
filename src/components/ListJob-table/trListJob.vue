/* eslint-disable no-unreachable */
<template>
    <tbody class="table-hover">
        <tr class='show'>
            <th scope="row"> {{ user.list_id }} </th>
            <td> {{user.date }} </td>
            <td> {{user.customer }} </td>
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
    axios.get('http://localhost:3000/')
      .then((response) => {
        console.log(response.data)
        this.user = response.data
      })
  }
}
</script>
