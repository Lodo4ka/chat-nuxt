// eslint-disable-next-line prettier/prettier
export default function ({ store, redirect }) {
  if (!Object.keys(store.state.user).length) {
    redirect('/?message=noUser')
  }
}
