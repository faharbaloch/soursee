'use strict';

/**
 * serviceinfo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::serviceinfo.serviceinfo');
