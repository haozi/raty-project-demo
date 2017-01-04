export default router => {
  // GET / => controllers/home.js indexAction
  router.get('/', 'home.index')
}
