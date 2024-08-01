import {getDisciplineMark, getGradeBookStudents, getStupidStudents} from "@/api/gradebook";
import {DataTable} from "@/components/data-table";
import {columns} from "@/app/scripts/script6/colums";

export default async function Script6(){
  const stupidStudents = await getStupidStudents()

  return (
    <>
      <p className="container pt-10 pb-5 text-lg text-center">Список студентов, у которых есть хотя бы одно двойка</p>
      <div className="container mx-auto py-5 px-72">
        <DataTable columns={columns} data={stupidStudents} />
      </div>
    </>
  )
}