const getAPIProduct = () => {
    return new Promise((resolve) => {
        const APIProduct = 'http://127.0.0.1:8080/api/products';
        fetch(APIProduct)
            .then(res => {
                resolve(res.json());
            })
            .catch(() => {
                console.log('Disconnect DataBase');
            })
    })
};

export default getAPIProduct;