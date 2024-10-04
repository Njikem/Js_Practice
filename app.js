let customer_name = 'Maureen';
let account_balance = 60000;
let is_active = true;


if(account_balance >=1000){
    console.log(`Name:${customer_name}  Amount:${account_balance}`)

}else if(account_balance >=5000){
    console.log('Your account balance is over 5000, yahhh')
}else{
    console.log(`${customer_name}`)
}


if(account_balance > 10000){
    console.log(`${customer_name}: Wow! Your account balance is over 10000. You are rich!`)
}


if(is_active === false && account_balance >= 1){
    console.log(`System Error! ${customer_name}`)
}

if(customer_name === 'Robert Guy' && account_balance >0 && is_active === true){
    console.log('Robert Alert');
}


let customer_object = [
    {
        name: 'Bright',
        total_balance: 4000,
        is_active: true,
    }  
]


if(customer_object.total_balance < 0){
    console.log('Error')
}


let customers = [
     {
        name: 'Nunti',
        total_balance: 8000,
        is_active: false,
     },

     {
        name: 'Alam',
        total_balance: 2000,
        is_active: true,
     },

     {
        name: 'Galus',
        total_balance: 6000,
        is_active: true,
     }
]


for(let i=0; i < customers.length; i++){
     let customer = customers[i];
     console.log(customer);
    console.log(`name:${customer.name}, balance:${customer.total_balance}`);
}


for(let i=0; i < customers.length; i++){
    let customer = customers[i];
    console.log(customer);
   console.log(`active:${customer.is_active}`);
}


for(let i=0; i < customers.length; i++){
    let customer = customers[i];
    console.log(customer);
    if(customer.is_active === false){
        console.log(`name:${customer.name}`)
    }
}


let companies =[
    {
        name: 'Winners',
        stock_symbol: 'lion',
        sector:  'retail',
        industry:  'products',
        founded: 1950,
        headquarters: 'Ontario',
        market_cap: 40000,
        yearly_revenue: 20000,
        yearly_profit: 10000,
        number_of_employee: 100
    },

    {
        name: 'costco',
        stock_symbol: 'food',
        sector:  'retail',
        industry: 'products',
        founded: 1920,
        headquarters: 'Calgary',
        market_cap: 50000,
        yearly_revenue: 30000,
        yearly_profit: 20000,
        number_of_employee: 500
    },

    {
        name: 'save on food',
        stock_symbol: 'food',
        sector:  'retail',
        industry:  'products',
        founded: 1940,
        headquarters: 'Edmonton',
        market_cap: 30000,
        yearly_revenue: 10000,
        yearly_profit: 40000,
        number_of_employee: 300
    },

    {
        name: 'amazon',
        stock_symbol: 'clothe',
        sector:  'retail',
        industry: 'e-commerce',
        founded: 1989,
        headquarters: 'Ney York',
        market_cap: 60000,
        yearly_revenue: 30000,
        yearly_profit: 20000,
        number_of_employee: 1000
    },

    {
        name: 'Tech',
        stock_symbol: 'cyber',
        sector: 'technology',
        industry: 'electronic',
        founded: 1952,
        headquarters: 'Edmonton',
        market_cap: 60000000,
        yearly_revenue: 30000,
        yearly_profit: 20000,
        number_of_employee: 400
    }

    
]


let counter = 0;
while( counter< companies.length){
      
   console.log(companies)
   console.log(companies[counter])
   console.log(`name:${companies[counter].name}, revenue:${companies[counter].yearly_revenue}`);
    
  counter = counter + 1;
}


for(let i =0; i < companies.length; i++){
    let company = companies[i];
    console.log(company);
    if(company.name ==='Tech'){
        console.log(`name:${company.name}`);
    }
   
}


for(let i =0; i < companies.length; i++){
    let company = companies[i];
    if(company.founded <= 1950){
        console.log(`Name:${company.name}, Founded:${company.founded}`)
    }
}


for(let i =0; i < companies.length; i++){
    let company = companies[i];
    if(company.market_cap >50000000){
        console.log(`Name:${company.name}`)
    }

}


for(let i =0; i < companies.length; i++){
    let company = companies[i];
    if(company.sector === 'technology'){
        console.log(`Name:${company.name}, Sector:${company.sector}`);
    }
}



for(let i =0; i < companies.length; i++){
    let totalRevenue = companies[i].yearly_revenue;
    let averageRevenue = totalRevenue/companies.length
        console.log(`Revenue:${averageRevenue}`)

}


let highestProfitCompany = companies[0];

for(let i =0; i < companies.length; i++){
     if(companies.yearly_profit > highestProfitCompany.yearly_profit);
     highestProfitCompany = companies[i];
}

console.log(`Name:${highestProfitCompany.name}, Yearly_profit:${highestProfitCompany.yearly_profit}`)



//Come back to this
let highestRevenuePerEmployeeCompany = companies[0]; // Start with the first company
let highestRevenuePerEmployee = highestRevenuePerEmployeeCompany.yearly_revenue / highestRevenuePerEmployeeCompany.number_of_employees;

for (let i = 1; i < companies.length; i++) {
    let revenuePerEmployee = companies[i].yearly_revenue / companies[i].number_of_employees;

    if (revenuePerEmployee > highestRevenuePerEmployee) {
        highestRevenuePerEmployee = revenuePerEmployee;
        highestRevenuePerEmployeeCompany = companies[i];
    }
}

console.log(`The company with the highest revenue per employee is: ${highestRevenuePerEmployeeCompany.name} with revenue per employee of $${highestRevenuePerEmployee.toFixed(2)}`);