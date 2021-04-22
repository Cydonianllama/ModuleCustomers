// a db factory with typescript would be this code more modular
const CustomerSchema = require('../../dbManager/CustomerSchema')

//some configuration put in model business
const {
    //find by page
    limitPagination
} = require('../../configs/ConfigCustomerAPI')

class CustomerRespository {
    
    constructor(){

    }

    async count(){
        let report = 0
        try{
            report = CustomerSchema.count()
        }catch(err){
            report = 0
            console.log(err)
        }
        return report
    }

    async findOne(id){
        let report = {}
        try{
            report = await CustomerSchema.findById(id)
        }catch(err){
            report = {error : 'need a correct id'}
            console.log('some error in find one');
        }
        return report
    }

    async findByPage(page){
        let report = []
        try{
            report = await CustomerSchema.find().skip((page-1)*limitPagination).limit(limitPagination)
        }catch(err){
            console.log(err)
        }
        return report
    }

    async create(customer){
        let isCreated = false
        try{
            let newCustomer = new CustomerSchema(customer)
            await newCustomer.save()
            isCreated = true
        }catch(err){
            isCreated = false
            console.log(err);
        }
        return isCreated
    }

    async update(id,customer){
        console.log(customer);
        let report = {}
        try{
            report = await CustomerSchema.findOneAndUpdate(
                {
                    _id: id,
                },
                customer,
                { new: true }
            )
            console.log('updating now : ',report);
        }catch(err){
            console.log(err)
        }
        return report
    }

    async delete(id){
        let isDeleted = false
        try{
            await CustomerSchema.findOneAndDelete(id)
            isDeleted = true
        }catch(err){
            isDeleted = false
            console.log(err)
        }
        return isDeleted
    }

}

module.exports = CustomerRespository