// var inputElement4 =
// document.querySelector('input[type="text"]');
// inputElement4.onkeydown = function(e)
// {
//     console.log(e.target.value);
// }
// inputElement4.onkeyup = function(e)
// {
//     console.log(e.target.value);
// }

// inputElement4.onkeyup = function(e)
// {
    
//     switch(e.which)
//     {
//     case 27:
//         console.log('Exit');
//         break;
//         case 13:
//         console.log('SEND CHAT');
//         break;
    
// }
// console.log(e.which);
// }
// inputElement4.onkeypress = function(e)
// {
//     console.log(e.which);
//     switch(e.which)
//     {
//     case 27:
//         console.log('Exit');
//         break;
//         case 13:
//         console.log('SEND CHAT');
//         break;
    
// }
// }

document.onkeypress = function(e)
{
     console.log(e.which);
    switch(e.which)
    {
    case 27:
        console.log('Exit');
        break;
        case 13:
        console.log('SEND CHAT');
        break;
    
}
}