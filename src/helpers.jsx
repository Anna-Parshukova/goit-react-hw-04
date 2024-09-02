import axios from "axios";

export default async function getPhotos(value, page = 1) {
  const URL = "https://api.unsplash.com/search/photos";
  const params = {
    client_id: "CqZFfxtYbNHw0gBG4HSXMizkg1hxwg0NGs_jyB4v2xA",
    query: value,
    per_page: 15,
    page,
  };

  return await axios.get(URL, { params });
}