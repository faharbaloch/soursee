'use strict';

/**
 * ourservice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ourservice.ourservice');
