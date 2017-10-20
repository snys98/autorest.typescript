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
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing A.
 */
export interface A {
  /**
   * @member {string} [statusCode]
   */
  statusCode?: string;
}

/**
 * @interface
 * An interface representing B.
 * @extends A
 */
export interface B extends A {
  /**
   * @member {string} [textStatusCode]
   */
  textStatusCode?: string;
}

/**
 * @interface
 * An interface representing C.
 */
export interface C {
  /**
   * @member {string} [httpCode]
   */
  httpCode?: string;
}

/**
 * @interface
 * An interface representing D.
 */
export interface D {
  /**
   * @member {string} [httpStatusCode]
   */
  httpStatusCode?: string;
}

/**
 * @interface
 * An interface representing HttpSuccessPut200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPut200OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPatch200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPatch200OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPost200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPost200OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessDelete200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessDelete200OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPut201OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPut201OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPost201OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPost201OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPut202OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPut202OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPatch202OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPatch202OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPost202OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPost202OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessDelete202OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessDelete202OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPut204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPut204OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPatch204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPatch204OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessPost204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessPost204OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpSuccessDelete204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpSuccessDelete204OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRedirectsPut301OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRedirectsPut301OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRedirectsPatch302OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRedirectsPatch302OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRedirectsPost303OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRedirectsPost303OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRedirectsPut307OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRedirectsPut307OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRedirectsPatch307OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRedirectsPatch307OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRedirectsPost307OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRedirectsPost307OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRedirectsDelete307OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRedirectsDelete307OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePut400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePut400OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePatch400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePatch400OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePost400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePost400OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailureDelete400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailureDelete400OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePut404OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePut404OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePatch405OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePatch405OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePost406OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePost406OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailureDelete407OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailureDelete407OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePut409OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePut409OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePut413OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePut413OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePatch414OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePatch414OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailurePost415OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailurePost415OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpClientFailureDelete417OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpClientFailureDelete417OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpServerFailurePost505OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpServerFailurePost505OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpServerFailureDelete505OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpServerFailureDelete505OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRetryPut500OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRetryPut500OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRetryPatch500OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRetryPatch500OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRetryPost503OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRetryPost503OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRetryDelete503OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRetryDelete503OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRetryPut504OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRetryPut504OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * @interface
 * An interface representing HttpRetryPatch504OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HttpRetryPatch504OptionalParams extends RequestOptionsBase {
  /**
   * @member {boolean} [booleanValue] Simple boolean value true
   */
  booleanValue?: boolean;
}

/**
 * Defines values for Location.
 * Possible values include: '/http/success/head/200'
 * @readonly
 * @enum {string}
 */
export enum Location {
  HTTPSUCCESSHEAD200 = '/http/success/head/200',
}

/**
 * Defines values for Location1.
 * Possible values include: '/http/success/get/200'
 * @readonly
 * @enum {string}
 */
export enum Location1 {
  HTTPSUCCESSGET200 = '/http/success/get/200',
}

/**
 * Defines values for Location2.
 * Possible values include: '/http/success/head/200'
 * @readonly
 * @enum {string}
 */
export enum Location2 {
  HTTPSUCCESSHEAD200 = '/http/success/head/200',
}

/**
 * Defines values for Location3.
 * Possible values include: '/http/success/get/200'
 * @readonly
 * @enum {string}
 */
export enum Location3 {
  HTTPSUCCESSGET200 = '/http/success/get/200',
}

/**
 * Defines values for Location4.
 * Possible values include: '/http/failure/500'
 * @readonly
 * @enum {string}
 */
export enum Location4 {
  HTTPFAILURE500 = '/http/failure/500',
}

/**
 * Defines values for Location5.
 * Possible values include: '/http/success/head/200'
 * @readonly
 * @enum {string}
 */
export enum Location5 {
  HTTPSUCCESSHEAD200 = '/http/success/head/200',
}

/**
 * Defines values for Location6.
 * Possible values include: '/http/success/get/200'
 * @readonly
 * @enum {string}
 */
export enum Location6 {
  HTTPSUCCESSGET200 = '/http/success/get/200',
}

/**
 * Defines values for Location7.
 * Possible values include: '/http/failure/500'
 * @readonly
 * @enum {string}
 */
export enum Location7 {
  HTTPFAILURE500 = '/http/failure/500',
}

/**
 * Defines values for Location8.
 * Possible values include: '/http/success/get/200'
 * @readonly
 * @enum {string}
 */
export enum Location8 {
  HTTPSUCCESSGET200 = '/http/success/get/200',
}

/**
 * Defines values for Location9.
 * Possible values include: '/http/success/head/200'
 * @readonly
 * @enum {string}
 */
export enum Location9 {
  HTTPSUCCESSHEAD200 = '/http/success/head/200',
}

/**
 * Defines values for Location10.
 * Possible values include: '/http/success/get/200'
 * @readonly
 * @enum {string}
 */
export enum Location10 {
  HTTPSUCCESSGET200 = '/http/success/get/200',
}

/**
 * Defines values for Location11.
 * Possible values include: '/http/success/put/200'
 * @readonly
 * @enum {string}
 */
export enum Location11 {
  HTTPSUCCESSPUT200 = '/http/success/put/200',
}

/**
 * Defines values for Location12.
 * Possible values include: '/http/success/patch/200'
 * @readonly
 * @enum {string}
 */
export enum Location12 {
  HTTPSUCCESSPATCH200 = '/http/success/patch/200',
}

/**
 * Defines values for Location13.
 * Possible values include: '/http/success/post/200'
 * @readonly
 * @enum {string}
 */
export enum Location13 {
  HTTPSUCCESSPOST200 = '/http/success/post/200',
}

/**
 * Defines values for Location14.
 * Possible values include: '/http/success/delete/200'
 * @readonly
 * @enum {string}
 */
export enum Location14 {
  HTTPSUCCESSDELETE200 = '/http/success/delete/200',
}
