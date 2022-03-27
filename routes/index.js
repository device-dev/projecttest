const express = require('express')
const router = express.Router()
const db = require('../config');
router.get('/', (req, res) => {
    
    // const user = await db.knex('users').where(db.knex.raw('?? = ?', ['users.user_token', user_token]));

    // res.send(user);
})

router.get('/typecase', async(req, res) => {
    
    const case_notification_type = await db.knex('case_notification_type').select('*');
    res.send(case_notification_type);
})

router.get('/property', async(req, res) => {
    
    const property = await db.knex('property').select('*');
    res.send(property);
})

router.get('/customer', async(req, res) => {
    
    const customer = await db.knex('customer').select('*');
    res.send(customer);
})

router.get('/datacase', async(req, res) => {
    
    const datacase = await db.knex('case').select('*').
    innerJoin('customer', 'case.customer_id', 'customer.id')
    .innerJoin('employee', 'case.emp_id', 'employee.id')
    .innerJoin('case_notification_type', 'case.type_id', 'case_notification_type.id')
    .innerJoin('property', 'case.property_id', 'property.id')
    res.send(datacase);
})


module.exports = router;