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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the RoleResourceFormat class.
 * @constructor
 * The role resource format.
 *
 * @member {string} [roleName] The role name.
 *
 * @member {string} [description] The description of the role.
 *
 */
class RoleResourceFormat extends models['ProxyResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RoleResourceFormat
   *
   * @returns {object} metadata of RoleResourceFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoleResourceFormat',
      type: {
        name: 'Composite',
        className: 'RoleResourceFormat',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          roleName: {
            required: false,
            serializedName: 'properties.roleName',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RoleResourceFormat;