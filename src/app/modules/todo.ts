export interface TodoItem {
  title: string;
  details: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  isChecked: boolean;
  date: Date;
}
