import { getRequest } from "../../../../service/api";
import { deletePlayer } from "../../actions";
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
        <h1>Are you sure you wish to delete {playerInfo.player}?</h1>
        <h2>If not then return using the link below this text. If you do wish to delete {playerInfo.player}, then press the delete button below the link.</h2>
        <Link href={`/playerInfo/${player}`}>Go back to {player}'s information</Link>
          <Form action={deletePlayer}>
            <input name="player" id="player" placeholder="Example: Player 28" value={playerInfo.player} readOnly></input>
            <br></br>
            <button type="submit">Delete {playerInfo.player}</button>
          </Form>
      </div>
    );
  };
  
  export default Page;