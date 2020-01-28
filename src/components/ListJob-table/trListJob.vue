/* eslint-disable no-unreachable */
<template>
<div class="show">
    <tbody class="table-hover">
        <tr>
            <th scope="row"> {{ user.name }} </th>
            <td> {{user.lastname }} </td>
            <td> {{user.customer }} </td>
            <td>[sql]ชื่อพนักงาน</td>
            <td>[sql]ชนิดรถ</td>
            <td>[sql]รายการ</td>
            <td class="text-right">[sql]0000$</td>
            <td>[sql]การชำระเงิน</td>
        </tr>
    </tbody>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'show',
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/')
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
