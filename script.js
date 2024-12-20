let slider = {
    slides: ['image/1.png', 'image/2.png', 'image/3.jpg'], 
    i: 0, 

  
    set: function(image) {
        document.getElementById("scr").style.backgroundImage = "url(" + image + ")";
    },


    init: function() {
        this.set(this.slides[this.i]);
    },

  
    left: function() {
        this.i--;
        if (this.i < 0) this.i = this.slides.length - 1;
        this.set(this.slides[this.i]);
    },

   
    right: function() {
        this.i++;
        if (this.i === this.slides.length) this.i = 0;
        this.set(this.slides[this.i]);
    }
}


window.onload = function() {
    slider.init(); 

    
    let btnLeft = document.querySelector('.left');
    btnLeft.addEventListener('click', () => slider.left());

    let btnRight = document.querySelector('.right');
    btnRight.addEventListener('click', () => slider.right());

    
    setInterval(() => slider.right(), 5000);
}

