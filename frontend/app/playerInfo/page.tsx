import { getRequest } from "../../service/api";

const Page = async () => {
    const playerInfo = await getRequest("/playerInfo");
    return (
      <div className="relative overflow-x-auto">
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
            {playerInfo.map((player: any) => (
              <tr
                key={player.player}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {player.player}
                </th>
                <td className="px-6 py-4">{player.dribble_skills}</td>
                <td className="px-6 py-4">{player.length}</td>
                <td className="px-6 py-4">{player.weight}</td>
                <td className="px-6 py-4">{player.age}</td>
                <td className="px-6 py-4">{player.ball_control}</td>
                <td className="px-6 py-4">{player.passing_under_pressure}</td>
                <td className="px-6 py-4">{player.team}</td>
                <td className="px-6 py-4">{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Page;