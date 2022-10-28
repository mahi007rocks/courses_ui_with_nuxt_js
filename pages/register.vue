<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">
      Please Register
    </h1>
    <input v-model="username" type="text" class="form-control" placeholder="Name" required></input>
    <input v-model="email" type="email" class="form-control" placeholder="Email" required>
    <input v-model="password" type="password" class="form-control" placeholder="Password" required>
    <button class=" btn btn-lg btn-primary" type="submit">Sign Up</button>
  </form>
</template>
<script>
  export default {
    name: "register",
    data(){
      return {
        username: '',
        email: '',
        password: ' '
      }
    },
    methods: {
      async submit(){
        await fetch('https://rocky-caverns-45128.herokuapp.com/users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            user_name: this.username,
            email: this.email,
            password: this.password
          })
        } );
        await this.$router.push('/login');
      }
    }
  }
</script>