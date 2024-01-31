"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dist = {};
var Server$1 = {};
Object.defineProperty(Server$1, "__esModule", { value: true });
Server$1.getSettings = Server$1.getInitialData = Server$1.Server = void 0;
class Server {
  constructor(initial) {
    __publicField(this, "initial");
    __publicField(this, "actions", {});
    this.initial = initial;
  }
  action(name, action) {
    this.actions[name] = action;
    return this;
  }
  getData() {
    return async ({ action: actionName, params, setEmptyResponse, ...context }, cb) => {
      let res;
      try {
        if (actionName && this.actions[actionName]) {
          const data2 = (params == null ? void 0 : params.data) ?? params;
          res = await this.actions[actionName](data2, context);
        } else {
          res = await this.initial(params, context);
        }
      } catch (err) {
        cb(err);
        return;
      }
      cb(null, res);
    };
  }
}
Server$1.Server = Server;
const getInitialData = () => typeof __$$oc_initialData__ !== "undefined" ? __$$oc_initialData__ : {};
Server$1.getInitialData = getInitialData;
const getSettings = () => typeof __$$oc_Settings__ !== "undefined" ? __$$oc_Settings__ : {};
Server$1.getSettings = getSettings;
var serverClient = {};
Object.defineProperty(serverClient, "__esModule", { value: true });
serverClient.serverClient = void 0;
const Server_1 = Server$1;
serverClient.serverClient = new Proxy({}, {
  get(_target, prop) {
    return (data2) => {
      var _a, _b, _c;
      const componentName = "COMPONENT_NAME";
      const componentVersion = "COMPONENT_VERSION";
      const baseUrl = (0, Server_1.getSettings)().baseUrl ?? ((_c = (_b = (_a = window.oc) == null ? void 0 : _a.renderedComponents) == null ? void 0 : _b[componentName]) == null ? void 0 : _c.baseUrl);
      return window.oc.getAction({
        action: prop,
        baseUrl,
        component: componentName,
        version: componentVersion,
        parameters: data2
      });
    };
  }
});
var types = {};
Object.defineProperty(types, "__esModule", { value: true });
(function(exports2) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(Server$1, exports2);
  __exportStar(serverClient, exports2);
  __exportStar(types, exports2);
})(dist);
const userDatabase = [
  { name: "John Doe", born: 1986, hobbies: ["Swimming", "Basketball"] },
  { name: "Jane Doe", born: 1991, hobbies: ["Running", "Rugby"] }
];
const yearsFunFactDatabase = {
  1986: "Halley's Comet made its closest approach to Earth in 1986, visible to the naked eye.",
  1987: "The first Final Fantasy game was released in 1987.",
  1991: "The first web page was created in 1991 by Tim Berners-Lee."
};
async function getUser(userId) {
  return userDatabase[userId];
}
async function getFunFact(year) {
  return yearsFunFactDatabase[year];
}
const server = new dist.Server(async (params) => {
  const { userId } = params;
  const user = await getUser(userId);
  const [firstName, lastName] = user.name.split(/\s+/);
  if (firstName === "Invalid") {
    return;
  }
  return {
    firstName,
    lastName,
    born: user.born,
    hobbies: user.hobbies
  };
}).action("funFact", async (params) => {
  const { year } = params;
  const funFact = await getFunFact(year);
  return {
    funFact
  };
});
const dataProvider = server.getData();
const data = (context, callback) => {
  dataProvider(context, (error, model) => {
    if (error) {
      return callback(error);
    }
    if (model == null)
      return callback(null, { __oc_emptyResponse: true });
    const props = Object.assign({}, model, {
      _staticPath: context.staticPath,
      _baseUrl: context.baseUrl,
      _componentName: "header",
      _componentVersion: "1.0.0"
    });
    const srcPathHasProtocol = context.staticPath.indexOf("http") === 0;
    const srcPath = srcPathHasProtocol ? context.staticPath : "https:" + context.staticPath;
    return callback(null, Object.assign({}, {
      component: {
        key: "721a94435a827af0819dddc8393bc0e8ec4f09ff",
        src: srcPath + "template.js",
        props
      }
    }));
  });
};
exports.data = data;
