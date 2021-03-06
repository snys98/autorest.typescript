/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const ErrorModel = {
  required: false,
  serializedName: 'Error',
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      status: {
        required: false,
        serializedName: 'status',
        type: {
          name: 'Number'
        }
      },
      message: {
        required: false,
        serializedName: 'message',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const AutoRestParameterizedCustomHostTestClientOptions = {
  required: false,
  type: {
    name: 'Composite',
    className: 'AutoRestParameterizedCustomHostTestClientOptions',
    modelProperties: {
      dnsSuffix: {
        required: false,
        serializedName: 'dnsSuffix',
        defaultValue: 'host',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const PathsGetEmptyOptionalParams = {
  required: false,
  serializedName: 'GetEmptyOptions',
  type: {
    name: 'Composite',
    className: 'PathsGetEmptyOptionalParams',
    modelProperties: {
      keyVersion: {
        required: false,
        serializedName: 'keyVersion',
        defaultValue: 'v1',
        type: {
          name: 'String'
        }
      }
    }
  }
};
