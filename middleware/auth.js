// TODO 2 - how can i use saved token here
// in order to guard the /admin route?
// I want to make API request here to validate the token.
export default async function ({ store, redirect }) {
  if (!store.state.auth.userToken) {
    redirect('/')
  }

  /*const isValid = await this.$axios.$post('/api/validate', {
    token: store.state.admin.userToken
  })*/
  const isValid = await new Promise((res) => {
    setTimeout(() => res(true), 1000)
  })
  if (!isValid) {
    redirect('/')
  }

  console.log('User authenticated!')
}
