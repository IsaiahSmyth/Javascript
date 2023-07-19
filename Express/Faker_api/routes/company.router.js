const companies = require('../model/company.model');
const companyController = require('../controllers/company.controller');



module.exports = app =>{
    app.get('/api', companyController.hello);

    app.get('/api/companies', companyController.allCompanies);

    app.get('/api/companies/:id', companyController.oneCompany);

    app.post('/api/companies', companyController.newCompany);

    app.put('/api/companies/:id', companyController.updateCompany);

    app.delete('/api/companies/:id', companyController.deleteCompany);
}