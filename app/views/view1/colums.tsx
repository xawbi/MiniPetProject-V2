"use client"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns";
import {deleteStudent} from "@/api/students";

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
  {
    id: "actions",
    cell: ({row}) => {
      const student = row.original
      return (
        <button onClick={() => deleteStudent(student.ID)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-6 h-6 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
          </svg>
        </button>
      )
    }
  }
]