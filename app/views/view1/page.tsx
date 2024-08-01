import {columns} from "@/app/colums";
import {DataTable} from "@/components/Home/data-table";
import {getStudents} from "@/api/students";

export default async function Home() {
  const students = await getStudents()

  return (
    <>
      <p className="container pt-10 text-lg">Получение всех студентов, получение студента по ID, удаление и добавление студента</p>
      <div className="container mx-auto py-5">
        <DataTable columns={columns} data={students} />
      </div>
    </>
  );
}
