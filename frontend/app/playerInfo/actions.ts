'use server';
import { redirect } from "next/navigation";
import { postRequest } from "../../service/api";

export async function createPlayer(formData: FormData) {

    const data = await postRequest("playerInfo/create", formData);

    redirect(`/playerInfo/${data.player}`);
}