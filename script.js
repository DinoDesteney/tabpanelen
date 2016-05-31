$('.knoppen').each( function() {
    var dezeKnop = $(this);
    var actieveknop = dezeKnop.find('li.actief');
    var link = actieveknop.find('a');
    var actiefPaneel = $(link.attr('href'));
    
    dezeKnop.on('click', 'a', function(e) {
        e.preventDefault();
        var link = $(this);
//        alert(link.attr('href'));
        var beoogdId = this.hash;
//        alert(beoogdId);
        
        if(beoogdId && !link.parent().is('.actief')){
            actiefPaneel.removeClass('actief');
            actieveknop.removeClass('actief');
            
            actiefPaneel = $(beoogdId).addClass('actief');
            actieveknop = link.parent().addClass('actief');
        }
        
    })
});

$('.paneel').css('display','none')