export const state = () => ({})
export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log('MEssage received', data)
  }
}
