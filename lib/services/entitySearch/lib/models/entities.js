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
 * Defines an entity answer.
 *
 * @extends models['SearchResultsAnswer']
 */
class Entities extends models['SearchResultsAnswer'] {
  /**
   * Create a Entities.
   * @member {string} [queryScenario] The supported query scenario. This field
   * is set to DominantEntity or DisambiguationItem. The field is set to
   * DominantEntity if Bing determines that only a single entity satisfies the
   * request. For example, a book, movie, person, or attraction. If multiple
   * entities could satisfy the request, the field is set to
   * DisambiguationItem. For example, if the request uses the generic title of
   * a movie franchise, the entity's type would likely be DisambiguationItem.
   * But, if the request specifies a specific title from the franchise, the
   * entity's type would likely be DominantEntity. Possible values include:
   * 'DominantEntity', 'DominantEntityWithDisambiguation', 'Disambiguation',
   * 'List', 'ListWithPivot'. Default value: 'DominantEntity' .
   * @member {array} value A list of entities.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Entities
   *
   * @returns {object} metadata of Entities
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Entities',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'Entities',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          contractualRules: {
            required: false,
            readOnly: true,
            serializedName: 'contractualRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContractualRulesContractualRuleElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ContractualRulesContractualRule',
                    className: 'ContractualRulesContractualRule'
                  }
              }
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          queryContext: {
            required: false,
            readOnly: true,
            serializedName: 'queryContext',
            type: {
              name: 'Composite',
              className: 'QueryContext'
            }
          },
          queryScenario: {
            required: false,
            readOnly: true,
            serializedName: 'queryScenario',
            defaultValue: 'DominantEntity',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Entities;