import { getRequest } from "../../../../service/api";
import { updatePlayer } from "../../actions";
import Link from "next/link";
import Form from "next/form";

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
          <Link href={`/playerInfo/${player}`}>Go back to {player}'s information</Link>
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
        </table>
          <Form action={updatePlayer}>
            <input name="player" id="player" placeholder="Example: Player 28" value={playerInfo.player} readOnly></input>
            <input name="dribble_skills" id="dribble_skills" type="number" step="0.01" placeholder="Example: 27.94" value={playerInfo.dribble_skills}></input>
            <input name="length" id="length" type="number" placeholder="Example: 178" value={playerInfo.length}></input>
            <input name="weight" id="weight" type="number" step="0.01" placeholder="Example: 40.54" value={playerInfo.weight}></input>
            <input name="age" id="age" type="number" step="0.00000001" placeholder="Example: 14.74839217" value={playerInfo.age}></input>
            <input name="ball_control" type="number" id="ball_control" placeholder="Example: 52" value={playerInfo.ball_control}></input>
            <input name="passing_under_pressure" type="number" step="0.01" id="passing_under_pressure" placeholder="Example: 37.47" value={playerInfo.passing_under_pressure}></input>
            <input name="team" id="team" placeholder="Example: O15" value={playerInfo.team}></input>
            <input name="position" id="position" placeholder="Example: LWF" value={playerInfo.position}></input>
            <button type="submit">Update {playerInfo.player}</button>
          </Form>
      </div>
    );
  };
  
  export default Page;