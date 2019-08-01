<template>
  <div class="conatiner">
    <h1>Admin Page</h1>
    <a class="button" @click="admin_action()">Button</a>
  </div>
</template>

<script>
export default {
  methods: {
    admin_action() {
      this.$store.dispatch('admin/admin_action')
    }
  },
  middleware: 'auth'
};
</script>
