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
 * Describes the parameters for a compose deployment upgrade.
 *
 */
class ComposeDeploymentUpgradeDescription {
  /**
   * Create a ComposeDeploymentUpgradeDescription.
   * @property {string} deploymentName The name of the deployment.
   * @property {string} composeFileContent The content of the compose file that
   * describes the deployment to create.
   * @property {object} [registryCredential] Credential information to connect
   * to container registry.
   * @property {string} [registryCredential.registryUserName] The user name to
   * connect to container registry.
   * @property {string} [registryCredential.registryPassword] The password for
   * supplied username to connect to container registry.
   * @property {boolean} [registryCredential.passwordEncrypted] Indicates that
   * supplied container registry password is encrypted.
   * @property {string} upgradeKind The kind of upgrade out of the following
   * possible values. Possible values include: 'Invalid', 'Rolling'. Default
   * value: 'Rolling' .
   * @property {string} [rollingUpgradeMode] The mode used to monitor health
   * during a rolling upgrade. The values are UnmonitoredAuto,
   * UnmonitoredManual, and Monitored. Possible values include: 'Invalid',
   * 'UnmonitoredAuto', 'UnmonitoredManual', 'Monitored'. Default value:
   * 'UnmonitoredAuto' .
   * @property {number} [upgradeReplicaSetCheckTimeoutInSeconds] The maximum
   * amount of time to block processing of an upgrade domain and prevent loss
   * of availability when there are unexpected issues. When this timeout
   * expires, processing of the upgrade domain will proceed regardless of
   * availability loss issues. The timeout is reset at the start of each
   * upgrade domain. Valid values are between 0 and 42949672925 inclusive.
   * (unsigned 32-bit integer).
   * @property {boolean} [forceRestart] If true, then processes are forcefully
   * restarted during upgrade even when the code version has not changed (the
   * upgrade only changes configuration or data).
   * @property {object} [monitoringPolicy] Describes the parameters for
   * monitoring an upgrade in Monitored mode.
   * @property {string} [monitoringPolicy.failureAction] The compensating
   * action to perform when a Monitored upgrade encounters monitoring policy or
   * health policy violations.
   * Invalid indicates the failure action is invalid. Rollback specifies that
   * the upgrade will start rolling back automatically.
   * Manual indicates that the upgrade will switch to UnmonitoredManual upgrade
   * mode. Possible values include: 'Invalid', 'Rollback', 'Manual'
   * @property {string}
   * [monitoringPolicy.healthCheckWaitDurationInMilliseconds] The amount of
   * time to wait after completing an upgrade domain before applying health
   * policies. It is first interpreted as a string representing an ISO 8601
   * duration. If that fails, then it is interpreted as a number representing
   * the total number of milliseconds.
   * @property {string}
   * [monitoringPolicy.healthCheckStableDurationInMilliseconds] The amount of
   * time that the application or cluster must remain healthy before the
   * upgrade proceeds to the next upgrade domain. It is first interpreted as a
   * string representing an ISO 8601 duration. If that fails, then it is
   * interpreted as a number representing the total number of milliseconds.
   * @property {string}
   * [monitoringPolicy.healthCheckRetryTimeoutInMilliseconds] The amount of
   * time to retry health evaluation when the application or cluster is
   * unhealthy before FailureAction is executed. It is first interpreted as a
   * string representing an ISO 8601 duration. If that fails, then it is
   * interpreted as a number representing the total number of milliseconds.
   * @property {string} [monitoringPolicy.upgradeTimeoutInMilliseconds] The
   * amount of time the overall upgrade has to complete before FailureAction is
   * executed. It is first interpreted as a string representing an ISO 8601
   * duration. If that fails, then it is interpreted as a number representing
   * the total number of milliseconds.
   * @property {string} [monitoringPolicy.upgradeDomainTimeoutInMilliseconds]
   * The amount of time each upgrade domain has to complete before
   * FailureAction is executed. It is first interpreted as a string
   * representing an ISO 8601 duration. If that fails, then it is interpreted
   * as a number representing the total number of milliseconds.
   * @property {object} [applicationHealthPolicy] Defines a health policy used
   * to evaluate the health of an application or one of its children entities.
   * @property {boolean} [applicationHealthPolicy.considerWarningAsError]
   * Indicates whether warnings are treated with the same severity as errors.
   * @property {number}
   * [applicationHealthPolicy.maxPercentUnhealthyDeployedApplications] The
   * maximum allowed percentage of unhealthy deployed applications. Allowed
   * values are Byte values from zero to 100.
   * The percentage represents the maximum tolerated percentage of deployed
   * applications that can be unhealthy before the application is considered in
   * error.
   * This is calculated by dividing the number of unhealthy deployed
   * applications over the number of nodes where the application is currently
   * deployed on in the cluster.
   * The computation rounds up to tolerate one failure on small numbers of
   * nodes. Default percentage is zero.
   * @property {object}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy] The health policy
   * used by default to evaluate the health of a service type.
   * @property {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyPartitionsPerService]
   * The maximum allowed percentage of unhealthy partitions per service.
   * Allowed values are Byte values from zero to 100
   *
   * The percentage represents the maximum tolerated percentage of partitions
   * that can be unhealthy before the service is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * partition, the health is evaluated as Warning.
   * The percentage is calculated by dividing the number of unhealthy
   * partitions over the total number of partitions in the service.
   * The computation rounds up to tolerate one failure on small numbers of
   * partitions. Default percentage is zero.
   * @property {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyReplicasPerPartition]
   * The maximum allowed percentage of unhealthy replicas per partition.
   * Allowed values are Byte values from zero to 100.
   *
   * The percentage represents the maximum tolerated percentage of replicas
   * that can be unhealthy before the partition is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * replica, the health is evaluated as Warning.
   * The percentage is calculated by dividing the number of unhealthy replicas
   * over the total number of replicas in the partition.
   * The computation rounds up to tolerate one failure on small numbers of
   * replicas. Default percentage is zero.
   * @property {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyServices]
   * The maximum allowed percentage of unhealthy services. Allowed values are
   * Byte values from zero to 100.
   *
   * The percentage represents the maximum tolerated percentage of services
   * that can be unhealthy before the application is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * service, the health is evaluated as Warning.
   * This is calculated by dividing the number of unhealthy services of the
   * specific service type over the total number of services of the specific
   * service type.
   * The computation rounds up to tolerate one failure on small numbers of
   * services. Default percentage is zero.
   * @property {array} [applicationHealthPolicy.serviceTypeHealthPolicyMap] The
   * map with service type health policy per service type name. The map is
   * empty by default.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComposeDeploymentUpgradeDescription
   *
   * @returns {object} metadata of ComposeDeploymentUpgradeDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComposeDeploymentUpgradeDescription',
      type: {
        name: 'Composite',
        className: 'ComposeDeploymentUpgradeDescription',
        modelProperties: {
          deploymentName: {
            required: true,
            serializedName: 'DeploymentName',
            type: {
              name: 'String'
            }
          },
          composeFileContent: {
            required: true,
            serializedName: 'ComposeFileContent',
            type: {
              name: 'String'
            }
          },
          registryCredential: {
            required: false,
            serializedName: 'RegistryCredential',
            type: {
              name: 'Composite',
              className: 'RegistryCredential'
            }
          },
          upgradeKind: {
            required: true,
            serializedName: 'UpgradeKind',
            defaultValue: 'Rolling',
            type: {
              name: 'String'
            }
          },
          rollingUpgradeMode: {
            required: false,
            serializedName: 'RollingUpgradeMode',
            defaultValue: 'UnmonitoredAuto',
            type: {
              name: 'String'
            }
          },
          upgradeReplicaSetCheckTimeoutInSeconds: {
            required: false,
            serializedName: 'UpgradeReplicaSetCheckTimeoutInSeconds',
            type: {
              name: 'Number'
            }
          },
          forceRestart: {
            required: false,
            serializedName: 'ForceRestart',
            type: {
              name: 'Boolean'
            }
          },
          monitoringPolicy: {
            required: false,
            serializedName: 'MonitoringPolicy',
            type: {
              name: 'Composite',
              className: 'MonitoringPolicyDescription'
            }
          },
          applicationHealthPolicy: {
            required: false,
            serializedName: 'ApplicationHealthPolicy',
            type: {
              name: 'Composite',
              className: 'ApplicationHealthPolicy'
            }
          }
        }
      }
    };
  }
}

module.exports = ComposeDeploymentUpgradeDescription;
