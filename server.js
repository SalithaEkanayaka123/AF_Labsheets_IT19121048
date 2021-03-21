const Koa = require('koa');
const HomeRoutes = require('./routes/home.router');
const postsRoutes = require('./routes/posts.routes');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
app.use(postsRoutes.routes())
    .use(postsRoutes.allowedMethods());
console.log('Application is running on port 3000');
app.listen(3000);
