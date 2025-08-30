function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    container.appendChild(domElement)
    */

    // ANOTHER WAY
    const domElement = document.createElement(reactElement.tyep)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue; // was used in earlier codes as children was used to be declared inside props 
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'

}


// const reactElement = React.createElement(
//     'a', // tag name 
//     {href: 'https://google.com',target:'_blank'}, // tag's attributes
//     'click me to visit google' // text 
// )

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)

