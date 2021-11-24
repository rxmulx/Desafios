const firePixelsArray = {}
const firewidth = 10
const fireheight = 10

function start() {
    createFireDataStructure()
    createFireSource()
    renderFire()
    
    setInterval(calculateFirePropagation, 1000)
}
function createFireDataStructure(){
    const numberOfPixels = firewidth * fireheight 

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0
    }
}

function calculateFirePropagation(){
    for(let column = 0; column < fireWidth; column++ ){
        for (let row = 0; row < fireHeight; row++){
            const pixelIndex = column + (fireWidth * row )

            updateFireIntesityPerPixel(pixelIndex)
        }
    }
    renderFire()
}
function updateFireIntesityPerPixel(cureentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fireWidth
    
    if(belowPixelIndex = currentPixelIndex + fireHeight) {
        return
    }
    const decay = 1
    const belowPixelFireIntesity = firePixelsArray[belowPixelIndex]
    const newFireIntesity = belowPixelFireIntesity - decay

    firePixelsArray[currentPixelIndex] = newFireIntesity
}

function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>'

    for (let row = 0; row < fireheight; row++) {
        html += '<tr>'

        for (let column = 0; column < firewidth; column++) {
            const pixelIndex = column + ( firewidth * row)
            const fireIntensity = firePixelsArray [pixelIndex]

            html += '<td>'
            html += `<div class="pixel-index">${pixelIndex}</div>`
            html += fireIntensity
            html += '</td>'
        }

        html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#fireCanvas').innerHTML = html
}
function createFireSource() {
    for (let column =0; column <= firewidth; column++){
        const overflowPixelIndex = firewidth * fireheight 
        const pixelIndex = (overflowPixelIndex - firewidth) + column

        firePixelsArray[pixelIndex] = 36 
    }
}

start()  