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