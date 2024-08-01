"use client"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns";

export type StudentType = {
  ID: number;
  LastName: string | null;
  FirstName: string | null;
  EnrollmentDate: Date | null;
  StudyModeType: {
    ID: number;
    Type: string | null;
  } | null;
  GroupsType: {
    ID: number;
    Type: string | null;
  } | null;
  DateOfBirthday: Date | null;
};

export const columns: ColumnDef<StudentType>[] = [
  {
    accessorKey: "ID",
    header: "ID",
  },
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
    accessorKey: "EnrollmentDate",
    header: "Дата поступления",
    cell: ({ row }) => {
      const DateOfBirthday: number | Date = row.getValue("EnrollmentDate")
      const formattedDate = format(DateOfBirthday, "yyyy-MM-dd");
      return <div className="font-medium">{formattedDate}</div>
    },
  },
  {
    accessorKey: "StudyModeType.Type",
    header: "Форма обучения",
  },
  {
    accessorKey: "GroupsType.Type",
    header: "Группа",
  },
]