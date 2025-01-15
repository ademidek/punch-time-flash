const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); // our 2d rendering canvas context

canvas.width = 1024;
canvas.height = 576;

c.fillRect(9, 9, canvas.width, canvas.height)

class Sprite{
    constructor(position){
        this.position = position
    }
}

const player = new Sprite({
    x: 0,
    y: 0
})

const enemy = new Sprite({
    x: 800,
    y: 100
})