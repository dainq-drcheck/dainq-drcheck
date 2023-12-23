/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
// import { io } from 'socket.io-client';

import { getListAfterExams } from "services/api/afterexams";
import { RequestListAfterExams } from "services/api/afterexams/types";

interface ExcelData {
  header: string[];
  data: any[][];
}

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const API_ID = process.env.REACT_APP_API_ID;
export const API_KEY = process.env.REACT_APP_API_KEY;
// export const SOCKET = io(process.env.REACT_APP_API_BASE_SOCKET || '');

export const LOCAL_STORAGE = {
  LANGUAGE: "NVS_Language",
  ACCESS_TOKEN: "NVS_AccessToken",
};

export const validAudioCodecse = {
  default: ["g711", "pcma", "pcmu", "transport-cc", "telephone-event"],
};

export const callAudioConstraint = {
  audio: { noiseSuppression: true, echoCancellation: false },
};

export const tokenEmployeePancake =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3ODY1ZjhkNi1kZDNlLTQ0OWUtYjU3NS1kZDM5YjM2NjBkMGIiLCJsb2dpbl9zZXNzaW9uIjpudWxsLCJpYXQiOjE2OTU0MzQ0NjcsImZiX25hbWUiOiJRdeG7kWMgxJDhuqFpIiwiZmJfaWQiOiIxNjgzMjA3MjU3MTAwMzciLCJleHAiOjE3MDMyMTA0Njd9.cGomT3o-BEBlK4iQ-d4SSIi1GkuycrFMaZUZtj1CmG8";

// export const CONSTANT_LANGUAGE_LIST = ['vi', 'en'];
// export const CONSTANT_LANGUAGE_KEY_LIST: LanguageKey[] = CONSTANT_LANGUAGE_LIST as LanguageKey[];

export const DEFAULT_QUERY_OPTION = {
  retry: 0,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};

export const MENU_CODE = {
  MENU_HEADER: "header",
  MENU_FOOTER: "footer",
  MENU_PDFLIST: "pdf-list",
};

export const callAudioConstraints = {
  audio: { noiseSuppression: true, echoCancellation: false },
};

export const validAudioCodecs = {
  default: ["g711", "pcma", "pcmu", "transport-cc", "telephone-event"],
  // default: { payload: 9, codec: 'G722', rate: 8000 },
  // slow: ['red', 'g729', 'g7221', 'g722', 'pcma', 'pcmu', 'gsm', 'transport-cc', 'telephone-event'],
  // hight: ['red', 'pcma', 'pcmu', 'g729', 'g7221', 'g722', 'gsm', 'transport-cc', 'telephone-event'],
};

export type ConstantRoutesCodes = keyof typeof CONSTANT_ROUTES;
export type ConstantRoutesType = typeof CONSTANT_ROUTES;

export const CONSTANT_ROUTES = {
  HOME: "",
  // ABOUT_US: 've-chung-toi',
  // CONTACT: 'lien-he',
  SEARCH_RESULTS: "tim-kiem",
  RECRUITMENT: "tuyen-dung",
  NEWS: "tin-tuc",
  NEWS_DETAIL: "chi-tiet-tin-tuc",
  // POLICY_TERMS: 'chinh-sach-dieu-khoan',
  TRADEMARK: "thuong-hieu",
  ERROR_404: "404",
  // NOVAID: 'novaid'
};

export const CONSTANT_ROUTES_EN: ConstantRoutesType = {
  HOME: "",
  // ABOUT_US: 'about-us',
  // CONTACT: 'contact-us',
  SEARCH_RESULTS: "search",
  RECRUITMENT: "recruitment",
  NEWS: "news",
  NEWS_DETAIL: "news-detail",
  // POLICY_TERMS: 'policy',
  TRADEMARK: "trademark",
  ERROR_404: "404",
  // NOVAID: 'novaid'
};

// export type LanguageKey = keyof LocalesType;

// export type LocalesType = {
//   vi: LocalesItem,
//   en: LocalesItem,
// };
export const USER_LOGIN = "USER_LOGIN";
export const TOKEN = "accessToken";
export const IMAGEREGEX = /.(jpg|jpeg|png|gif|bmp|webp)$/i;
export const VIDEOREGEX = /.(m4v|avi|mpg|mp4|webm)$/i;
export const AUDIOREGEX = /.(mp3|wav)$/i;

export type TypeExportExcel = "afterExams" | "other";
export interface DateExportExcel {
  from: Date;
  to: Date;
}

const handleReturnRow = (
  data: any,
  fromDay: Date,
  toDay: Date,
  from: number,
  to: number
) => {
  // const countCustomer = data.filter((itemn:any) => new Date(moment(fromDay).add(from, 'days').format('YYYY-MM-DD 23:59:59')).valueOf() > new Date(itemn.update_date).valueOf()
  //     && new Date(itemn.update_date).valueOf() < new Date(moment(fromDay).add(to, 'days').format('YYYY-MM-DD 23:59:59')).valueOf()
  //     && new Date(moment(fromDay).add(to, 'days').format('YYYY-MM-DD 23:59:59')).valueOf() < new Date(moment(toDay).add(0, 'days').format('YYYY-MM-DD 23:59:59')).valueOf());
  // [countCustomer?.length, 'Hết bệnh', 'Tiến triển', 'Chưa hết', 'Tầm soát', 'Chưa nghe máy', 'Chưa đánh giá']
};

// Sử dụng hàm exportDataToExcel để xuất dữ liệu với header và data riêng
// const header = ['Name', 'Age'];
// const data = [['John Doe', 30], ['Jane Smith', 25]];
// const excelData: ExcelData = {
//   header,
//   data,
// };
