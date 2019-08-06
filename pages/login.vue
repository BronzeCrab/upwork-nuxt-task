<template>
  <form class="box" @submit.prevent="login">
    <div class="field">
      <input type="text" class="input" placeholder="email">
    </div>
    <div class="field">
      <input type="password" class="input" placeholder="password">
    </div>
    <div class="field">
      <button class="button is-info">Login</button>
    </div>
    <notifications position="bottom left"/>
  </form>
    
</template>

<script>
export default {
  mounted() {
    if (this.$route.query.status === 'email_confirmed') {
      this.$notify({
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      })
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', this)
    }
  }
};
</script>

<style>

</style>
