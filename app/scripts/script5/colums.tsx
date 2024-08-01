"use client"
import { ColumnDef } from "@tanstack/react-table"

export type GradeBookType = {
  ID: number;
  StudentID: number | null;
  StudyPlanID: number | null;
  Mark: number | null;
};

export const columns: ColumnDef<GradeBookType>[] = [
  {
    accessorKey: "ID",
    header: "ID",
  },
  {
    accessorKey: "StudentID",
    header: "ID студента",
  },
  {
    accessorKey: "StudyPlanID",
    header: "ID учебного плана",
  },
  {
    accessorKey: "Mark",
    header: "Оценка",
  },
]