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
 * Usage strings container.
 *
 */
class VirtualNetworkUsageName {
  /**
   * Create a VirtualNetworkUsageName.
   * @property {string} [localizedValue] Localized subnet size and usage
   * string.
   * @property {string} [value] Subnet size and usage string.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualNetworkUsageName
   *
   * @returns {object} metadata of VirtualNetworkUsageName
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualNetworkUsageName',
      type: {
        name: 'Composite',
        className: 'VirtualNetworkUsageName',
        modelProperties: {
          localizedValue: {
            required: false,
            readOnly: true,
            serializedName: 'localizedValue',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualNetworkUsageName;
