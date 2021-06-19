const Tutor = require('./modules')

var fi;
MyTutorial = function(){
    console.log('My Tutorial');

   function childTutor(){
        Tutor.tutorial();
    }
    MyTutorial.childTutor = childTutor;
}

MyTutorial();
(MyTutorial).childTutor();


let f = function mathOps(p1, p2, p3=defaultValue()){
    console.log(`first parm is ${p1}`)
    if(p1){
        console.log(p2());
    }else {
        console.log(p3);
    }
}
var defaultValue = function defaultV(){
    return ('tikasha'+87930);
}


let f1 = function mathOps(p1, p2, p3){
    if(p1){
        console.log(p2);
    }else {
        console.log(p3);
    }
}

f1('ybc',
    function(){ console.log('p2');},
    function(){ console.log('p2');});

    f1(0,
        function(){ console.log('p2');});
    
    f1(6,() => console.log('arrow'));