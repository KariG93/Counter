let number = 0

$('.increase').click(() => {
    number = number +1
    console.log(number)
    $('#number').text(number);
})

$('.decrease').click(() => {
    number = number -1
    console.log(number)
    $('#number').text(number);
})