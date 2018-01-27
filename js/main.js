function getInfo() {
    
    var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "RobotCaleb", "noobs2ninjas","MedryBW"];
    var url = "https://wind-bow.glitch.me/twitch-api";
    //for (let i=0; i<usernames.length; ++i) {
    usernames.forEach(function(username) {
        $.ajax({
            url: url+"/streams/"+username+'/',
            type: 'GET',
            success: function(data) {
                //console.log(data);
                var name, desc='', logo, link, status, color, content;
                logo = 'thunderstorm.jpg';
                
                var html = "";
                if (data.stream != null) {
                      name = data.stream.channel.display_name;
                      desc = data.stream.channel.status;
                      logo = data.stream.preview.medium;
                      link = 'https://twitch.tv/'+username;
                      status = '&#9679;';
                      color = "green";
                      content = "Online";
                      //console.log(name+'\n'+desc+'\n'+logo+'\n'+link+'\n'+status);
                      // console.log(username);
                }
                else {
                    name = username;
                    link = 'https://twitch.tv/'+username; 
                    status = '&#33;';
                    color = "red";
                    content = "Offline";
                    //console.log(name+'\n'+desc+'\n'+logo+'\n'+link+'\n'+status);
                }
                html += '<div class="row text-center menu"><div class="media"><div class="media-left media-middle"><img src='+ logo +' class="media-object img-circle"></div><div class="media-body"><h4 class="media-heading"><a target="_blank" href="'+ link +'">'+ name +'</a><span data-toggle="tooltip" title="'+ content +'" id="status" class="'+ color +'">'+ status +'</span></h4><p id="desc" class="text-muted"><i>'+ desc +'</i></p></div></div></div>';
                $('#display').prepend(html);
            }
        });
    });
}
$(document).ready(function() {
    getInfo();
    $('.selector').click(function() {
        var status = $(this).attr('id');
        if (status === "offline") {
            // $('.menu').addClass("hidden");
            $('.menu .media .media-body h4.media-heading span#status').each(function() {
                var value = $(this).text();
                console.log(value);
                if (value === '!') {
                  $(this).parent().parent().parent().parent().removeClass("hidden");
                }
                else {
                    $(this).parent().parent().parent().parent().addClass("hidden");
                }
                //console.log(value);
            });
        }
        else if(status === "online") {
            $('.menu .media .media-body h4.media-heading span#status').each(function() {
                var value = $(this).text();
                console.log(value);
                if (value === '!') {
                    $(this).parent().parent().parent().parent().addClass("hidden");
                }
                else {
                    $(this).parent().parent().parent().parent().removeClass("hidden");
                }
                //console.log(value);
            });
        }
        else if(status === "all") {
            $('.menu').removeClass("hidden");
        }
    });
    
});












