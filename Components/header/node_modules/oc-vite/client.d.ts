/// <reference path="./types/importMeta.d.ts" />

interface OC {
  $: JQueryStatic;
  addStylesToHead: (styles: string) => void;
  build: (options: {
    baseUrl: string;
    name: string;
    version?: string;
    parameters?: Record<string, string>;
  }) => string;
  clientVersion: string;
  cmd: {
    push: (cb: (oc: OC) => void) => void;
  };
  components: Record<string, (model: any) => string>;
  conf: {
    templates: Array<{
      type: string;
      externals: string[];
    }>;
  };
  events: {
    on: {
      (
        eventName: 'oc:rendered',
        fn: (
          evt: {},
          data: {
            baseUrl: string;
            html: string;
            id: string;
            key: string;
            name: string;
            version: string;
          }
        ) => void
      ): void;
      (eventName: 'oc:ready', fn: (evt: {}, oc: OC) => void): void;
      (eventName: 'oc:cssDidMount', fn: (evt: {}, css: string) => void): void;
      (
        eventName: 'oc:componentDidMount',
        fn: (evt: {}, props: any) => void
      ): void;
      (
        eventName: 'oc:failed',
        fn: (
          evt: {},
          oc: {
            originalError: any;
            data: any;
            component: HTMLElement;
          }
        ) => void
      ): void;
      (eventName: string, fn: (...data: any[]) => void): void;
    };
    off: (eventName: string, fn?: (...data: any[]) => void) => void;
    fire: (eventName: string, data?: any) => void;
    reset: () => void;
  };
  getData: (
    options: {
      action?: string;
      parameters: Record<string, string>;
      version: string;
      name: string;
      baseUrl: string;
      json?: boolean;
    },
    cb: (err: any, data: any) => void
  ) => void;
  getAction: (options: {
    component: string;
    action?: string;
    parameters?: Record<string, any>;
    version?: string;
    baseUrl?: string;
  }) => void;
  load: (
    placeholder: string,
    href: string,
    callback?: (el: HTMLElement) => void
  ) => void;
  ready: (cb: () => void) => void;
  registerTemplates: any;
  render: (
    compiledViewInfo: { type: string; key: string; src: string },
    model: any,
    callback: (err: any, html: string) => void
  ) => void;
  renderByHref: (
    href: string,
    retryNumberOrCallback: number | Function,
    callback: (err: string, data: any) => void
  ) => void;
  renderedComponents: Record<string, { baseUrl: string; version: string }>;
  renderNestedComponent: (ocElement: HTMLElement, cb: () => void) => void;
  renderUnloadedComponents: () => void;
  require: (
    name: string,
    version: string,
    cb: (err: any, component: any) => void
  ) => void;
  requireSeries: (
    toLoad: Array<{ global: string; url: string }>,
    loaded: Array<{ global: string; url: string }>,
    cb: () => void
  ) => void;
  status: string;
}

interface Window {
  oc: OC;
}

// CSS modules
type CSSModuleClasses = { readonly [key: string]: string };

declare module '*.css' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.module.css' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.scss' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.sass' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.less' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.styl' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.stylus' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.pcss' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.module.sss' {
  const classes: CSSModuleClasses;
  export default classes;
}

// CSS
declare module '*.scss' {}
declare module '*.sass' {}
declare module '*.less' {}
declare module '*.styl' {}
declare module '*.stylus' {}
declare module '*.pcss' {}
declare module '*.sss' {}

// Built-in asset types
// see `src/node/constants.ts`

// images
declare module '*.apng' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.jfif' {
  const src: string;
  export default src;
}
declare module '*.pjpeg' {
  const src: string;
  export default src;
}
declare module '*.pjp' {
  const src: string;
  export default src;
}
declare module '*.gif' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.ico' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.avif' {
  const src: string;
  export default src;
}

// media
declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.webm' {
  const src: string;
  export default src;
}
declare module '*.ogg' {
  const src: string;
  export default src;
}
declare module '*.mp3' {
  const src: string;
  export default src;
}
declare module '*.wav' {
  const src: string;
  export default src;
}
declare module '*.flac' {
  const src: string;
  export default src;
}
declare module '*.aac' {
  const src: string;
  export default src;
}
declare module '*.opus' {
  const src: string;
  export default src;
}
declare module '*.mov' {
  const src: string;
  export default src;
}

// fonts
declare module '*.woff' {
  const src: string;
  export default src;
}
declare module '*.woff2' {
  const src: string;
  export default src;
}
declare module '*.eot' {
  const src: string;
  export default src;
}
declare module '*.ttf' {
  const src: string;
  export default src;
}
declare module '*.otf' {
  const src: string;
  export default src;
}

// other
declare module '*.webmanifest' {
  const src: string;
  export default src;
}
declare module '*.pdf' {
  const src: string;
  export default src;
}
declare module '*.txt' {
  const src: string;
  export default src;
}

// wasm?init
declare module '*.wasm?init' {
  const initWasm: (
    options?: WebAssembly.Imports
  ) => Promise<WebAssembly.Instance>;
  export default initWasm;
}

// web worker
declare module '*?worker' {
  const workerConstructor: {
    new (options?: { name?: string }): Worker;
  };
  export default workerConstructor;
}

declare module '*?worker&inline' {
  const workerConstructor: {
    new (options?: { name?: string }): Worker;
  };
  export default workerConstructor;
}

declare module '*?worker&url' {
  const src: string;
  export default src;
}

declare module '*?sharedworker' {
  const sharedWorkerConstructor: {
    new (options?: { name?: string }): SharedWorker;
  };
  export default sharedWorkerConstructor;
}

declare module '*?sharedworker&inline' {
  const sharedWorkerConstructor: {
    new (options?: { name?: string }): SharedWorker;
  };
  export default sharedWorkerConstructor;
}

declare module '*?sharedworker&url' {
  const src: string;
  export default src;
}

declare module '*?raw' {
  const src: string;
  export default src;
}

declare module '*?url' {
  const src: string;
  export default src;
}

declare module '*?inline' {
  const src: string;
  export default src;
}
