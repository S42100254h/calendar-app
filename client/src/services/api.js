const host = "http://localhost:3000/api/v1";
const url = path => `${host}/${path}`;

export const get = async path => {
  const resp = await fetch(url(path));
  const result = await resp.json();

  return result;
};
