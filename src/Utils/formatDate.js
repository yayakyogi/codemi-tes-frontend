// eslint-disable-next-line import/no-anonymous-default-export
export default function formatDate(datetime) {
  let year = datetime.getFullYear();

  let date = ("0" + datetime.getDay()).slice(-2);
  let month = ("0" + datetime.getMonth() + 1).slice(-2);
  return `${date} - ${month} - ${year}`;
}
