const routes = require('./routes')
function router(app){
    routes.forEach(route => {
        app.use(route.routeName,route.routeHandler)
    })
}

module.exports = router