/**
 * Created by Administrator on 2018-11-21.
 */
function call(){

}
var obj={name:'hahah'};
function say(){
    console.log(this.name);
}

console.log(Function.prototype.call());
say();


//实现call方法

Function.prototype.myCall=function(thisObj){
   var source=this.toString();
    source.replace(/this/,function(resoult){
        return arguments[0]
    });

    //var func=new Function('thisObj',source);
    //(source)(thisObj);
    console.log(source);
    eval('('+source+')('+thisObj+')');
};

say.myCall(obj);