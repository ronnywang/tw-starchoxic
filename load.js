var json_base = 'https://github.com/ronnywang/tw-starchoxic/blob/master/';
var list_js = 'https://raw.github.com/ronnywang/tw-starchoxic/master/list.json';

starchoxic_list = function(map){
    $('a').each(function(){
        var $this = $(this);
        if (!map[$this.attr('href')]) {
            return;
        }
        $('<a></a>').attr('href', json_base + map[$this.attr('href')]).attr('target', '_blank').text('json').insertAfter($this);
    });
};

$.getScript(list_js);
