const API_END_POINT = process.env.API_END_POINT_URL || "http://localhost:8082";

export const getRequest = async (url: string) => {
    const response = await fetch(`${API_END_POINT}${url}`, {
        cache: "no-store",
    });
    const data = await response.json();
    return data;
};

export const postRequest = async (url: string, data: any) => {
    const response = await fetch(`${API_END_POINT}${url}`, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
};