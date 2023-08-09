const Model = {
    Product: (ID, TitleProduct, SKU, Brand, nameProduct, Category, Cost, Unit, Quantity, TypeProduct, ImageProduct, Description, State, CreateTime) => {
        return {
            'ID': ID,
            'TitleProduct': TitleProduct,
            'SKU': SKU,
            'Brand': Brand,
            'NameProduct': nameProduct,
            'Category': Category,
            'Cost': Cost,
            'Unit': Unit,
            'Quantity': Quantity,
            'TypeProduct': TypeProduct,
            'ImageProduct': ImageProduct,
            'Description': Description,
            'CreateTime': CreateTime,
            'State': State,
        };
    },
    updateProduct: (ID, TitleProduct, SKU, Brand, nameProduct, Category, Cost, Unit, Quantity, TypeProduct, ImageProduct, Description, CreateTime) => {
        return {
            'ID': ID,
            'TitleProduct': TitleProduct,
            'SKU': SKU,
            'Brand': Brand,
            'NameProduct': nameProduct,
            'Category': Category,
            'Cost': Cost,
            'Unit': Unit,
            'Quantity': Quantity,
            'TypeProduct': TypeProduct,
            'ImageProduct': ImageProduct,
            'Description': Description,
            'CreateTime': CreateTime,
        };
    },
};

export default Model;