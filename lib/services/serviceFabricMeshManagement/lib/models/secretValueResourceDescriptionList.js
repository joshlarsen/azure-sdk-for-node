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
 * A pageable list of values of a secret resource. The information does not
 * include only the name of the value and not the actual unecrypted value.
 */
class SecretValueResourceDescriptionList extends Array {
  /**
   * Create a SecretValueResourceDescriptionList.
   * @member {string} [nextLink] URI to fetch the next page of the list.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SecretValueResourceDescriptionList
   *
   * @returns {object} metadata of SecretValueResourceDescriptionList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SecretValueResourceDescriptionList',
      type: {
        name: 'Composite',
        className: 'SecretValueResourceDescriptionList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SecretValueResourceDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'SecretValueResourceDescription'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SecretValueResourceDescriptionList;