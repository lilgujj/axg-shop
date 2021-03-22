



export async function mockApi(values: any) {

    await timeOut()
    console.log("Form information:", values)
    return true
}

async function timeOut() {
    return new Promise(resolve => setTimeout(resolve, 2000))
}