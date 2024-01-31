import View from "/home/existed/OpenComponent/src/view";

  export default function renderer(props, element) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;

    element.innerHTML = View(props);
  }
  