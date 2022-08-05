var server_ip_adr= 'mc.hypixel.net'
var server_port_adr= '/25565'

function copy_ip(){

    var copyText= server_ip_adr;
    navigator.clipboard.writeText(copyText);
    //alert("Copied the text: " + copyText);
    $('#jucatori').html('IP Copiat');
    $(document).ready(function()
    {
        setTimeout(function()
        {
            $.getJSON('https://api.minetools.eu/ping/'+server_ip_adr+server_port_adr, function (status) {
            var juc_on = status.players.online;
            $("#jucatori").html('Playeri Online: '+'<br>'+((juc_on = juc_on.toString().split("."))[0] = juc_on[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), juc_on.join(".")));});
        },1000);
    });
}

$.getJSON('https://api.minetools.eu/ping/'+server_ip_adr+server_port_adr, function (status) {
    var juc_on = status.players.online;
    $("#jucatori").html('Playeri Online: '+'<br>'+((juc_on = juc_on.toString().split("."))[0] = juc_on[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), juc_on.join(".")));
});