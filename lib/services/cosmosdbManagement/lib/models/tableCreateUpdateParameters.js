/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Parameters to create and update Cosmos DB Table.
 *
 */
class TableCreateUpdateParameters {
  /**
   * Create a TableCreateUpdateParameters.
   * @property {object} resource The standard JSON format of a Table
   * @property {string} [resource.id] Name of the Cosmos DB table
   * @property {object} options A key-value pair of options to be applied for
   * the request. This corresponds to the headers sent with the request.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TableCreateUpdateParameters
   *
   * @returns {object} metadata of TableCreateUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TableCreateUpdateParameters',
      type: {
        name: 'Composite',
        className: 'TableCreateUpdateParameters',
        modelProperties: {
          resource: {
            required: true,
            serializedName: 'properties.resource',
            type: {
              name: 'Composite',
              className: 'TableResource'
            }
          },
          options: {
            required: true,
            serializedName: 'properties.options',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TableCreateUpdateParameters;