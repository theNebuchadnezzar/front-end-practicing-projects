$(function () {
	tabs($(#tabHead a),$(#tabContent table));
})

var tabs = function(tabHead, tabContent){
    tabHead.click(function(){
        var index = tab.index(this);
        tab.removeClass('focus');
        $(this).addClass('focus');
        uiTab.hide();
        uiTab.eq(indx).show();
    })    
}