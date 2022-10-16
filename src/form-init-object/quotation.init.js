const formItems ={
    index: 0,
    category: '',
    itemNo: '',
    itemName: '',
    quantity: 0,
    price: 0.00,
}

const errorFormItems ={
    index: 0,
    category: '',
    itemNo: '',
    itemName: '',
    quantity: 0,
    price: 0.00,
}

const errorInitObject={
    customerName:'',
    customerNumber:'',
    customerEmail:'',
    inputItemList : [errorFormItems],
};

const formInitObject={
    customerName:'',
    customerNumber:'',
    customerEmail:'',
    inputItemList : [formItems],
};



export {errorInitObject,formInitObject};