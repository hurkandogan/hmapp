const mysql = require('mysql2');
const { getAllObjects } = require('./objects/getAllObjects');
const { saveObject } = require('./objects/saveObject');
const { getCategories } = require('./categories/getCategories');
const { getDashboardTotals } = require('./dashboard/getDashboardTotals');
const { getAllExpenses } = require('./expense/getAllExpenses');
const { saveExpense } = require('./expense/saveExpense');
const { editExpense } = require('./expense/editExpense');
const { saveOilStatus } = require('./expense/saveOilStatus');
const { getOilStatus } = require('./expense/getOilStatus');
const { deleteOilStatus } = require('./expense/deleteOilStatus');
const { getExpensesForObject } = require('./expense/getExpensesForObject');
const { saveInsurance } = require('./insurances/saveInsurance');
const { editInsurance } = require('./insurances/editInsurance');
const { getInsurances } = require('./insurances/getInsurances');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

const success = (data = null) => {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        },
        body: JSON.stringify({ data: data }),
    };
    return response;
};

const error = (err) => {
    return {
        statusCode: 500,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        },
        body: JSON.stringify({ msg: err }),
    };
};

exports.handler = async (event) => {
    console.log('Main Event:', event);

    switch (event.resource) {
        /***** DASHBOARD *****/
        case '/dashboard': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await getDashboardTotals(con, event.body);
                    console.log('getDashboardTotals: ', result);
                    if (result) return success(result);
                    return error('No objects found or some error occured.');
                }
            }
        }
            break;

        /***** OBJECTS *****/
        case '/objects': {
            switch (event.httpMethod) {
                case 'GET': {
                    const result = await getAllObjects(con);
                    console.log('getAllObjects: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No objects found or some error occured.');
                }
                case 'POST': {
                    const result = await saveObject(con, event.body);
                    console.log('saveObject: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No objects found or some error occured.');
                }
            }
        }
            break;

        /***** CATEGORIES *****/
        case '/categories': {
            switch (event.httpMethod) {
                case 'GET': {
                    const result = await getCategories(con);
                    console.log('getCategories: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No categories found or some error occured.');
                }
            }
        }
            break;

        /***** SAVE EXPENSE *****/
        case '/saveexpense': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await saveExpense(con, event.body);
                    console.log('saveExpense: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No expenses found or some error occured.');
                }
            }
        }
            break;

        /***** EDIT EXPENSE *****/
        case '/editexpense': {
            const result = await editExpense(con, event.body);
            console.log('editExpense: ', result);

            if (result) return success(result);
            return error('No expenses found or some error occured.');

        }
            break;

        /***** GET EXPENSES FOR OBJECT *****/
        case '/getexpensesforobject': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await getExpensesForObject(con, event.body);
                    console.log('getExpensesForObject: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No expenses found for this object or some error occured.');
                }
            }
        }
            break;

        /***** GET ALL EXPENSES *****/
        case '/getallexpenses': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await getAllExpenses(con, event.body);
                    console.log('getAllExpenses: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No expenses found for this object or some error occured.');
                }
            }
        }
            break;

        /***** GET OIL STATUS *****/
        case '/getoilstatus': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await getOilStatus(con, event.body);
                    console.log('getOilStatus: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No oil status found or some error occured.');
                }
            }
        }
            break;

        /***** SAVE OIL STATUS *****/
        case '/saveoilstatus': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await saveOilStatus(con, event.body);
                    console.log('saveOilStatus: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('Some error occured.');
                }
            }
        }
            break;

        /***** DELETE OIL STATUS *****/
        case '/deleteoilstatus': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await deleteOilStatus(con, event.body);
                    console.log('deleteOilStatus: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('Some error occured.');
                }
            }
        }
            break;

        /***** GET INSURANCES *****/
        case '/getinsurances': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await getInsurances(con, event.body);
                    console.log('getInsurances: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('No insurances found or some error occured.');
                }
            }
        }
            break;

        /***** SAVE INSURANCE *****/
        case '/saveinsurance': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await saveInsurance(con, event.body);
                    console.log('saveInsurance: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('Some error occured.');
                }
            }
        }
            break;

        /***** EDIT INSURANCE *****/
        case '/editinsurance': {
            switch (event.httpMethod) {
                case 'POST': {
                    const result = await editInsurance(con, event.body);
                    console.log('editInsurance: ', result);
                    if (result) {
                        return success(result);
                    }
                    return error('Some error occured.');
                }
            }
        }
            break;
        default:
            return error({ msg: 'This route is not available.' });
    }
};
