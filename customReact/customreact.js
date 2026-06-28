const reactElement= {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me'
}

const mainContainer = document.getElementById('root')

function customRender(reactElement, mainContainer) {
    const element = document.createElement(reactElement.type)
    element.textContent = reactElement.children

    for (const prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(element)
}

customRender(reactElement, mainContainer)
//every react use bundler like webpack or vite to convert jsx code into js code 
// and then render it on the browser. so we can create our own custom react by creating a function 
// that takes jsx code as input and converts it into js code and then renders it on the browser.