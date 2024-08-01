import {getDisciplineMark} from "@/api/gradebook";
import {DataTable} from "@/components/data-table";
import {columns} from "@/app/scripts/script5/colums";

export default async function Script6(){
  const gradeBooks = await getDisciplineMark()

  return (
    <>
      <p className="container pt-10 pb-5 text-lg text-center">Вывод дисциплин и оценок у {gradeBooks.id} студента</p>
      <div className="container mx-auto py-5 px-72">
        <DataTable columns={columns} data={gradeBooks.gradeBookStudents} />
      </div>
    </>
  )
}