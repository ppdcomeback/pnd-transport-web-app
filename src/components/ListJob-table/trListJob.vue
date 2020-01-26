<template>
    <tbody class="table-hover">
        <tr v-bind="user" methods >
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.date }}</td>
            <td>{{ user.customer }}</td>
            <td>[sql]ชื่อพนักงาน</td>
            <td>[sql]ชนิดรถ</td>
            <td>[sql]รายการ</td>
            <td class="text-right">[sql]0000$</td>
            <td>[sql]การชำระเงิน</td>
        </tr>
    </tbody>
</template>

<script>
var app = new Vue({
  el: '#app',
  data: {
    users: ''
  },
  methods: {

  }
})
</script>
