'use server';
import { redirect } from "next/navigation";
import { postRequest } from "../../service/api";

export async function createPlayer(formData: FormData) {
    const formObj = Object.fromEntries(formData.entries());

    console.log("Form as plain object: ", formObj);

    const data = await postRequest("/playerInfo/create", formObj);

    redirect(`/playerInfo/${data.player}`);
}

export async function updatePlayer(formData: FormData) {
    const formObj = Object.fromEntries(formData.entries());

    console.log("Form as plain object: ", formObj);

    const data = await postRequest("/playerInfo/update", formObj);

    redirect(`/playerInfo/${data.player}`);
}

export async function deletePlayer(formData: FormData) {
    const formObj = Object.fromEntries(formData.entries());

    console.log("Form as plain object: ", formObj);

    const data = await postRequest("/playerInfo/delete", formObj);

    redirect(`/playerInfo`);
}