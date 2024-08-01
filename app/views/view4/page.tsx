import {DataTable} from "@/components/data-table";
import {columns} from "@/app/scripts/script8/colums";
import {getAverageMarks} from "@/api/students";

export default async function Script8(){
  const averageMarks = await getAverageMarks()

  return (
    <>
      <p className="container pt-10 pb-5 text-lg text-center">Вывод среднего балла для каждого студента</p>
      <div className="container mx-auto py-5 px-72">
        <DataTable columns={columns} data={averageMarks} />
      </div>
    </>
  )
}