'use strict';

/**
 * csea service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::csea.csea');
