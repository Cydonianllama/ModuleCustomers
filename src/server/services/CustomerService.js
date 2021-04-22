const CustomerRepository = require('../components/customer/CustomerRepository')
class CustomerService {

    constructor(
        customerRepostitory
    ){
        this.customer = customerRepostitory
    }

    async findByPage(page){
        let count = await this.customer.count()
        let report = await this.customer.findByPage(page)
        return {
            totalCustomers : count,
            currentPage : page,
            customers : report
        }
    }

    async create(customer){
        //let report = this.customer.findOne(customer.email)
        //console.log(report);
        let status = await this.customer.create(customer)
        return status
    }

    async update(id,customer){
        let status = await this.customer.update(id,customer)
        return status
    }

    async delete(id){
        let status = await this.customer.delete(id)
        return status
    }

    findOne(id){
        let report = this.customer.findOne(id)
        return report
    }
}
const customerService = new CustomerService(
    new CustomerRepository()
    )

module.exports = customerService