function one(){
    var one=document.getElementById("lione");
    var two=document.getElementById("litwo");
    var three=document.getElementById("lithree");
    var four=document.getElementById("lifour");
    var five=document.getElementById("lifive");
    var six=document.getElementById("lisix");
    var seven=document.getElementById("liseven");
    one.setAttribute('class','list-group-item active');
    two.setAttribute('class','list-group-item');
    three.setAttribute('class','list-group-item');
    four.setAttribute('class','list-group-item');
    five.setAttribute('class','list-group-item');
    six.setAttribute('class','list-group-item');
    seven.setAttribute('class','list-group-item');
}

function two(){
    var one=document.getElementById("lione");
    var two=document.getElementById("litwo");
    var three=document.getElementById("lithree");
    var four=document.getElementById("lifour");
    var five=document.getElementById("lifive");
    var six=document.getElementById("lisix");
    var seven=document.getElementById("liseven");
    one.setAttribute('class','list-group-item');
    two.setAttribute('class','list-group-item active');
    three.setAttribute('class','list-group-item');
    four.setAttribute('class','list-group-item');
    five.setAttribute('class','list-group-item');
    six.setAttribute('class','list-group-item');
    seven.setAttribute('class','list-group-item');
}
function three(){
    var one=document.getElementById("lione");
    var two=document.getElementById("litwo");
    var three=document.getElementById("lithree");
    var four=document.getElementById("lifour");
    var five=document.getElementById("lifive");
    var six=document.getElementById("lisix");
    var seven=document.getElementById("liseven");
    one.setAttribute('class','list-group-item');
    two.setAttribute('class','list-group-item');
    three.setAttribute('class','list-group-item active');
    four.setAttribute('class','list-group-item');
    five.setAttribute('class','list-group-item');
    six.setAttribute('class','list-group-item');
    seven.setAttribute('class','list-group-item');
}
function four(){
    var one=document.getElementById("lione");
    var two=document.getElementById("litwo");
    var three=document.getElementById("lithree");
    var four=document.getElementById("lifour");
    var five=document.getElementById("lifive");
    var six=document.getElementById("lisix");
    var seven=document.getElementById("liseven");
    one.setAttribute('class','list-group-item');
    two.setAttribute('class','list-group-item');
    three.setAttribute('class','list-group-item');
    four.setAttribute('class','list-group-item active');
    five.setAttribute('class','list-group-item');
    six.setAttribute('class','list-group-item');
    seven.setAttribute('class','list-group-item');
}
function five(){
    var one=document.getElementById("lione");
    var two=document.getElementById("litwo");
    var three=document.getElementById("lithree");
    var four=document.getElementById("lifour");
    var five=document.getElementById("lifive");
    var six=document.getElementById("lisix");
    var seven=document.getElementById("liseven");
    one.setAttribute('class','list-group-item');
    two.setAttribute('class','list-group-item');
    three.setAttribute('class','list-group-item');
    four.setAttribute('class','list-group-item');
    five.setAttribute('class','list-group-item active');
    six.setAttribute('class','list-group-item');
    seven.setAttribute('class','list-group-item');
}
function six(){
    var one=document.getElementById("lione");
    var two=document.getElementById("litwo");
    var three=document.getElementById("lithree");
    var four=document.getElementById("lifour");
    var five=document.getElementById("lifive");
    var six=document.getElementById("lisix");
    var seven=document.getElementById("liseven");
    one.setAttribute('class','list-group-item');
    two.setAttribute('class','list-group-item');
    three.setAttribute('class','list-group-item');
    four.setAttribute('class','list-group-item');
    five.setAttribute('class','list-group-item');
    six.setAttribute('class','list-group-item active');
    seven.setAttribute('class','list-group-item');
}
function seven(){
    var one=document.getElementById("lione");
    var two=document.getElementById("litwo");
    var three=document.getElementById("lithree");
    var four=document.getElementById("lifour");
    var five=document.getElementById("lifive");
    var six=document.getElementById("lisix");
    var seven=document.getElementById("liseven");
    one.setAttribute('class','list-group-item');
    two.setAttribute('class','list-group-item');
    three.setAttribute('class','list-group-item');
    four.setAttribute('class','list-group-item');
    five.setAttribute('class','list-group-item');
    six.setAttribute('class','list-group-item');
    seven.setAttribute('class','list-group-item active');
}

$(document).ready(function(){
    $(window).scroll(function(){
        var s=$(window).scrollTop();
        console.log(s);
        if(s<400){
            one();
        }else if (s>=400&&s<700){
            two();
        }
        else if (s>=700&&s<1000){
            three();
        }
        else if (s>=1000&&s<1300){
            four();
        }
        else if (s>=1300&&s<1600){
            five();
        }
        else if (s>=1600&&s<1900){
            six();
        }
        else if (s>=1900){
            seven();
        }
    });
});