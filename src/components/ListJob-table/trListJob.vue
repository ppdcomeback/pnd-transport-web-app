/* eslint-disable no-unreachable */
<template>

    <tbody class="table-hover">
        <tr id='v-for-object' class="show" v-for="id in list" :key="id.id" scope="row">
            <th > {{ id.list_id }} </th>
            <td><t v-for="ti in t" :key="ti.id" scope="row">{{ ti }} </t></td>
            <td> {{ id.customer }} </td>
            <td>{{id.dealer}}</td>
            <td>{{id.trucks}} </td>
            <td>{{id.source}} {{id.destination}}</td>
            <td class="text-right">{{id.price}}</td>
            <td>{{id.status}}</td>
        </tr>
    </tbody>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'show',
  data () {
    return {
      list: {},
      t: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/getlistjob')
      .then((response) => {
        console.log(response.data)
        this.list = response.data
        this.t = moment(this.list.date).format('DD/MM/YYYY')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
