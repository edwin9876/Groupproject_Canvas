window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    // let typedtext = ''  
    // // $("canvas").append("<input>") ;
    // ctx.font = "20px Georgia";
    // //typedtext goes to text part, x and y is in the middle of box
    // ctx.fillText(`${typedtext}`,origX+(mouseX - origX)/2,origY+(mouseY - origY)/2);

})


//detect the screen size of the machine(70% * 80%)
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.8;

//click 'colour'button, each sectioned toolbox come out
$('#colourBtn').on('click', function () {
    $('#Colours').removeClass('hidden')
    $('#Tools,#Shapes').addClass('hidden')
})

//click plus then colourwheel comes up

let colourchange = function () {
        // fav1
        $('#fav1').on('click', function () {
            $('#colourwheel').removeClass('hidden')
            $('.plus').addClass('hidden')
        })
        //click colour, add to fav colour
        $('.indicolour').on('click', function () {
            let bgc = $(this).css("backgroundColor")
            $('#fav1').css("backgroundColor", bgc)
            $('#colourwheel').addClass('hidden')
            $('.plus').removeClass('hidden')
        })
    }

$('.plus').on('click', colourchange)


let colourchange2 = function () {
//fav2
$('#fav2').on('click',function(){
    $('#colourwheel').removeClass('hidden')
    $('.plus').addClass('hidden')
})
//click colour, add to fav colour
$('.indicolour').on('click',function(){
let bgc = $(this).css("backgroundColor")
$('#fav2').css("backgroundColor", bgc)
$('#colourwheel').addClass('hidden')
    $('.plus').removeClass('hidden')
})
}

$('.plus').on('click', colourchange2)    


//click button, each sectioned toolbox come out

$('#toolBtn').on('click', function () {
    $('#Tools').removeClass('hidden')
    $('#Colours,#Shapes').addClass('hidden')
})

$('#shapeBtn').on('click', function () {
    $('#Shapes').removeClass('hidden')
    $('#Colours,#Tools').addClass('hidden')
})

