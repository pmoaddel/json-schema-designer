import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import './stencil.core';

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
      'inputTranslations': any;
      'outputSchemaCallback': any;
      'viewMode': string;
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
      'inputTranslations'?: any;
      'outputSchemaCallback'?: any;
      'viewMode'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchemaRow {
      'item': ISchemaItem;
      'parent': any;
    }
  }

  interface HTMLSchemaRowElement extends StencilComponents.SchemaRow, HTMLStencilElement {}

  var HTMLSchemaRowElement: {
    prototype: HTMLSchemaRowElement;
    new (): HTMLSchemaRowElement;
  };
  interface HTMLElementTagNameMap {
    'schema-row': HTMLSchemaRowElement;
  }
  interface ElementTagNameMap {
    'schema-row': HTMLSchemaRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schema-row': JSXElements.SchemaRowAttributes;
    }
  }
  namespace JSXElements {
    export interface SchemaRowAttributes extends HTMLAttributes {
      'item'?: ISchemaItem;
      'parent'?: any;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;