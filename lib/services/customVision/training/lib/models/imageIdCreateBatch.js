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
 * Class representing a ImageIdCreateBatch.
 */
class ImageIdCreateBatch {
  /**
   * Create a ImageIdCreateBatch.
   * @property {array} [images]
   * @property {array} [tagIds]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageIdCreateBatch
   *
   * @returns {object} metadata of ImageIdCreateBatch
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageIdCreateBatch',
      type: {
        name: 'Composite',
        className: 'ImageIdCreateBatch',
        modelProperties: {
          images: {
            required: false,
            serializedName: 'images',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageIdCreateEntryElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageIdCreateEntry'
                  }
              }
            }
          },
          tagIds: {
            required: false,
            serializedName: 'tagIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UuidElementType',
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

module.exports = ImageIdCreateBatch;
