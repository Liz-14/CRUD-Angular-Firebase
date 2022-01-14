export interface Employee {
   name: string;
   lastName: string;
   email: string;
   startDate: DataPicker;
   phone: number
}

interface DataPicker{
   year: number;
   month: number;
   day: number;
}
