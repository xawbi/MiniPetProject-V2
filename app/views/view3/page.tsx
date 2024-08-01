import {DataTable} from "@/components/data-table";
import {columns} from "@/app/scripts/script7/colums";
import {getTeachers} from "@/api/teachers";

export default async function Script7(){
  const teachers = await getTeachers()

  return (
    <>
      <p className="container pt-10 pb-5 text-lg text-center">Список преподавателей и какую они ведут дисциплину</p>
      <div className="container mx-auto py-5 px-72">
        <DataTable columns={columns} data={teachers} />
      </div>
    </>
  )
}