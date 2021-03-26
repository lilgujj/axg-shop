interface AllInformation {
    user: {
        firstname: string;
        lastname: string;
        adress: string;
        ZipCode: string;
        City: string;
        phone: string;
        email: String
    },
    shippingAndPayment: {
        PaymentMethod: string;
        Shipping: string;
        FullName: string;
        CardNumber: string;
        CVC: string;
        MMYY: string;
        phone: string;
        email: string;
        }
    }

export async function mockApi(allInformation: AllInformation) {
    await timeOut();
    console.log("All information: ", allInformation);
    return true;
}

async function timeOut() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}
