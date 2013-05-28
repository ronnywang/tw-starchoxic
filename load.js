var json_base = 'https://github.com/ronnywang/tw-starchoxic/blob/master/';
var list_js = 'https://raw.github.com/ronnywang/tw-starchoxic/master/list.json';

starchoxic_list = function(map){
    $('a').each(function(){
        var $this = $(this);
        var value = map[$this.attr('href')];
        if (!value) {
            return;
        }
        for (var id in value) {
            $('<a></a>').attr('href', json_base + value[id]).attr('target', '_blank').text(id).insertAfter($this);
        }
    });
};

$.getScript(list_js);
