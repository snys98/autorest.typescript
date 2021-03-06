/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure-js";
import { RequestOptionsBase } from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing Resource.
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id
   */
  readonly id?: string;
  /**
   * @member {string} [type] Resource Type
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags]
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} [location] Resource Location
   */
  location?: string;
  /**
   * @member {string} [name] Resource Name
   */
  readonly name?: string;
}

/**
 * @interface
 * An interface representing Sku.
 */
export interface Sku {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [id]
   */
  id?: string;
}

/**
 * @interface
 * An interface representing Product.
 * @extends Resource
 */
export interface Product extends Resource {
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
  /**
   * @member {ProvisioningStateValues} [provisioningStateValues] Possible
   * values include: 'Succeeded', 'Failed', 'canceled', 'Accepted', 'Creating',
   * 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
   */
  readonly provisioningStateValues?: ProvisioningStateValues;
}

/**
 * @interface
 * An interface representing SubResource.
 * @extends BaseResource
 */
export interface SubResource extends BaseResource {
  /**
   * @member {string} [id] Sub Resource Id
   */
  readonly id?: string;
}

/**
 * @interface
 * An interface representing SubProduct.
 * @extends SubResource
 */
export interface SubProduct extends SubResource {
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
  /**
   * @member {ProvisioningStateValues1} [provisioningStateValues] Possible
   * values include: 'Succeeded', 'Failed', 'canceled', 'Accepted', 'Creating',
   * 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
   */
  readonly provisioningStateValues?: ProvisioningStateValues1;
}

/**
 * @interface
 * An interface representing OperationResultError.
 */
export interface OperationResultError {
  /**
   * @member {number} [code] The error code for an operation failure
   */
  code?: number;
  /**
   * @member {string} [message] The detailed arror message
   */
  message?: string;
}

/**
 * @interface
 * An interface representing OperationResult.
 */
export interface OperationResult {
  /**
   * @member {Status} [status] The status of the request. Possible values
   * include: 'Succeeded', 'Failed', 'canceled', 'Accepted', 'Creating',
   * 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
   */
  status?: Status;
  /**
   * @member {OperationResultError} [error]
   */
  error?: OperationResultError;
}

/**
 * @interface
 * An interface representing LROsPut200SucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPut200SucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPut200SucceededNoStateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPut200SucceededNoStateOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPut202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPut202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPut201CreatingSucceeded200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPut201CreatingSucceeded200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPut200UpdatingSucceeded204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPut200UpdatingSucceeded204OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPut201CreatingFailed200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPut201CreatingFailed200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPut200Acceptedcanceled200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPut200Acceptedcanceled200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPutNoHeaderInRetryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutNoHeaderInRetryOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPutAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPutAsyncNoRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutAsyncNoRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPutAsyncRetryFailedOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutAsyncRetryFailedOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPutAsyncNoRetrycanceledOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutAsyncNoRetrycanceledOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPutAsyncNoHeaderInRetryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutAsyncNoHeaderInRetryOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPutNonResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutNonResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {Sku} [sku] sku to put
   */
  sku?: Sku;
}

/**
 * @interface
 * An interface representing LROsPutAsyncNonResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutAsyncNonResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {Sku} [sku] Sku to put
   */
  sku?: Sku;
}

/**
 * @interface
 * An interface representing LROsPutSubResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutSubResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
}

/**
 * @interface
 * An interface representing LROsPutAsyncSubResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPutAsyncSubResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
}

/**
 * @interface
 * An interface representing LROsPost202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPost202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPost202NoRetry204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPost202NoRetry204OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPostAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPostAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPostAsyncNoRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPostAsyncNoRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPostAsyncRetryFailedOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPostAsyncRetryFailedOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsPostAsyncRetrycanceledOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsPostAsyncRetrycanceledOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPut200SucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPut200SucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPut200SucceededNoStateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPut200SucceededNoStateOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPut202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPut202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPut201CreatingSucceeded200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPut201CreatingSucceeded200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPut200UpdatingSucceeded204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPut200UpdatingSucceeded204OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPut201CreatingFailed200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPut201CreatingFailed200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPut200Acceptedcanceled200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPut200Acceptedcanceled200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPutNoHeaderInRetryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutNoHeaderInRetryOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPutAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPutAsyncNoRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutAsyncNoRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPutAsyncRetryFailedOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutAsyncRetryFailedOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPutAsyncNoRetrycanceledOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutAsyncNoRetrycanceledOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPutAsyncNoHeaderInRetryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutAsyncNoHeaderInRetryOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPutNonResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutNonResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {Sku} [sku] sku to put
   */
  sku?: Sku;
}

/**
 * @interface
 * An interface representing LROsBeginPutAsyncNonResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutAsyncNonResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {Sku} [sku] Sku to put
   */
  sku?: Sku;
}

/**
 * @interface
 * An interface representing LROsBeginPutSubResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutSubResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
}

/**
 * @interface
 * An interface representing LROsBeginPutAsyncSubResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPutAsyncSubResourceOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
}

/**
 * @interface
 * An interface representing LROsBeginPost202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPost202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPost202NoRetry204OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPost202NoRetry204OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPostAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPostAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPostAsyncNoRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPostAsyncNoRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPostAsyncRetryFailedOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPostAsyncRetryFailedOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsBeginPostAsyncRetrycanceledOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsBeginPostAsyncRetrycanceledOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysPut201CreatingSucceeded200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysPut201CreatingSucceeded200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysPutAsyncRelativeRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysPutAsyncRelativeRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysPost202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysPost202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysPostAsyncRelativeRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysPostAsyncRelativeRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysBeginPut201CreatingSucceeded200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysBeginPut201CreatingSucceeded200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysBeginPutAsyncRelativeRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysBeginPutAsyncRelativeRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysBeginPost202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysBeginPost202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LRORetrysBeginPostAsyncRelativeRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LRORetrysBeginPostAsyncRelativeRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutNonRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutNonRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutNonRetry201Creating400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutNonRetry201Creating400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutNonRetry201Creating400InvalidJsonOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutNonRetry201Creating400InvalidJsonOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutAsyncRelativeRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutAsyncRelativeRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPostNonRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPostNonRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPost202NonRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPost202NonRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPostAsyncRelativeRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPostAsyncRelativeRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutError201NoProvisioningStatePayloadOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutError201NoProvisioningStatePayloadOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutAsyncRelativeRetryNoStatusOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutAsyncRelativeRetryNoStatusOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutAsyncRelativeRetryNoStatusPayloadOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutAsyncRelativeRetryNoStatusPayloadOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPost202NoLocationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPost202NoLocationOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPostAsyncRelativeRetryNoPayloadOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPostAsyncRelativeRetryNoPayloadOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPut200InvalidJsonOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPut200InvalidJsonOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutAsyncRelativeRetryInvalidHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutAsyncRelativeRetryInvalidHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPutAsyncRelativeRetryInvalidJsonPollingOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPutAsyncRelativeRetryInvalidJsonPollingOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPost202RetryInvalidHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPost202RetryInvalidHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPostAsyncRelativeRetryInvalidHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPostAsyncRelativeRetryInvalidHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsPostAsyncRelativeRetryInvalidJsonPollingOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsPostAsyncRelativeRetryInvalidJsonPollingOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutNonRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutNonRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutNonRetry201Creating400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutNonRetry201Creating400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutNonRetry201Creating400InvalidJsonOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutNonRetry201Creating400InvalidJsonOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutAsyncRelativeRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutAsyncRelativeRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPostNonRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPostNonRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPost202NonRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPost202NonRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPostAsyncRelativeRetry400OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPostAsyncRelativeRetry400OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutError201NoProvisioningStatePayloadOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutError201NoProvisioningStatePayloadOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutAsyncRelativeRetryNoStatusOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutAsyncRelativeRetryNoStatusOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutAsyncRelativeRetryNoStatusPayloadOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutAsyncRelativeRetryNoStatusPayloadOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPost202NoLocationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPost202NoLocationOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPostAsyncRelativeRetryNoPayloadOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPostAsyncRelativeRetryNoPayloadOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPut200InvalidJsonOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPut200InvalidJsonOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutAsyncRelativeRetryInvalidHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutAsyncRelativeRetryInvalidHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPutAsyncRelativeRetryInvalidJsonPollingOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPutAsyncRelativeRetryInvalidJsonPollingOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPost202RetryInvalidHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPost202RetryInvalidHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPostAsyncRelativeRetryInvalidHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPostAsyncRelativeRetryInvalidHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROSADsBeginPostAsyncRelativeRetryInvalidJsonPollingOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROSADsBeginPostAsyncRelativeRetryInvalidJsonPollingOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderPutAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderPutAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderPut201CreatingSucceeded200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderPut201CreatingSucceeded200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderPost202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderPost202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderPostAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderPostAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderBeginPutAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderBeginPutAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderBeginPut201CreatingSucceeded200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderBeginPut201CreatingSucceeded200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderBeginPost202Retry200OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderBeginPost202Retry200OptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}

/**
 * @interface
 * An interface representing LROsCustomHeaderBeginPostAsyncRetrySucceededOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LROsCustomHeaderBeginPostAsyncRetrySucceededOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [product] Product to put
   */
  product?: Product;
}


/**
 * Defines values for ProvisioningStateValues.
 * Possible values include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProvisioningStateValues =
 * <ProvisioningStateValues>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ProvisioningStateValues {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'canceled',
  Accepted = 'Accepted',
  Creating = 'Creating',
  Created = 'Created',
  Updating = 'Updating',
  Updated = 'Updated',
  Deleting = 'Deleting',
  Deleted = 'Deleted',
  OK = 'OK',
}

/**
 * Defines values for ProvisioningStateValues1.
 * Possible values include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProvisioningStateValues1 =
 * <ProvisioningStateValues1>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ProvisioningStateValues1 {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'canceled',
  Accepted = 'Accepted',
  Creating = 'Creating',
  Created = 'Created',
  Updating = 'Updating',
  Updated = 'Updated',
  Deleting = 'Deleting',
  Deleted = 'Deleted',
  OK = 'OK',
}

/**
 * Defines values for Status.
 * Possible values include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Status = <Status>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum Status {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'canceled',
  Accepted = 'Accepted',
  Creating = 'Creating',
  Created = 'Created',
  Updating = 'Updating',
  Updated = 'Updated',
  Deleting = 'Deleting',
  Deleted = 'Deleted',
  OK = 'OK',
}
