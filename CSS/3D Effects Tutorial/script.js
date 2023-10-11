var infigure = document.getElementsByClassName('figure');
console.log(infigure);

for (var i = 0; i < infigure.length; i++) {
    // infigure[i].onmouseover = function(e) {
    //     var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    //     this.firstElementChild.style['background'] = color;
    //     this.firstElementChild.style['transition'] = '0.3s all ease'
    // }  
    // infigure[i].onmouseout = function(e) {
    //     this.firstElementChild.style['background'] = '#dde1e7';
    //     this.firstElementChild.style['transition'] = '0.7s all ease'
    //     this.firstElementChild.style['box=shadow'] = 'inset -5px -5px 9px #ffffff73, inset 5px 7px #5e687949'
    // } 
    //Older version, couldn't handle the propagation 
    infigure[i].addEventListener('mouseenter', function (e) {
        console.log(this.firstElementChild);
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.firstElementChild.style['background'] = color;
        this.firstElementChild.style['transition'] = '0.3s all ease'
    });
    infigure[i].addEventListener('mouseleave', function (e) {
        this.firstElementChild.style['background'] = '#dde1e7';
        this.firstElementChild.style['transition'] = '0.7s all ease'
        this.firstElementChild.style['box=shadow'] = 'inset -5px -5px 9px #ffffff73, inset 5px 7px #5e687949'
    });

}