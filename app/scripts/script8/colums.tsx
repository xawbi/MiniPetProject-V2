"use client"
import { ColumnDef } from "@tanstack/react-table"
import {format} from "date-fns";

export type Teacher = {
  LastName: string;
  FirstName: string;
  Patronymic: string;
  DateOfBirthday: string;
  Discipline: string;
}

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: "LastName",
    header: "Фамилия",
  },
  {
    accessorKey: "FirstName",
    header: "Имя",
  },
  {
    accessorKey: "Patronymic",
    header: "Отчество",
  },
  {
    accessorKey: "DateOfBirthday",
    header: "Дата рождения",
    cell: ({ row }) => {
      const DateOfBirthday: number | Date = row.getValue("DateOfBirthday")
      const formattedDate = format(DateOfBirthday, "yyyy-MM-dd");
      return <div className="font-medium">{formattedDate}</div>
    },
  },
  {
    accessorKey: "Discipline",
    header: "Дисциплина",
  },
]