
function add(){
    let act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1)
        f.ddd.value+='+';
    }else{
        f.ddd.value+='+';
    }
}

function sub(){
    let act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1)
        f.ddd.value+='-';
    }else{
        f.ddd.value+='-';
    }
}

function di(){
    let act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1)
        f.ddd.value+='/';
    }else{
        f.ddd.value+='/';
    }
}

function mul(){
    let act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1)
        f.ddd.value+='*';
    }else{
        f.ddd.value+='*';
    }
}