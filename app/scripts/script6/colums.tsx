"use client"
import { ColumnDef } from "@tanstack/react-table"

export type GradeBookTypeWithMark = {
  ID: number;
  StudentID: number | null;
  StudyPlan: {
    ID: number | null;
    DisciplineType: {
      ID: number | null;
      Type: string | null;
    } | null;
  } | number | null;
  Mark: number | null;
};

export const columns: ColumnDef<GradeBookTypeWithMark>[] = [
  {
    accessorKey: "StudyPlan.DisciplineType.Type",
    header: "Дисциплина",
  },
  {
    accessorKey: "Mark",
    header: "Оценка",
  },
]