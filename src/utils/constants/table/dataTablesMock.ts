/*
* interfaces
* */
export interface ITableRow {
    name: string;
    position: string;
    office: string;
    age: number;
    startDate: string;
    salary: number;

    sort?(param: (a: string, b: string) => number): [];
}


export interface ITableHeader {
    label: string;
    key: string;
}


export const DATA_TABLE_HEADER: ITableHeader[] = [
    {
        label: 'Name',
        key: 'name'
    },
    {
        label: 'Position',
        key: 'position'
    },
    {
        label: 'Office',
        key: 'office'
    },
    {
        label: 'Age',
        key: 'age'
    },
    {
        label: 'Start date',
        key: 'startDate'
    },
    {
        label: 'Salary',
        key: 'salary'
    },
]


export const DATA_TABLE: ITableRow[] = [
    {
        name: 'Airi Satou',
        position: 'Driver',
        office: 'Tokyo',
        age: 33,
        startDate: '2014/12/11',
        salary: 158000
    },
    {
        name: 'Angelica Ramos',
        position: 'Mechanic',
        office: 'London',
        age: 35,
        startDate: '2017/08/15',
        salary: 140000
    },
    {
        name: 'Bradley Greer',
        position: 'Integration Specialist',
        office: 'London',
        age: 25,
        startDate: '2015/08/15',
        salary: 125000
    },
    {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Berlin',
        age: 25,
        startDate: '2015/08/15',
        salary: 190000
    },
    {
        name: 'Airi Satou',
        position: 'Sales Assistant',
        office: 'Budapest',
        age: 41,
        startDate: '2012/08/15',
        salary: 111000
    },
    {
        name: 'Caesar Vance',
        position: 'Mechanic',
        office: 'New York',
        age: 27,
        startDate: '2018/08/15',
        salary: 120000
    },
    {
        name: 'Cedric Kelly',
        position: 'Sales Assistant',
        office: 'Sydney',
        age: 29,
        startDate: '2011/08/15',
        salary: 241000
    },
    {
        name: 'Brenden Wagner',
        position: 'Accountant',
        office: 'London',
        age: 25,
        startDate: '2018/08/15',
        salary: 4500000
    },
    {
        name: 'Ashton Cox',
        position: 'Mechanic',
        office: 'Berlin',
        age: 21,
        startDate: '2010/08/15',
        salary: 1190000
    },
    {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Lisbon',
        age: 25,
        startDate: '2012/08/15',
        salary: 190000
    },
    {
        name: 'Cedric Kelly',
        position: 'Integration Specialist',
        office: 'London',
        age: 45,
        startDate: '2014/08/15',
        salary: 171000
    },
    {
        name: 'Bruno Nash',
        position: 'Mechanic',
        office: '',
        age: 45,
        startDate: '2014/08/15',
        salary: 125000
    },
    {
        name: 'Brenden Wagner',
        position: 'Layer',
        office: 'London',
        age: 41,
        startDate: '2012/08/15',
        salary: 170000
    },
    {
        name: 'Ashton Cox',
        position: 'Software Engineer',
        office: 'Boston',
        age: 25,
        startDate: '2010/08/15',
        salary: 140000
    },
    {
        name: 'Bruno Nash',
        position: 'Mechanic',
        office: 'Rome',
        age: 45,
        startDate: '2014/08/15',
        salary: 122000
    },
    {
        name: 'Airi Satou',
        position: 'Tokyo',
        office: 'Warsaw',
        age: 45,
        startDate: '2012/08/15',
        salary: 181000
    },
]