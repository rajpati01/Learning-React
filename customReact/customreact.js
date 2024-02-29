function customRender(reactElement, container) {
  /*  const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
  
    container.appendChild(domElement);
    */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

function customRender2(reactElement2, container) {
  const domElement = document.createElement(reactElement2.type);
  domElement.setAttribute("scr", reactElement2.props.scr);
  domElement.setAttribute("width", reactElement2.props.width);
  domElement.setAttribute("height", reactElement2.props.height);

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Clik me to visit google",
};

const reactElement2 = {
  type: "img",
  props: {
    scr: "react.png",
    width: "100px",
    height: "100px",
  },
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
customRender2(reactElement2, mainContainer);
