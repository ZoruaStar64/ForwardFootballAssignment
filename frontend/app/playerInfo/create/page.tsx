import { createPlayer } from "../actions";
import Link from "next/link";
import Form from "next/form";

const Page = async () => {
    return (
      <div className="relative overflow-x-auto">
        <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <Link href={`playerInfo/create`}>Add new Player</Link>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Player number
              </th>
              <th scope="col" className="px-6 py-3">
                Dribble skills
              </th>
              <th scope="col" className="px-6 py-3">
                Player length
              </th>
              <th scope="col" className="px-6 py-3">
                Player weight
              </th>
              <th scope="col" className="px-6 py-3">
                Player age
              </th>
              <th scope="col" className="px-6 py-3">
                Ball control
              </th>
              <th scope="col" className="px-6 py-3">
                Passing under pressure
              </th>
              <th scope="col" className="px-6 py-3">
                Team
              </th>
              <th scope="col" className="px-6 py-3">
                Field position
              </th>
            </tr>
          </thead>
          {/* Add create form here. */}
          <Form action={createPlayer}>
            <input name="player" placeholder="Example: Player 28"></input>
            <input name="dribble_skills" placeholder="Example: 27.94"></input>
            <input name="length" placeholder="Example: 178"></input>
            <input name="weight" placeholder="Example: 40.54"></input>
            <input name="age" placeholder="Example: 14.74839217"></input>
            <input name="ball_control" placeholder="Example: 52"></input>
            <input name="passing_under_pressure" placeholder="Example: 37.47"></input>
            <input name="team" placeholder="Example: O15"></input>
            <input name="position" placeholder="Example: LWF"></input>
            <button type="submit">Add new Player</button>
          </Form>
        </table>
      </div>
    );
  };
  
  export default Page;