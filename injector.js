/**
 * Created by Administrator on 2018-11-21.
 */
//�������ע��
var greet=function(words,school){
    console.log(words.text,school.text);
};
//���൱�����ǵĶ���� �������������ܹ�ע��Ķ�����߷���
var registry={
    words:{
        text:'hello'
    },
    school:{
        text:'woshixiaoming'
    }
};
//�Զ�ע�������������в�������ĺ���
var inject=function(func){
    var source=func.toString();
    var matchers=source.match(/function\s?\((\w+),\)/);
    var argnames=matchers.slice(1);
    var args=[];
    for(var i=0;i<argnames.length;i++){
        var argObj=registry[argnames[i]];
        args.push(argObj);
    }
    func.apply(null,args);

    //func(registry.words);
};
inject(greet);//���hello
