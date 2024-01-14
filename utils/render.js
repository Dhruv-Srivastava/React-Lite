export default function render(currentElement,containerElement){

    // Step 1: Create the element
    const element=document.createElement(currentElement.elementType)

    // Step 2: Add text inside it
    element.textContent=currentElement.text

    // Step 3: Add attributes to it
    currentElement.attributes.forEach(attribute=>element.classList.add(attribute))

    if(currentElement.elementType==="a")
        element.setAttribute("href",currentElement.href)

    // Step 4: Append the element to parent
    containerElement.append(element)

    // Recursively render all of the children
    if(currentElement.children.length>0)
        currentElement.children.forEach(child=>render(child,element))

}