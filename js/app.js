function borderRadius() {
    let topRight = document.getElementById('topRight').value

    let topLeft = document.getElementById('topLeft').value

    let bottomLeft = document.getElementById('bottomLeft').value

    let bottomRight = document.getElementById('bottomRight').value


    let textarea = document.getElementById('textarea')

    let result = document.querySelector('.result')

    result.style.borderBottomLeftRadius = `${bottomLeft}px`
    result.style.borderBottomRightRadius = `${bottomRight}px`
    result.style.borderTopLeftRadius = `${topLeft}px`
    result.style.borderTopRightRadius = `${topRight}px`

    let str = `border-radius`

    textarea.innerHTML = `border-top-left-radius: ${topLeft}px\nborder-top-right-radius:${topRight}px\nborder-bottom-left-radius: ${bottomLeft}px\nborder-bottom-right-radius: ${bottomRight}px `
}

for (let item of document.querySelectorAll('input')) {
    item.addEventListener('input', borderRadius)
}



borderRadius()