$(document).ready(function(){
    sceneSwitchItem();
    $('#btn-1-1-1').click(function(event)){
        $('#Modal1-1-1').modal('hide')
        $('#Modal-sus-1-1').modal('show')
    }

    $('#btn-1-1-2').click(function(event)){
        $('#Modal1-1-1').modal('hide')
        $('#Modal-fail').modal('show')
    }
});
});



function check(n1,n2,isCorrect){
    $('#Modal-'+n1+'-'+n2).modal('hide')
    if(isCorrect){
        $('#Modal-'+n1+'-'+n2).modal('show')

    }
    else{
        $('Modal-fail').modal('show')
    }

}

function sceneSwitchItem(){
    $('.home').click((event)=>{
        sceneSwitch(0);
        }
    );

    for(let i=1; i<=5; i++){
        $('.scene-item-0-'+i).click((event)=>{
            sceneSwitch(i);
            }
        );
    }
}

// $('.scene-item-0-1').click(function(event){
//     sceneSwitch(1);
// });


// $('.scene-item-0-2').click(function(event){
//     sceneSwitch(2);
// });

// $('.scene-item-0-3').click(function(event){
//     sceneSwitch(3);
// });


let sceneSwitch=(sn)=>{
    $('.game-home').hide();
    $('.game-1').hide();
    $('.game-2').hide();
    $('.game-3').hide();
    $('.game-4').hide();
    $('.game-5').hide();
    if(sn==0){
        $('.game-home').show();
    }else{
        $('.game-'+sn).show();
    }
} 

function sceneSwitch0(sn){
    $('.game-home').hide();
    $('.game-1').hide();
    $('.game-2').hide();
    $('.game-3').hide();
    $('.game-4').hide();
    $('.game-5').hide();
    $('.game-'+sn).show();
} 

// function function_name(argument){

// }

// let function_name=(argument)=>{
    
// }