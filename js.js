li = document.getElementsByTagName('li');

arr = Array.from(li);

actived = document.createAttribute("actived")
arr.forEach(element => {
    element.addEventListener("click", toggleText)
    element.addEventListener("mousedown", destaque)
    element.setAttribute("actived", "false")
});


function hideText(element) {
        element.setAttribute("actived", "false")
        children = element.children
        children[0].setAttribute("style", "font-weigth: 400")
        children[0].style.color="hsl(237, 12%, 33%)"
        children[1].setAttribute("style", "transform: rotate(0deg)")
        children[2].setAttribute("style", "display: none")
}

function showText(element) {
    arr.forEach(ele => {
        if(ele.getAttribute("actived") == "true") {
            ele.setAttribute("actived", "false")
            hideText(ele)
        }
    });

    element.setAttribute("actived", "true")
    children = element.children
    children[0].style.fontWeight="700"
    children[0].style.color="hsl(237, 12%, 33%)"
    children[1].setAttribute("style", "transform: rotate(180deg)")
    children[2].setAttribute("style", "display: block")
}

function toggleText(e) {
    element = e.target

    if(e.target.tagName != "LI")
        element = e.target.parentElement

    if(element.getAttribute("actived") == "true") {
        hideText(element)
    }
    else {
        showText(element);
    }
}

function destaque(e) {
    element = e.target

    if(e.target.tagName != "LI")
        element = e.target.parentElement

    element.children[0].style.color="hsl(14, 88%, 65%)"
}