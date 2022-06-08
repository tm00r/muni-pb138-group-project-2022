import axios from "axios";

export const fetcher = async (url: string) => await (
    axios
        .get(url)
        .then((response) => response.data)
        .catch((error) => console.log(error))
)
