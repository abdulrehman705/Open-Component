var oc=oc||{};oc.components=oc.components||{};oc.components['fa6b4ef82786790560f616a42f2450a5f3b3b5a5']=function(model) {
    var __toOcStaticPathUrl = function(args) {
      return model.component.props._staticPath + 'public/' + args;
    } 
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
    var __$$oc_initialData__ = rest;
    var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
    var innerFn = function(model){
  oc.vueComponents = oc.vueComponents || {};
  oc.vueComponents['721a94435a827af0819dddc8393bc0e8ec4f09ff'] = oc.vueComponents['721a94435a827af0819dddc8393bc0e8ec4f09ff'] || ((function() {
    var clientBundle = function(vue) {
  "use strict";
  const _withScopeId = (n) => (vue.pushScopeId("data-v-da57fe61"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { className: "container" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "h1",
    null,
    "Open Component Header",
    -1
    /* HOISTED */
  ));
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "h3",
    null,
    "Header is in Vue",
    -1
    /* HOISTED */
  ));
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const count = vue.ref(0);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode("div", _hoisted_1, [
            _hoisted_2,
            _hoisted_3,
            vue.createElementVNode(
              "button",
              {
                className: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
              },
              "Count is: " + vue.toDisplayString(count.value),
              1
              /* TEXT */
            )
          ])
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const View = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da57fe61"]]);
  function renderer(props, element, ssr) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;
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
    vue.createApp(View, rest).mount(element, ssr);
  }
  renderer.component = View;
  return renderer;
}(Vue);

    return clientBundle;
  })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"Vue","url":"https://unpkg.com/vue@3.4.3/dist/vue.global.prod.js","devUrl":"https://unpkg.com/vue@3.4.3/dist/vue.global.js","name":"vue"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', 'fa6b4ef82786790560f616a42f2450a5f3b3b5a5'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__vueTemplate = oc.__vueTemplate || { count: 0 };
  var count = oc.__vueTemplate.count;
  var templateId = "oc-vueRoot-header-" + count;
  oc.__vueTemplate.count++;
  var ssrCall = 'oc.components["fa6b4ef82786790560f616a42f2450a5f3b3b5a5"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-vueRoot-header">' + modelHTML + '</div>' +
    '<style>.container[data-v-da57fe61] {  background-color: #3b246c;  color: #fff;  font-family: sans-serif;  padding: 40px;  flex-direction: row;  display: flex;  justify-content: space-between;}.button[data-v-da57fe61] {  background-color: #a97613;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  margin-left: 30px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}h1[data-v-da57fe61] {  margin: 0 0 20px 0;}</style>' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.container[data-v-da57fe61] {  background-color: #3b246c;  color: #fff;  font-family: sans-serif;  padding: 40px;  flex-direction: row;  display: flex;  justify-content: space-between;}.button[data-v-da57fe61] {  background-color: #a97613;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  margin-left: 30px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}h1[data-v-da57fe61] {  margin: 0 0 20px 0;}\');' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["fa6b4ef82786790560f616a42f2450a5f3b3b5a5"]({ component: { props:' + props + ' } });' +
        'oc.vueComponents["721a94435a827af0819dddc8393bc0e8ec4f09ff"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
    return innerFn(model);
  }
  