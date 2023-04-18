const timer = document.getElementById("timer")

function display(){
    var x = new Date()

    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';

    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;

    var minutes=x.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;

    var seconds=x.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;

    var datetime = x.getMonth() +1 + "/" + x.getDate() + "/" + x.getFullYear();
    datetime = datetime + ", " + hours + ":" + minutes + ":" + seconds
    timer.innerText = datetime + " " + ampm
    display_ref()
}

function display_ref()
{
    setTimeout('display()', 1000)
}
display_ref()