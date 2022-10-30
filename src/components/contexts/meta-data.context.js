import React, { useEffect, useState } from 'react';
import { CatergoryItemService } from '../../services/category.service';
import { ItemService } from '../../services/item.service';
import { BrandItemService } from '../../services/brand.service';
import { UnitService } from '../../services/unit.service';

const MetaDataContextAPI = React.createContext();

const MetaDataContext = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [categoriesExpired, setCategoriesExpired] = useState(true);
    const [catergoryItemService, setCatergoryItemService] = useState(null);

    const [items, setItems] = useState([]);
    const [itemMap, setItemMap] = useState(new Map());
    const [itemsExpired, setItemsExpired] = useState(true);
    const [itemService, setItemService] = useState(null);

    const [brands, setBrands] = useState([]);
    const [brandsExpired, setBrandsExpired] = useState(true);
    const [brandsItemService, setBrandsItemService] = useState(null);
    
    const [units, setUnits] = useState([]);
    const [unitsExpired, setUnitsExpired] = useState(true);
    const [unitsService, setUnitsService] = useState(null);

    useEffect(() => {
        setCatergoryItemService(new CatergoryItemService());
        setItemService(new ItemService())
        setBrandsItemService(new BrandItemService());
        setUnitsService(new UnitService());
    }, []);

    useEffect(() => {
        if (catergoryItemService && categoriesExpired) {
            catergoryItemService.getAll(setCategories);
            setCategoriesExpired(false);
        }
    }, [catergoryItemService, categoriesExpired]);

    useEffect(() => {
        if (brandsItemService && brandsExpired) {
            brandsItemService.getAll(setBrands);
            setBrandsExpired(false);
        }
    }, [brandsItemService, brandsExpired]);

    useEffect(() => {
        if (unitsService && unitsExpired) {
            unitsService.getUnits(setUnits);
            setUnitsExpired(false);
        }
    }, [unitsService, unitsExpired]);

    useEffect(() => {
        if (items.length > 0) {
            let map = new Map();
            for (let item of items) {
                map.set(item.itemNo, item);
            }
            setItemMap(map);
        }
    }, [items]);

    useEffect(() => {
        if (itemService && itemsExpired) {
            itemService.getAll(setItems, setItemMap);
            setItemsExpired(false);
        }
    }, [itemService, itemsExpired]);

    return (
        <MetaDataContextAPI.Provider value={{ categories, items, itemMap, brands, units, setCategoriesExpired, setCatergoryItemService, setItemsExpired, setItemService }}>
            {children}
        </MetaDataContextAPI.Provider>
    );
}
export {
    MetaDataContext,
    MetaDataContextAPI
}