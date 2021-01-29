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
    Object.keys(actualParams).length ? response = await fetch(`${process.env.REACT_APP_PRODUCTS_URL}?${params}`) : response = await fetch(`${process.env.REACT_APP_PRODUCTS_URL}`);  
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const getProduct = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_PRODUCTS_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


export const getCategories = async () => {
    const response = await fetch(`${process.env.REACT_APP_CATEGORIES_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

