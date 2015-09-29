var drafted = [];

function draft(player) {
    drafted.push(player);
    player.className = 'taken ' + player.className;

    $('#current-pick').html(parseInt($('#current-pick').html(), 10) + 1);
}

function undo() {
    if (drafted.length == 0) {
        return;
    }
    var player = drafted.pop();
    player.className = player.className.replace('taken', '');

    $('#current-pick').html(parseInt($('#current-pick').html(), 10) - 1);
}

$('#player-search').bind('input propertychange', function() {
    var search = $(this).val();

    $('td.name').each(function(index, node) {
        var name = node.innerHTML;
        var parentNode = node.parentNode;
        
        if (!search || name.indexOf(search) != -1) {
            parentNode.className = parentNode.className.replace('filter', '');
        } else if (name.indexOf(search) == -1 && parentNode.className.indexOf('filter') == -1) {
            parentNode.className = 'filter ' + parentNode.className;
        }
    });
})
