/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('case_notification_type', function (table) {
            table.increments('id');
            table.string('type_name', 255).notNullable();
        })
        .createTable('customer', function (table) {
            table.increments('id');
            table.string('firstname', 255).notNullable();
            table.string('lastname', 255).notNullable();
            table.string('tel', 10).notNullable();
            table.string('email', 1000).notNullable();
        })
        .createTable('property_type', function (table) {
            table.increments('id');
            table.string('description', 255).notNullable();
        })
        .createTable('property', function (table) {
            table.increments('id');
            table.integer('property_type_id').unsigned().notNullable().references('id').inTable('property_type').onDelete('CASCADE').index();
            table.string('propertytype', 255).notNullable();
            table.string('address', 500).notNullable();
        })
        .createTable('employee', function (table) {
            table.increments('id');
            table.string('emp_name', 255).notNullable();
            table.string('emp_lastname', 255).notNullable();
            table.string('emp_tel', 10).notNullable();
            table.string('emp_email', 1000).notNullable();
        })
        .createTable('case', function (table) {
            table.increments('id');
            table.integer('type_id').unsigned().notNullable().references('id').inTable('case_notification_type').onDelete('CASCADE').index();
            table.integer('customer_id').unsigned().notNullable().references('id').inTable('customer').onDelete('CASCADE').index();
            table.integer('emp_id').unsigned().notNullable().references('id').inTable('employee').onDelete('CASCADE').index();
            table.integer('property_id').unsigned().notNullable().references('id').inTable('property').onDelete('CASCADE').index();
            table.string('title', 255).notNullable();
            table.text('type_detail', 255).notNullable();
            table.string('status', 50).notNullable();
            table.string('remark', 50).notNullable();
        });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
