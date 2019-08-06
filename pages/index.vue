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
  </form>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('auth/login', this)
    }
  }
};
</script>

<style>

</style>
