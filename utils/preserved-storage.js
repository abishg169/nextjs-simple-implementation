import { store } from "@/store/index";

export function removeLoginDetails() {
  setTimeout(() => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
  })
}

export function getToken () {
    const state = store.getState();
    return state.auth.token;
}
