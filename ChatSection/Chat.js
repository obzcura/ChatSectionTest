$(function(){
    var container_html = '<div id="chatSection"> <div class="ChatHead" data-open="close"> <div class="circle"> <i class="fa fa-chevron-down" aria-hidden="true"></i> </div> </div> <div class="ChatBody"> </div> </div> ';
    $('body').append(container_html);

    var messages = '{"chat": [{"name": "Kerem Suer","message": "If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.","image": "./img/KeremSuer.jpg","status":"offline"},{"name": "Bill S Kenney","message": "The book is in front of the table.","image": "./img/BillKenney.jpg","status":"online"},{"name": "Oykun Yilmaz","message": "She did her best to help him.","image": "./img/OykunYilmaz.jpeg","status":"offline"},{"name": "Rogie King","message": "If Purple People Eaters are real… where do they find purple people to eat?","image": "./img/RogieKing.jpg","status":"dnd"},{"name": "Victor Erixon","message": "She works two jobs to make ends meet; at least, that was her reason for not having time to join us.","image": "./img/VictorErixon.jpg","status":"online"},{"name": "Fabio Basile","message": "I am counting my calories, yet I really want dessert.","image": "./img/FabioBasile.jpg","status":"dnd"},{"name": "Charlie Waite","message": "I will never be this young again. Ever. Oh damn… I just got older.","image": "./img/CharlieWaite.jpeg","status":"online"}]}',
    data = JSON.parse(messages); 
    html = "";

    for(i=0;i<data.chat.length;i++){
        var statuscircle = "";
        switch (data.chat[i].status) {
            case "online":
                statuscircle = "green"
                break;
            case "offline":
                statuscircle = "pink"
                break;
            case "dnd":
                statuscircle = "orange"
                break;
        }
        html+= "<div class='chatBox'>"+
            "<div class='pic-container'><div class='pic-circle'><img src='"+data.chat[i].image+"'></div><div class='status-circle' style='background-color:"+statuscircle+";'></div></div>"+
            "<div class='msg-container'><p class='chat-name'>"+data.chat[i].name+"</p><p class='chat-message'>"+data.chat[i].message+"</p></div>"+
        "</div>";
    }
    html += "<div class='endBox'></div>";
    $(".ChatBody").html(html);  

    $(".ChatBody").on('click', '.chatBox', function(){
        $('.ChatBody .chatBox').css('backgroundColor','#E2EAED');
        $(this).css('backgroundColor','#F9FAFB');
    })

    $(".ChatHead").on('click', function(){
        if($(this).data("open")==="close"){
            $(".ChatHead .fa").css("transform","rotate(180deg");
            $('#chatSection').animate({
                height: "100%"
            }, 500);
            $(".ChatHead").data("open","open");
        }else{
            $(".ChatHead .fa").css("transform","rotate(0deg");
            $('#chatSection').animate({
                height: "50px"
            }, 500);
            $(".ChatHead").data("open","close");
        }

    })
});