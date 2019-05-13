function render(element, parentNode) {
  if (typeof element === 'string' || typeof element === 'number') {
    return parentNode.appendChild(document.createTextNode(element))
  }
  let { type, props } = element
  if (type.isReactComponent) { // 组件类
    let element = new type(props).render()
    console.log(element)
    type = element.type
    props = element.props

  } else if (typeof type === 'function') { // 函数式组件
     let element = type(props)
     type = element.type
     props = element.props
  }

  // 创建DOM元素
  const domElement = document.createElement(type)
  
  for (let propName in props) {
    if (propName === 'className') {
      domElement.className = props[propName]
    } else if (propName === 'style') {
      const styleObject = props[propName]
      // for (let attr in styleObject) {
      //   domElement.style[attr] = styleObject[attr]
      // }
      let cssText = Object.keys(styleObject)
        .map(attr => {
          return `${attr.replace(/[A-Z]/, a => `-${a.toLowerCase()}`)}: ${
            styleObject[attr]
          }`
        })
        .join(';')

      // dom.style.cssText = 'color: red; font-size: 24px'
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
