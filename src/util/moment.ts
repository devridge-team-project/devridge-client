import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export const getDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const getDateFromNow = (date: string) => {
  return dayjs(date).fromNow();
};

const Moment = {
  getDate,
  getDateFromNow,
};
export default Moment;
