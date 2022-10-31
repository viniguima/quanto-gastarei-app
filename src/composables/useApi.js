import axios from "axios";

export default function useApi(url) {
  const list = async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const post = async (form) => {
    try {
      const { data } = await axios.post(url, form);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const update = async (form) => {
    try {
      const { data } = await axios.update(`${url}/${form.id}`, form);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const remove = async (form) => {
    try {
      const { data } = await axios.delete(`${url}/${form.id}`, form);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    post,
    update,
    remove,
  };
}
