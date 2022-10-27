<template>
    <table>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            User Id
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="course in courses"
          :key="course.id"
          class="style"
        >
          <td>{{ course.id }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.user_id }}</td>
        </tr>
      </tbody>
      </table>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $axios }) {
    const res = await $axios.$get('/courses', {
      headers: {
          'Authorization': localStorage.getItem('token')
        }
    })
    return { courses: res }
  }
}
</script>