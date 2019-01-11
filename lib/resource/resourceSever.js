/**
 * Created by Administrator on 2019-01-02.
 */
var express=require('express');
var path=require('path');
var app=express();

app.use(express.static(__dirname));//提供静态文件资源目录
app.use(require('body-parser').json());
app.get('/',function(req,res){
    res.sendFile(path.resolve('ngResource.html'));
});

var books=[{id:1,name:'node.js'}];


//当前用户请求的books路径的时候 给他返回一个books
app.route("/books").get(function(req,res){
    res.send(books);

}).post((req,res)=>{//post请求用于增加一个资源
    //如何接受客户端传过来的post请求

    var book=req.body;//接收客户端传来的请求体
    book.id=books[books.length-1].id+1;
    books.push(book);//在吧请求体存入对象中返回给客户端
    res.send(book);
});

app.route('/books/:id').delete((req,res)=>{
    books=books.filter((book)=>{
        console.log(book.id);
        return book.id!=req.params.id;
    });
    //console.log(req.params.id);
    //删除一个对象后返回一个空对象，这是resfull的规定；
    res.send({});
}).put((req,res)=>{
    books=books.map((item)=>{
        if(item.id==req.params.id){
            return req.body;
        }else{
            return item;
        }
    });
    res.send(req.body);
});
app.listen(9090);


















