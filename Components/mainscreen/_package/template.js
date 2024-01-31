var oc=oc||{};oc.components=oc.components||{};oc.components['fb60ba9c5b9026404406b8b3767278d27c38e166']=function(model) {
    var __toOcStaticPathUrl = function(args) {
      return model.component.props._staticPath + 'public/' + args;
    } 
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
    var __$$oc_initialData__ = rest;
    var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
    var innerFn = function(model){
  oc.reactComponents = oc.reactComponents || {};
  oc.reactComponents['b58146efe5a130745804a9bb7b38489f0978d0a3'] = oc.reactComponents['b58146efe5a130745804a9bb7b38489f0978d0a3'] || ((function() {
    var clientBundle = function(require$$0) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  const maincontainer = "_maincontainer_173uz_1";
  const button = "_button_173uz_10";
  const info = "_info_173uz_24";
  const block = "_block_173uz_28";
  const styles = {
    maincontainer,
    button,
    info,
    block
  };
  const randomImages = ["https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg", "https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fHw%3D&w=1000&q=80", "https://images.unsplash.com/photo-1560222821-f3357dea2ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDZ8fHxlbnwwfHx8fHw%3D&w=1000&q=80", "https://c0.wallpaperflare.com/preview/883/843/764/person-holding-camera.jpg"];
  const App = () => {
    const [imageSources, setImageSources] = require$$0.useState(randomImages);
    const handleChangePicture = (index) => {
      const newImageSources = [...imageSources];
      newImageSources[index] = getRandomImage();
      setImageSources(newImageSources);
    };
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      return randomImages[randomIndex];
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
        children: "Main Screen in React"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: styles.maincontainer,
        children: imageSources.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("img", {
            width: "250",
            height: "350",
            src,
            alt: `Image ${index + 1}`
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
            className: styles.button,
            onClick: () => handleChangePicture(index),
            children: "Change Picture"
          })]
        }, index))
      })]
    });
  };
  var useData$1 = {};
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(useData$1, "__esModule", { value: true });
  useData$1.useData = DataProvider_1 = useData$1.DataProvider = void 0;
  const jsx_runtime_1 = jsxRuntimeExports;
  const react_1 = __importDefault(require$$0);
  const DataContext = react_1.default.createContext({});
  const DataProvider = ({ children, ...props }) => {
    return (0, jsx_runtime_1.jsx)(DataContext.Provider, { value: props, children });
  };
  var DataProvider_1 = useData$1.DataProvider = DataProvider;
  function useData() {
    const { value: { getData, ...rest } } = react_1.default.useContext(DataContext);
    const asyncGetData = react_1.default.useCallback((data) => {
      return new Promise((resolve, reject) => {
        getData({ ...rest, ...data }, (err, newData) => {
          if (err) {
            reject(err);
          } else {
            resolve(newData);
          }
        });
      });
    }, []);
    return { getData: asyncGetData, ...rest };
  }
  useData$1.useData = useData;
  function OCProvider(props) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;
    require$$0.useEffect(() => {
      window.oc.events.fire("oc:componentDidMount", rest);
    }, []);
    function _getData(providerProps, parameters, cb) {
      return window.oc.getData(
        {
          name: providerProps._componentName,
          version: providerProps._componentVersion,
          baseUrl: providerProps._baseUrl,
          parameters
        },
        (err, data) => {
          if (err) {
            return cb(err);
          }
          const { _staticPath: _staticPath2, _baseUrl: _baseUrl2, _componentName: _componentName2, _componentVersion: _componentVersion2, ...rest2 } = data.component.props;
          cb(null, rest2, data.component.props);
        }
      );
    }
    function _getSetting(providerProps, setting) {
      const settingHash = {
        name: providerProps._componentName,
        version: providerProps._componentVersion,
        baseUrl: providerProps._baseUrl,
        staticPath: providerProps._staticPath
      };
      return settingHash[setting];
    }
    const getData = (parameters, cb) => {
      if (!cb || typeof cb !== "function") {
        return new Promise((resolve, reject) => {
          _getData(props, parameters, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
        });
      }
      _getData(props, parameters, cb);
    };
    const getSetting = (setting) => _getSetting(props, setting);
    rest.getData = getData;
    rest.getSetting = getSetting;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DataProvider_1, { value: { ...rest }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, { ...rest }) });
  }
  function renderer(props, element, ssr) {
    if (window.ReactDOM.createRoot) {
      if (ssr) {
        window.ReactDOM.hydrateRoot(element, /* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      } else {
        window.ReactDOM.createRoot(element).render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      }
    } else {
      if (ssr) {
        window.ReactDOM.hydrate(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      } else {
        window.ReactDOM.render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      }
    }
  }
  renderer.component = OCProvider;
  return renderer;
}(React);

    return clientBundle;
  })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"React","url":"https://unpkg.com/react@18.2.0/umd/react.production.min.js","devUrl":"https://unpkg.com/react@18.2.0/umd/react.development.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js","devUrl":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js","name":"react-dom"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', 'fb60ba9c5b9026404406b8b3767278d27c38e166'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__reactTemplate = oc.__reactTemplate || { count: 0 };
  var count = oc.__reactTemplate.count;
  var templateId = "oc-reactRoot-mainscreen-" + count;
  oc.__reactTemplate.count++;
  var ssrCall = 'oc.components["fb60ba9c5b9026404406b8b3767278d27c38e166"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-reactRoot-mainscreen">' + modelHTML + '</div>' +
    '<style>._maincontainer_173uz_1 {  background-color:#a97613;  color: #fff;  font-family: sans-serif;  padding: 40px;  display: flex;  justify-content: space-evenly;}._button_173uz_10 {  background-color: #3b246c;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  margin-left: 30px;  margin-top: 30px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}._info_173uz_24 {  margin-bottom: 20px;}._block_173uz_28 {  margin: 6px 0;}._button_173uz_10:hover {  background-color: #c79535;}</style>' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'._maincontainer_173uz_1 {  background-color:#a97613;  color: #fff;  font-family: sans-serif;  padding: 40px;  display: flex;  justify-content: space-evenly;}._button_173uz_10 {  background-color: #3b246c;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  margin-left: 30px;  margin-top: 30px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}._info_173uz_24 {  margin-bottom: 20px;}._block_173uz_28 {  margin: 6px 0;}._button_173uz_10:hover {  background-color: #c79535;}\');' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["fb60ba9c5b9026404406b8b3767278d27c38e166"]({ component: { props:' + props + ' } });' +
        'oc.reactComponents["b58146efe5a130745804a9bb7b38489f0978d0a3"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
    return innerFn(model);
  }
  