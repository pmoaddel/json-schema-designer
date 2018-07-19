/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  ISchemaItem,
} from './components/json-schema-designer/schema';

declare global {

  namespace StencilComponents {
    interface ItemDetails {
      'item': ISchemaItem;
      'parent': any;
    }
  }

  interface HTMLItemDetailsElement extends StencilComponents.ItemDetails, HTMLStencilElement {}

  var HTMLItemDetailsElement: {
    prototype: HTMLItemDetailsElement;
    new (): HTMLItemDetailsElement;
  };
  interface HTMLElementTagNameMap {
    'item-details': HTMLItemDetailsElement;
  }
  interface ElementTagNameMap {
    'item-details': HTMLItemDetailsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'item-details': JSXElements.ItemDetailsAttributes;
    }
  }
  namespace JSXElements {
    export interface ItemDetailsAttributes extends HTMLAttributes {
      'item'?: ISchemaItem;
      'parent'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface JsonSchemaDesigner {
      'inputSchema': any;
      'outputSchemaCallback': any;
    }
  }

  interface HTMLJsonSchemaDesignerElement extends StencilComponents.JsonSchemaDesigner, HTMLStencilElement {}

  var HTMLJsonSchemaDesignerElement: {
    prototype: HTMLJsonSchemaDesignerElement;
    new (): HTMLJsonSchemaDesignerElement;
  };
  interface HTMLElementTagNameMap {
    'json-schema-designer': HTMLJsonSchemaDesignerElement;
  }
  interface ElementTagNameMap {
    'json-schema-designer': HTMLJsonSchemaDesignerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'json-schema-designer': JSXElements.JsonSchemaDesignerAttributes;
    }
  }
  namespace JSXElements {
    export interface JsonSchemaDesignerAttributes extends HTMLAttributes {
      'inputSchema'?: any;
      'outputSchemaCallback'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSchemaRow {
      'item': ISchemaItem;
      'parent': any;
    }
  }

  interface HTMLAppSchemaRowElement extends StencilComponents.AppSchemaRow, HTMLStencilElement {}

  var HTMLAppSchemaRowElement: {
    prototype: HTMLAppSchemaRowElement;
    new (): HTMLAppSchemaRowElement;
  };
  interface HTMLElementTagNameMap {
    'app-schema-row': HTMLAppSchemaRowElement;
  }
  interface ElementTagNameMap {
    'app-schema-row': HTMLAppSchemaRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-schema-row': JSXElements.AppSchemaRowAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSchemaRowAttributes extends HTMLAttributes {
      'item'?: ISchemaItem;
      'parent'?: any;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;