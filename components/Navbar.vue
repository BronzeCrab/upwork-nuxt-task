<template>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="tabs is-right">
                <ul>
                  <li :class="{ 'is-active': $route.name === 'index' }">
                    <nuxt-link to="/">
                      Login
                    </nuxt-link>
                  </li>
                  <li :class="{ 'is-active': $route.name === 'admin' }">
                    <nuxt-link to="/admin">
                      Admin
                    </nuxt-link>
                  <li v-show="isLoggedIn">
                    <a @click="logout">Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn']
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout', this)
    }
  }
}
</script>

<style scroped lang="scss">
</style>
