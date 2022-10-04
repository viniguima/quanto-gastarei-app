import useApi from "src/composables/useApi";

const endpoint = "";

export default function Calculate() {
  const { list, post, update, remove } = useApi(endpoint);

  return {
    list,
    post,
    update,
    remove,
  };
}
