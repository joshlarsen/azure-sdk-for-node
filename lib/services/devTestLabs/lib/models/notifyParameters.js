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
 * Properties for generating a Notification.
 *
 */
class NotifyParameters {
  /**
   * Create a NotifyParameters.
   * @member {string} [eventName] The type of event (i.e. AutoShutdown, Cost).
   * Possible values include: 'AutoShutdown', 'Cost'
   * @member {string} [jsonPayload] Properties for the notification in json
   * format.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotifyParameters
   *
   * @returns {object} metadata of NotifyParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotifyParameters',
      type: {
        name: 'Composite',
        className: 'NotifyParameters',
        modelProperties: {
          eventName: {
            required: false,
            serializedName: 'eventName',
            type: {
              name: 'String'
            }
          },
          jsonPayload: {
            required: false,
            serializedName: 'jsonPayload',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotifyParameters;