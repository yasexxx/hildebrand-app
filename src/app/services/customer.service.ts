import { SortColumnForCustomer, SortDirection } from './../directives/sortable.directives';
import { CustomerList } from './customer';






interface SearchCustomerResult {
  customers: CustomerList[];
  total: number;

}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumnForCustomer;
  sortDirection: SortDirection;
}

const compare = ( v1: string | number, v2: string| number) => (
  v1 < v2 ? -1 : v1 > v2 ? 1: 0 )


function sort(customers: CustomerList[], column:SortColumnForCustomer, direction: string ) {
if (direction ==='' || column === '') {
  return customers;
} else {
  return [...customers].sort((a,b) => {
    const res = compare(a[column], b[column]);
    return direction === 'asc' ? res : -res;
  });
}

}
