const paginationProduct = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((result) => {
                resolve(result.json()); 
            })
            .catch(() => {
                console.log('Disconnect DataBase');
            })
    })
};

export default paginationProduct;