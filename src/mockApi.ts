interface User {
    firstname: string;
    lastname: string;
    adress: string;
    ZipCode: string;
    City: string;
    phone: string;
    email: String
}

interface ShippingAndPayment {
    PaymentMethod: string;
    Shipping: string;
    FullName: string;
    CardNumber: string;
    CVC: string;
    MMYY: string;
    phone: string;
    email: string;
}

export async function mockApi(ShippingAndPayment: ShippingAndPayment, user: User) {
    await timeOut();

    console.log("User information: ", user);
    console.log("Shipping and payment method: ", ShippingAndPayment)

    return true;
}

async function timeOut() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}
