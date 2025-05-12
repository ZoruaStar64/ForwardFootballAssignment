import { getRequest } from "../../../service/api";
import Link from "next/link";

const Page = async ({
    params,
}: {
    params: Promise<{ player: string }>
}) => {
    const { player } = await params;
    const playerInfo = await getRequest("/playerInfo/" + player);
    return (
      <div className="relative overflow-x-auto">
        <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <Link href={`/playerInfo/${player}/update`}>Update {player}</Link>
          <Link href={`/playerInfo/${player}/delete`}>Delete {player}</Link>
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
          <tbody>
              <tr
                key={playerInfo.player}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {playerInfo.player}
                </th>
                <td className="px-6 py-4">{playerInfo.dribble_skills}</td>
                <td className="px-6 py-4">{playerInfo.length}</td>
                <td className="px-6 py-4">{playerInfo.weight}</td>
                <td className="px-6 py-4">{playerInfo.age}</td>
                <td className="px-6 py-4">{playerInfo.ball_control}</td>
                <td className="px-6 py-4">{playerInfo.passing_under_pressure}</td>
                <td className="px-6 py-4">{playerInfo.team}</td>
                <td className="px-6 py-4">{playerInfo.position}</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Page;