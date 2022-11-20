export default function ({store, redirect}) {
    if (!store.state.auth.usuario.status.loggedIn) {
        return redirect('/Login')
    }
}