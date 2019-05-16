
function render(element, parentNode) {

  if (typeof element === 'string' || typeof element === 'number') {
    return parentNode.appendChild(document.createTextNode(element))
  }

  let { type, props } = element

  if (type.isReactComponent) {
    let ele = new type(props).render()
    type = ele.type
    props = ele.props
  } else if (typeof type === 'function') {
    let ele = type(props)
    type = ele.type
    props = ele.props
  }

  const domElement = document.createElement(type)
  
  for (let propName in props) {
    if (propName === 'className') {
      domElement.className = props[propName]
    } else if (propName === 'style') {
      let styleObj = props.style
      let cssText = Object.keys(styleObj).map(attr => {
        return `${attr.replace(/[A-Z]/g, a => `-${a.toLowerCase()}`)}: ${styleObj[attr]}`
      }).join(';')
      domElement.style.cssText = cssText
    } else if (propName === 'children') {
      let children = Array.isArray(props.children) ? props.children : [props.children]

      children.forEach(child => render(child, domElement))
    } else {
      domElement.setAttribute(propName, props[propName])
    }
  }
  parentNode.appendChild(domElement)
}

export default { render }