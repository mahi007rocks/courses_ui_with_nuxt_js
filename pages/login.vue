<template>
  <form @submit.prevent="login">
    <h1 class="h3 mb-3 fw-normal">
      Please sign in
    </h1>
    <input v-model="email" type="email" class="form-control" placeholder="Email" required>
    <input v-model="password" type="password" class="form-control" placeholder="Password" required>
    <button class=" btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>
<script>
  export default  {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() { 
        const loginForm = {
          email: this.email,
          password: this.password
        }
      this.$store.dispatch('login', loginForm)
      this.$store.dispatch('getAllCourses', null, {root:true})
      this.showLoader = false
      // this.$router.push('/default')
      }
    }
}
</script>
