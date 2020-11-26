/* eslint-disable no-restricted-syntax */
export default function createElement(elementType, ...children) {
  const element = document.createElement(elementType);

  if (Array.isArray(children)) {
    for (const child of children) {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) element.appendChild(child);
    }
  }

  return element;
}
