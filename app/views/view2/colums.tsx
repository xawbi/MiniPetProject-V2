"use client"
import { ColumnDef } from "@tanstack/react-table"

export type GradeBookMarkWithStupidStudents = {
  LastName: string;
  FirstName: string;
  Patronymic: string;
};

export const columns: ColumnDef<GradeBookMarkWithStupidStudents>[] = [
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
]