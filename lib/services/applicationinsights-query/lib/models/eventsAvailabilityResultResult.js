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
 * An availability result result
 *
 * @extends models['EventsResultData']
 */
class EventsAvailabilityResultResult extends models['EventsResultData'] {
  /**
   * Create a EventsAvailabilityResultResult.
   * @member {object} [availabilityResult]
   * @member {string} [availabilityResult.name] The name of the availability
   * result
   * @member {string} [availabilityResult.success] Indicates if the
   * availability result was successful
   * @member {number} [availabilityResult.duration] The duration of the
   * availability result
   * @member {string} [availabilityResult.performanceBucket] The performance
   * bucket of the availability result
   * @member {string} [availabilityResult.message] The message of the
   * availability result
   * @member {string} [availabilityResult.location] The location of the
   * availability result
   * @member {string} [availabilityResult.id] The ID of the availability result
   * @member {string} [availabilityResult.size] The size of the availability
   * result
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EventsAvailabilityResultResult
   *
   * @returns {object} metadata of EventsAvailabilityResultResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'availabilityResult',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'EventsResultData',
        className: 'EventsAvailabilityResultResult',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          customDimensions: {
            required: false,
            serializedName: 'customDimensions',
            type: {
              name: 'Composite',
              className: 'EventsResultDataCustomDimensions'
            }
          },
          customMeasurements: {
            required: false,
            serializedName: 'customMeasurements',
            type: {
              name: 'Composite',
              className: 'EventsResultDataCustomMeasurements'
            }
          },
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'Composite',
              className: 'EventsOperationInfo'
            }
          },
          session: {
            required: false,
            serializedName: 'session',
            type: {
              name: 'Composite',
              className: 'EventsSessionInfo'
            }
          },
          user: {
            required: false,
            serializedName: 'user',
            type: {
              name: 'Composite',
              className: 'EventsUserInfo'
            }
          },
          cloud: {
            required: false,
            serializedName: 'cloud',
            type: {
              name: 'Composite',
              className: 'EventsCloudInfo'
            }
          },
          ai: {
            required: false,
            serializedName: 'ai',
            type: {
              name: 'Composite',
              className: 'EventsAiInfo'
            }
          },
          application: {
            required: false,
            serializedName: 'application',
            type: {
              name: 'Composite',
              className: 'EventsApplicationInfo'
            }
          },
          client: {
            required: false,
            serializedName: 'client',
            type: {
              name: 'Composite',
              className: 'EventsClientInfo'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          availabilityResult: {
            required: false,
            serializedName: 'availabilityResult',
            type: {
              name: 'Composite',
              className: 'EventsAvailabilityResultInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = EventsAvailabilityResultResult;
