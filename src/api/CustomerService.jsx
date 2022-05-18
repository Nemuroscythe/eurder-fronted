import client from "./Client";

export function createCustomer(customer){
    client.post('customers', customer);
}