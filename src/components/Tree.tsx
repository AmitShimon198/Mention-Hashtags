
import { useState } from "react";
import mdConfig from "../services/config";

const data = [
    {
        id: 1,
        label: 'Root',
        isRequired: true,
        products: [
            {
                id: 2,
                label: 'Child 1',
                isRequired: false,
                products: [
                    {
                        id: 3,
                        label: 'Grandchild 1',
                        isRequired: true,
                        products: [{
                            id: 5,
                            label: 'GrandGrandchild 1',
                            products: [
                                {
                                    isRequired: true,
                                    id: 6,
                                    label: 'GrandGrandGrandchild 1',
                                    products: []
                                },
                                {
                                    isRequired: true,
                                    id: 7,
                                    label: 'GrandGrandGrandchild 2',
                                    products: []
                                },
                                {
                                    isRequired: true,
                                    id: 8,
                                    label: 'GrandGrandGrandchild 3',
                                    products: []
                                },
                                {
                                    isRequired: true,
                                    id: 9,
                                    label: 'GrandGrandGrandchild 4',
                                    products: []
                                },
                            ]
                        }]
                    }
                ]
            },
            {
                id: 4,
                label: 'Child 2',
                isRequired: false,
                products: []
            }
        ]
    }
];
const TreeNode = ({ item }: any) => {
    const [first, setfirst] = useState<boolean>(false);
    console.log('render',mdConfig.getData());

    const parentMargin = (item?.depth ?? 0) * 20;
    const itemStyle = {
        marginLeft: `${parentMargin}px`,
        width: '100%'
    };
    return (<div key={item?.id} style={itemStyle}>
        {item?.label}
        {item.isRequired && <div style={{ marginLeft: `${20}px` }}>
            <a rel="noreferrer" target="_blank" href="https://www.google.com">Action Required  {item?.depth}-{first}</a>
        </div>}
        <div>
            <button style={{ marginLeft: `${20}px` }} onClick={() => setfirst(prev => !prev)}>Toggle</button>
        </div>
    </div>)
}

const renderTree = (treeData: any, renderItem: (item: any) => any) => {
    const stack = treeData.map((item: any) => ({ ...item, depth: 0 }));
    const items = [];

    while (stack.length) {
        const currentItem = stack.pop();

        if (currentItem?.products && currentItem?.products?.length) {
            const childDepth = currentItem.depth + 1;
            for (let index = currentItem?.products?.length - 1; index >= 0; index--) {
                stack.push({ ...currentItem?.products[index], depth: childDepth });

            }
        }
        if (currentItem) {
            items.push(renderItem(currentItem));
        }
    }

    return items;
};
const TreeView = () => {
    return <div>{renderTree(data, (item) => <TreeNode key={item.id} item={item} />)}</div>;
};

export default TreeView;
