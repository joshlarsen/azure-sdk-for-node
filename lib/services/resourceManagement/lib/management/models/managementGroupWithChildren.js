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
 * The management group details.
 *
 */
class ManagementGroupWithChildren {
  /**
   * Create a ManagementGroupWithChildren.
   * @member {string} [id] The ID of the management group. E.g.
   * /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000
   * @member {string} [type] The type of the resource. E.g.
   * /providers/Microsoft.Management/managementGroups
   * @member {uuid} [name] The name of the management group. E.g.
   * 20000000-0000-0000-0000-000000000000
   * @member {uuid} [tenantId] The AAD Tenant ID associated with the management
   * group. E.g. 10000000-0000-0000-0000-000000000000
   * @member {string} [displayName] The friendly name of the management group.
   * @member {object} [details] Details.
   * @member {number} [details.version] The version number of the object.
   * @member {date} [details.updatedTime] The date and time when this object
   * was last updated.
   * @member {string} [details.updatedBy] The identity of the principal or
   * process that updated the object.
   * @member {object} [details.parent]
   * @member {string} [details.parent.parentId] The ID of the parent management
   * group. E.g.
   * /providers/Microsoft.Management/managementGroups/30000000-0000-0000-0000-000000000000
   * @member {string} [details.parent.displayName] The friendly name of the
   * management group.
   * @member {string} [details.managementGroupType] Possible values include:
   * 'Enrollment', 'Department', 'Account', 'Subscription'
   * @member {array} [children] The list of children.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ManagementGroupWithChildren
   *
   * @returns {object} metadata of ManagementGroupWithChildren
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagementGroupWithChildren',
      type: {
        name: 'Composite',
        className: 'ManagementGroupWithChildren',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'properties.tenantId',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'properties.details',
            type: {
              name: 'Composite',
              className: 'ManagementGroupDetailsProperties'
            }
          },
          children: {
            required: false,
            serializedName: 'properties.children',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ManagementGroupChildInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ManagementGroupChildInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ManagementGroupWithChildren;