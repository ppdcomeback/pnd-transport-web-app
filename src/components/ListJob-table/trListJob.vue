/* eslint-disable no-unreachable */
<template>
    <tbody class="table-hover">
        <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
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
  data () {
    return {
      listjobs: []
    }
  },
  created () {
    let res = axios.get('../../../server/query.ts')
    let data = res.data
    console.log(data)
  }
}

</script>
