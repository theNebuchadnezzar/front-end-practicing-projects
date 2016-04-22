window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;      
    var animated = false;
    var timer;
    
    function play() {
        timer = setInterval(function () {
            next.onclick();
        },3000);
    }
    function stop() {
        clearInterval(timer);
    }
    for (var i = 0; i < buttons.length; i++) {
         buttons[i].onclick = function () {
             if(this.className == 'on'){
                 return;
             }
             var myIndex = parseInt(this.getAttribute('index'));
             var offset = -800 * (myIndex - index);
             animate(offset);
             index = myIndex;
             showButtons(myIndex);
             if(!animated){
                 animate(offset);
             }
         };
        
    }
    
    
    
    
    function showButtons() {
        for (var i = 0; i < buttons.length; i++) {
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index -1].className ='on';
    }
    
    
    function animate(offset) {
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;//总时间
        var interval = 10;//间隔时间
        var step = offset/(time/interval);//每次位移量
        function go() {         
     
            if((step < 0 && parseInt(list.style.left) > newLeft)||(step > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + step + 'px';
                setTimeout(go,interval);
            }else{
                animated = false;
                list.style.left = newLeft +'px';
                if(newLeft >-800){
                    list.style.left = -4000 +'px';
                }
                if(newLeft < -4000){
                    list.style.left = -800 +'px';
                }
            }
        }
        
        go();
        
    }
    
        next.onclick = function () {
            if(index == 5){
                index = 1;
            }else{
            index += 1;
            }
            showButtons();
            if(animated == false){
            animate(-800);
            }
        }
        prev.onclick = function () {
            if(index == 1){
                index = 5;
            }else{
            index -= 1;
            }
            showButtons();
            if(animated == false){
            animate(800);
            }
        }
        container.onmouseover = stop;
        container.onmouseout  = play;
}