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
 * Collection of certitificate orders.
 */
class AppServiceCertificateOrderCollection extends Array {
  /**
   * Create a AppServiceCertificateOrderCollection.
   * @member {string} [nextLink] Link to next page of resources.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AppServiceCertificateOrderCollection
   *
   * @returns {object} metadata of AppServiceCertificateOrderCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppServiceCertificateOrderCollection',
      type: {
        name: 'Composite',
        className: 'AppServiceCertificateOrderCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AppServiceCertificateOrderElementType',
                  type: {
                    name: 'Composite',
                    className: 'AppServiceCertificateOrder'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
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

module.exports = AppServiceCertificateOrderCollection;
