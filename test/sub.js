function extractProductIds(data) {
    const resultMap = {};
    function collectProductIds(step) {
        const productIds = step.products.map(p => p.productId);
        step.products.forEach(product => {
            if (product.steps && product.steps.length > 0) {
                product.steps.forEach(subStep => {
                    const subProductIds = collectProductIds(subStep);
                    resultMap[subStep.id] = subProductIds;
                    productIds.push(...subProductIds);
                });
            }
        });

        return productIds;
    }

    data.steps.forEach(step => {
        resultMap[step.id] = collectProductIds(step);
    });

    return resultMap;
}

const data = [{
    "_id": {
        "$oid": "6450b141f5e343a705fe17ed"
    },
    "id": "10b9d227-63d5-4e9a-afd2-fd4ccb31151d",
    "name": "Premium Membership - Senior Canine",
    "isFixed": false,
    "fixedPrice": 99,
    "isActive": true,
    "steps": [
        {
            "id": "b58881b5-20ae-4650-9023-d228179fb394",
            "isRequired": true,
            "selectionAmount": 1,
            "pillarOfCare": "Prevention",
            "explainWhy": null,
            "componentType": "singleSelection",
            "title": "Rabies Vaccine",
            "products": [
                {
                    "productId": "671cc5a7-f675-4034-9f35-3a4a5b697f40",
                    "hidden": true,
                    "steps": [{
                        "id": "amit4",
                        "isRequired": true,
                        "selectionAmount": 1,
                        "pillarOfCare": "Prevention",
                        "explainWhy": null,
                        "componentType": "singleSelection",
                        "title": "Rabies Vaccine",
                        "products": [
                            {
                                "productId": "Ammm",
                                "hidden": true,
                                "steps": []
                            },
                            {
                                "productId": "70a84359-9d07-4eba-89",
                                "hidden": true,
                                "steps": []
                            },
                            {
                                "productId": "a710866e-bd71--875ba42e9dc0",
                                "hidden": true,
                                "steps": []
                            },
                            {
                                "productId": "-54c7-4bb7-b8a4-f4884a8f8b72",
                                "hidden": true,
                                "steps": []
                            },
                            {
                                "productId": "aff5434534451b24c",
                                "hidden": true,
                                "steps": []
                            },
                            {
                                "productId": "58ca7cfd-b977-4903-fcbfb-1d2ad83e68d4",
                                "hidden": false,
                                "steps": []
                            },
                            {
                                "productId": "d9e9fd8a-dbcb-dherhe-8787-olga",
                                "hidden": false,
                                "steps": []
                            }
                        ]
                    }]
                },
                {
                    "productId": "70a84359-9d07-4eba-89a3-ebaa5be01a10",
                    "hidden": true,
                    "steps": []
                },
                {
                    "productId": "a710866e-bd71-47f8-ab16-875ba42e9dc0",
                    "hidden": true,
                    "steps": []
                },
                {
                    "productId": "25d211f3-54c7-4bb7-b8a4-f4884a8f8b72",
                    "hidden": true,
                    "steps": []
                },
                {
                    "productId": "affca2cb-9741-4bdb-ab2d-ab7ce451b24c",
                    "hidden": true,
                    "steps": []
                },
                {
                    "productId": "58ca7cfd-b977-4903-b54a-1d2ad83e68d4",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "d9e9fd8a-dbcb-4c14-8787-15b60a7c96fe",
                    "hidden": false,
                    "steps": []
                }
            ]
        },
        {
            "id": "50ac5015-8500-449b-ae68-f2fc2530f1eb",
            "isRequired": true,
            "selectionAmount": 1,
            "pillarOfCare": "Prevention",
            "explainWhy": null,
            "componentType": "singleSelection",
            "title": "DAPPV Vaccine",
            "products": [
                {
                    "productId": "08b87602-2cbb-4d73-9ea0-f665e1ca07cb",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "b58ef381-ed1f-4b66-91ee-06196f63ea21",
                    "hidden": false,
                    "steps": []
                }
            ]
        },
        {
            "id": "b6f31369-81af-4692-a3be-62b55c4e6b40",
            "isRequired": true,
            "selectionAmount": 0,
            "pillarOfCare": "Prevention",
            "explainWhy": null,
            "componentType": "multiSelection",
            "title": "NC Vaccines",
            "products": [
                {
                    "productId": "34852498-cf3b-468d-9ce7-f796e2e88874",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "7517c87f-6546-4fc1-bf2a-02005a844ec6",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "dedbc708-befc-4fa5-bae8-8d15683e0834",
                    "hidden": false,
                    "steps": []
                }
            ]
        },
        {
            "id": "11f7eb2d-e9fe-46f1-a735-313585e08efe",
            "isRequired": true,
            "selectionAmount": 1,
            "pillarOfCare": "Prevention",
            "explainWhy": null,
            "componentType": "multiSelection",
            "title": "Diagnostics",
            "products": [
                {
                    "productId": "b13097c2-5b0f-5f41-a853-b7c56327e954",
                    "hidden": false,
                    "steps": []
                }
            ]
        },
        {
            "id": "939cb580-1f2c-47b3-8895-453547d3dc25",
            "isRequired": true,
            "selectionAmount": 1,
            "pillarOfCare": "Prevention",
            "explainWhy": null,
            "componentType": "singleSelection",
            "title": "Dewormer",
            "products": [
                {
                    "productId": "81354200-c8b2-4e56-ab49-2dd9c929bf67",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "d0819d00-f334-4a30-a1bd-6c78b39d84b9",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "dd24917e-46c5-4ca9-a06a-19ea177a5cf8",
                    "hidden": false,
                    "steps": []
                }
            ]
        },
        {
            "isRequired": true,
            "selectionAmount": 1,
            "pillarOfCare": "Prevention",
            "explainWhy": null,
            "componentType": "singleSelection",
            "title": "Preventatives",
            "products": [
                {
                    "productId": "d862a2c2-143b-42ea-9e03-417fe46c001f",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "14dc8b8d-796a-4f49-b6f5-c124ed7fe380",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "ffae626a-19d3-4c56-8410-6988e1ce8b78",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "cdc736c9-6279-4f4c-b232-7140d5265e20",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "fc41bb3e-1e96-4988-bb9f-b372e9039e3b",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "dfc41bb3e-1e96-4988-bb9f-b372e9039e3b",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "2b3574cd-472d-4c79-8209-e9ffc03173cc",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "6cf8f614-75cf-47d3-82bb-63d9826e5f36",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "37c4c7b4-b525-4ac2-a7e7-ea225bba8b6b",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "0edb219e-e33b-4e04-8e52-20974bcf8dfa",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "37f35e4b-4f27-435c-8754-23b750f050da",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "ef4e9c2c-746e-4eea-b6d0-e354871d2a00",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "866a6081-4f88-4bb1-8869-8bacc4fb3b3e",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "a45a65a0-0f7a-4904-b827-f1b290ccc350",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "913f74ef-d578-4ba3-8ed8-3c049205e309",
                    "hidden": false,
                    "steps": []
                }
            ],
            "id": "8929a11a-951a-493e-b8e1-03d931c0c45d"
        },
        {
            "isRequired": true,
            "selectionAmount": 0,
            "pillarOfCare": "Prevention",
            "explainWhy": null,
            "componentType": "multiSelection",
            "title": "Medical Services",
            "products": [
                {
                    "productId": "4d8e5ee2-1578-498c-ab41-1f1ef150d3cd",
                    "hidden": false,
                    "steps": []
                },
                {
                    "productId": "22484b24-9a95-44ad-abdd-ea0d72d8f245",
                    "hidden": false,
                    "steps": []
                }
            ],
            "id": "433ec89b-c723-41b9-9649-c5253314bd31"
        }
    ],
    "membershipTypeId": "6e7fc68f-ee19-4daf-84be-8f8dfd991761",
    "createdAt": {
        "$date": "2023-04-19T11:02:48.808Z"
    },
    "updatedAt": {
        "$date": "2023-04-19T11:34:27.496Z"
    }
}]

// const result = extractProductIds(data);
// console.log(result);
function extractProductIds2(data) {
    const resultMap = {};
    function collectProductIds(step) {
        let productIds = step.products.map(p => p.productId);
        for (let product of step.products) {
            if (product.steps?.length) {
                let allSubProductIds = [];
                for (let subStep of product.steps) {
                    const subProductIds = collectProductIds(subStep);
                    resultMap[subStep.id] = subProductIds;
                    allSubProductIds = allSubProductIds.concat(subProductIds);
                }
                productIds = productIds.concat(allSubProductIds);
            }
        }
        return productIds;
    }
    for (let step of data.steps) {
        resultMap[step.id] = collectProductIds(step);
    }
    return resultMap;
}
// const result2 = extractProductIds2(data);
// console.log(result2);



const obj1 = { name: 'amit' };
const obj2 = { name: 'olga' };
const obj3 = { ...obj1, };
const arr = [obj1, obj2, obj3];
const arr2 = [...arr];
// arr2.map(a => {
//     a.name = "dddd";
//     return a;
// })
// // obj3.name = 'samir';
// console.log({ obj1, obj3, obj2 });

arr2.forEach((a) => {
    a.forEach(b => {
        fetch('fakeurl')
    })
})

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log('index', index);
    for (let y = 0; y < arr.length; y++) {
        const element = arr[y];
        console.log('y', y);
        // for (let y = 0; y < arr.length; y++) {
        //     const element = arr[y];
        //     console.log('y', y);
        // } 
    }
}