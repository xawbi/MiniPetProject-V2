"use client"
import { ColumnDef } from "@tanstack/react-table"
import {format} from "date-fns";

export type StudentWithAverageMark = {
  LastName: string;
  FirstName: string;
  Patronymic: string;
  GPA: string; // Измените тип, если необходимо
}

export const columns: ColumnDef<StudentWithAverageMark>[] = [
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
    accessorKey: "GPA",
    header: "Средний балл",
  },
]