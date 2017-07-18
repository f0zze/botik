"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var app = new Koa();
app.use(function (ctx) {
    ctx.body = {
        hello: 'world'
    };
});
app.listen(7777);
