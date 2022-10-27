import globalAxios from 'axios'

const actions = {
  async getAllCourses({ commit }) {
    // const token = localStorage.getItem('token')
    await this.$axios
      .get('/courses', {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
      .then(res => {
        const coursesArray = []
        for (const key in res.data) {
          /**  since endpoint returns an object of objects,
           /*   spread this and add a new key value pair
           /*  convert into array of objects
           **/
         coursesArray.push({ ...res.data[key], id: key })
        }
      },
      this.$router.push('/')
      )
      .catch(error => {
        this.$router.push('/')
        alert(error)
      })
  }
}

export default {
  actions
}
