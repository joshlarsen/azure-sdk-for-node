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
 * Parameters to create and update Cosmos DB Mongo collection.
 *
 */
class MongoCollectionCreateUpdateParameters {
  /**
   * Create a MongoCollectionCreateUpdateParameters.
   * @property {object} resource The standard JSON format of a Mongo collection
   * @property {string} [resource.id] Name of the Cosmos DB Mongo collection
   * @property {object} [resource.shardKey] A key-value pair of shard keys to
   * be applied for the request.
   * @property {array} [resource.indexes] List of index keys
   * @property {object} options A key-value pair of options to be applied for
   * the request. This corresponds to the headers sent with the request.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MongoCollectionCreateUpdateParameters
   *
   * @returns {object} metadata of MongoCollectionCreateUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MongoCollectionCreateUpdateParameters',
      type: {
        name: 'Composite',
        className: 'MongoCollectionCreateUpdateParameters',
        modelProperties: {
          resource: {
            required: true,
            serializedName: 'properties.resource',
            type: {
              name: 'Composite',
              className: 'MongoCollectionResource'
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

module.exports = MongoCollectionCreateUpdateParameters;