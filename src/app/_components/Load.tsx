import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const serviceAccountAuth = new JWT({
  email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const load = async () => {
  const doc = new GoogleSpreadsheet(
    "1S_upBqzkYLRUNVQ_rG_Is-ijcLh1xBFH78foyt-9l7I",
    serviceAccountAuth
  );

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
};

export const Load = () => {
  load();
  return <></>;
};
