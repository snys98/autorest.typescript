/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { RequestOptionsBase } from "ms-rest-js";


/**
 * @interface
 * An interface representing ChildProduct.
 * The product documentation.
 *
 */
export interface ChildProduct {
  /**
   * @member {number} [count] Count
   */
  count?: number;
}

/**
 * @interface
 * An interface representing ConstantProduct.
 * The product documentation.
 *
 */
export interface ConstantProduct {
}

/**
 * @interface
 * An interface representing Product.
 * The product documentation.
 *
 */
export interface Product {
  /**
   * @member {string[]} [displayNames] Non required array of unique items from
   * 0 to 6 elements.
   */
  displayNames?: string[];
  /**
   * @member {number} [capacity] Non required int betwen 0 and 100 exclusive.
   */
  capacity?: number;
  /**
   * @member {string} [image] Image URL representing the product.
   */
  image?: string;
  /**
   * @member {ChildProduct} child
   */
  child: ChildProduct;
  /**
   * @member {EnumConst} [constStringAsEnum] Constant string as Enum. Possible
   * values include: 'constant_string_as_enum'
   */
  constStringAsEnum?: EnumConst;
}

/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [code]
   */
  code?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
  /**
   * @member {string} [fields]
   */
  fields?: string;
}

/**
 * @interface
 * An interface representing AutoRestValidationTestValidationOfBodyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestValidationTestValidationOfBodyOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [body]
   */
  body?: Product;
}

/**
 * @interface
 * An interface representing AutoRestValidationTestPostWithConstantInBodyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestValidationTestPostWithConstantInBodyOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [body]
   */
  body?: Product;
}

/**
 * Defines values for EnumConst.
 * Possible values include: 'constant_string_as_enum'
 * @readonly
 * @enum {string}
 */
export enum EnumConst {
  CONSTANT_STRING_AS_ENUM = 'constant_string_as_enum',
}
