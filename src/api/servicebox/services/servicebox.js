'use strict';

/**
 * servicebox service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::servicebox.servicebox');
