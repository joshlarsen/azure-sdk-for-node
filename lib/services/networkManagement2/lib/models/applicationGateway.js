/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ApplicationGateway class.
 * @constructor
 * ApplicationGateways resource
 * @member {string} [etag] Gets a unique read-only string that changes
 * whenever the resource is updated
 * 
 * @member {object} [sku] Gets or sets sku of application gateway resource
 * 
 * @member {string} [sku.name] Gets or sets name of application gateway SKU.
 * Possible values for this property include: 'Standard_Small',
 * 'Standard_Medium', 'Standard_Large'.
 * 
 * @member {string} [sku.tier] Gets or sets tier of application gateway.
 * Possible values for this property include: 'Standard'.
 * 
 * @member {number} [sku.capacity] Gets or sets capacity (instance count) of
 * application gateway
 * 
 * @member {string} [operationalState] Gets operational state of application
 * gateway resource. Possible values for this property include: 'Stopped',
 * 'Starting', 'Running', 'Stopping'.
 * 
 * @member {array} [gatewayIPConfigurations] Gets or sets subnets of
 * application gateway resource
 * 
 * @member {array} [sslCertificates] Gets or sets ssl certificates of
 * application gateway resource
 * 
 * @member {array} [frontendIPConfigurations] Gets or sets frontend IP
 * addresses of application gateway resource
 * 
 * @member {array} [frontendPorts] Gets or sets frontend ports of application
 * gateway resource
 * 
 * @member {array} [probes] Gets or sets probes of application gateway resource
 * 
 * @member {array} [backendAddressPools] Gets or sets backend address pool of
 * application gateway resource
 * 
 * @member {array} [backendHttpSettingsCollection] Gets or sets backend http
 * settings of application gateway resource
 * 
 * @member {array} [httpListeners] Gets or sets HTTP listeners of application
 * gateway resource
 * 
 * @member {array} [urlPathMaps] Gets or sets URL path map of application
 * gateway resource
 * 
 * @member {array} [requestRoutingRules] Gets or sets request routing rules of
 * application gateway resource
 * 
 * @member {string} [resourceGuid] Gets or sets resource guid property of the
 * ApplicationGateway resource
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * ApplicationGateway resource Updating/Deleting/Failed
 * 
 */
function ApplicationGateway() {
  ApplicationGateway['super_'].call(this);
}

util.inherits(ApplicationGateway, models['Resource']);

/**
 * Defines the metadata of ApplicationGateway
 *
 * @returns {object} metadata of ApplicationGateway
 *
 */
ApplicationGateway.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApplicationGateway',
    type: {
      name: 'Composite',
      className: 'ApplicationGateway',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
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
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        },
        sku: {
          required: false,
          serializedName: 'properties.sku',
          type: {
            name: 'Composite',
            className: 'ApplicationGatewaySku'
          }
        },
        operationalState: {
          required: false,
          serializedName: 'properties.operationalState',
          type: {
            name: 'String'
          }
        },
        gatewayIPConfigurations: {
          required: false,
          serializedName: 'properties.gatewayIPConfigurations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayIPConfigurationElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayIPConfiguration'
                }
            }
          }
        },
        sslCertificates: {
          required: false,
          serializedName: 'properties.sslCertificates',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewaySslCertificateElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewaySslCertificate'
                }
            }
          }
        },
        frontendIPConfigurations: {
          required: false,
          serializedName: 'properties.frontendIPConfigurations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayFrontendIPConfigurationElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayFrontendIPConfiguration'
                }
            }
          }
        },
        frontendPorts: {
          required: false,
          serializedName: 'properties.frontendPorts',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayFrontendPortElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayFrontendPort'
                }
            }
          }
        },
        probes: {
          required: false,
          serializedName: 'properties.probes',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayProbeElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayProbe'
                }
            }
          }
        },
        backendAddressPools: {
          required: false,
          serializedName: 'properties.backendAddressPools',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayBackendAddressPoolElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayBackendAddressPool'
                }
            }
          }
        },
        backendHttpSettingsCollection: {
          required: false,
          serializedName: 'properties.backendHttpSettingsCollection',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayBackendHttpSettingsElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayBackendHttpSettings'
                }
            }
          }
        },
        httpListeners: {
          required: false,
          serializedName: 'properties.httpListeners',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayHttpListenerElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayHttpListener'
                }
            }
          }
        },
        urlPathMaps: {
          required: false,
          serializedName: 'properties.urlPathMaps',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayUrlPathMapElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayUrlPathMap'
                }
            }
          }
        },
        requestRoutingRules: {
          required: false,
          serializedName: 'properties.requestRoutingRules',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayRequestRoutingRuleElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayRequestRoutingRule'
                }
            }
          }
        },
        resourceGuid: {
          required: false,
          serializedName: 'properties.resourceGuid',
          type: {
            name: 'String'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ApplicationGateway;