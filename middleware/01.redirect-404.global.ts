export default defineNuxtRouteMiddleware(async (_to, _from) => {
  if (_to.matched.length === 0) {
    return navigateTo("/");
  }
});
