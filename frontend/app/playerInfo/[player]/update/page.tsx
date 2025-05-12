import { getRequest } from "../../../../service/api";
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
            {/* Add update form here. */}
        </table>
      </div>
    );
  };
  
  export default Page;