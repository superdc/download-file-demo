const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  if(ctx.path === '/'){
    ctx.response.set('Content-Type', 'text/html');
    ctx.body = fs.readFileSync('./index.html');
  }else if(ctx.path === '/image'){
    ctx.response.set('Content-Type', 'image/jpg');
    ctx.body = fs.readFileSync('./image.jpg');
  }else if(ctx.path === '/blob'){
    ctx.response.set('Content-Type','image/jpg');
    ctx.body = fs.readFileSync('./image.jpg');
  }else if(ctx.path === '/inline-image'){
    ctx.response.set('Content-Disposition', 'inline');
    ctx.response.set('Content-Type','image/jpg');
    ctx.body = fs.readFileSync('./image.jpg');
  }else if(ctx.path === '/inline-image-with-name'){
    ctx.response.set('Content-Disposition', 'inline;filename=inline.jpg');
    ctx.response.set('Content-Type','image/jpg');
    ctx.body = fs.readFileSync('./image.jpg');
  }else if(ctx.path === '/download'){
    ctx.response.set('Content-Disposition', "attachment;filename*=utf-8''%E4%B8%8B%E8%BD%BD%20%E5%93%88%E5%93%88.jpg");
    ctx.response.set('Content-type', 'image/jpg');
    ctx.body = fs.readFileSync('./image.jpg');
  }else if(ctx.path === '/download2'){
    ctx.response.set('Content-Disposition', 'attachment;filename="/a/b/c.jpg"')
    ctx.response.set('Content-type', 'image/jpg');
    ctx.body = fs.readFileSync('./image.jpg');
  }else if(ctx.path === '/form'){
    ctx.response.set('Content-Disposition', "attachment;filename*=utf-8''%E4%B8%8B%E8%BD%BD%20%E5%93%88%E5%93%88.jpg");
    ctx.body = fs.readFileSync('./image.jpg');
  }
});

app.listen(3000, ()=>{
  console.log('App is started at port 3000!')
});