const Core = {
    Render: (data, element) => {
        return data.map((item, index) => {
            return (
                element(item, index)
            );
        });
    },
}

export default Core;