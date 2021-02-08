export const getProducts = async (paramsForRequest) => {


    // Копируем в запрос только актуальные параметры
    let actualParams = {};
    for (let param in paramsForRequest) {
        if (paramsForRequest[param]) {
            actualParams[param] = paramsForRequest[param]
        }
    }
    const params = new URLSearchParams(actualParams);
    let response;
    Object.keys(actualParams).length ? response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/items?${params}`) : response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/items`);  
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const getTopSales = async () => {
    
    const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/top-sales`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const getProduct = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/items/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


export const getCategories = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/categories`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


export const sendOrder = async (order) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/order`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;'
    },
    body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
