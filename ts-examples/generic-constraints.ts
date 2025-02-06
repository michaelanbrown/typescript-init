import Inventory from "./generic-interfaces-and-classes";

interface CatalogItem {
    catalogNumber: number;
}

class Catalog<T extends CatalogItem> implements Inventory<T> {

}