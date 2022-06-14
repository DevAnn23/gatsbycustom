export interface childItems {
    nodes: {
        label: string;
        url: string;
        title: string;
        targetEmail: string;
        length: number;
        parentId: string;
        databaseId: string;
    };
}

interface MenuI {
    className?: string;
    menuItems: {
        label: string;
        url: string;
        title: string;
        parentId: string;
        databaseId: string;
        childItems: childItems;
    }[];
}

export default MenuI;
