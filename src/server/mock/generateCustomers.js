const CustomerSchema = require('../dbManager/CustomerSchema')

const generateName = () => {
    let code = Math.floor(Math.random()*10 * 2)
    switch(code){
        case 0:
            return 'erick'
        case 1:
            return 'margarita'
        case 2:
            return 'pepo'
        case 3:
            return 'pedro'
        case 4:
            return 'carla'
        case 5 :
            return 'sofia'
        case 6 :
            return 'miriam'
        case 7 :
            return 'juana'
        case 8 :
            return 'manuel'
        case 9:
            return 'federico'
        case 10:
            return 'laura'
        case 11:
            return 'paolo'
        case 12:
            return 'fede'
        case 13:
            return 'michelle'
        case 14:
            return 'ellis'
        case 15:
            return 'hanni'
        case 16:
            return 'Olivia'
        case 17:
            return 'chuu'
        case 18:
            return 'jesus'
        case 19:
            return 'justiniano'
        default :
            return 'fileponcio'
    }
}

const generateLastName = () => {
    let code = Math.floor(Math.random() * 10 * 2)
    switch (code) {
        case 0:
            return 'Grandez'
        case 1:
            return 'Fujimory'
        case 2:
            return 'kishinski'
        case 3:
            return 'Mendoza'
        case 4:
            return 'Lebuandoski'
        case 5:
            return 'Castillo'
        case 6:
            return 'Sinatra'
        case 7:
            return 'Vargas'
        case 8:
            return 'Potter'
        case 9:
            return 'Park'
        case 10:
            return 'Desgracia'
        case 11:
            return 'Veraz'
        case 12:
            return 'Linares'
        case 13:
            return 'Bellamy'
        case 14:
            return 'Simpson'
        case 15:
            return 'Martinez'
        case 16:
            return 'Quispe'
        case 17:
            return 'Florin'
        case 18:
            return 'Mamani'
        case 19:
            return 'Smith'
        default:
            return 'Macacu'
    }
}

function generatePhoneNumber(){
    let phone = Math.floor(Math.random() * 1000000000)
    return phone
}

async function generateCustomers(qty){
    
    const generateCustomer = () => {
        let firstName = generateName()
        let lastName = generateLastName()
        let email = firstName + "@" + lastName + ".com"
        let phoneNumber = generatePhoneNumber()
        const Customer = () => {
            return {
                firstName,
                lastName,
                email,
                phoneNumber
            }
        }
        return Customer()
    }

    for(let i = 0 ; i < qty ; i++){
        let customer = new CustomerSchema(generateCustomer())
        await customer.save()
        console.log('customer n:',i+1);
    }
    
}

module.exports = {
    generateCustomers
}