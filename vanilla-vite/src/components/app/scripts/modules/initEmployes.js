import Employees from "../../../widgets/EmpList/_employees.js";
import empAddForm from "../../../widgets/EmpAddForm/_empAddForm.js";
import { empFilter } from "../../../widgets/EmpFilter/_empFilter.js";
import { initSerchEmployees } from "../../../widgets/SearchPanel/_searchPanel.js";

export const initEmployes = () => {
  const employees = new Employees(".app-list"); // Створюємо екземпляр класу
  // Завантаження початкових даних

  const data = [
    { name: "Fedor Simpon", salary: 500, increase: true, rise: true },
    { name: "Thomas Anderson", salary: 1000, increase: false, rise: false },
    { name: "Conor Simpon", salary: 2000, increase: false, rise: false },
    { name: "Si Shopin", salary: 3000, increase: false, rise: false },
  ];

  employees.loadInitialData(data);

  empAddForm(data, employees);
  empFilter(data, employees);
  initSerchEmployees(data, employees);
};
