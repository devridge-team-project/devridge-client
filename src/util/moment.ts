import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

export const getDate = (date: string) => {
  return moment(date).format("YYYY-MM-DD");
};

export const getDateFromNow = (date: string) => {
  return moment(date).fromNow();
};

const Moment = {
  getDate,
  getDateFromNow,
};
export default Moment;
