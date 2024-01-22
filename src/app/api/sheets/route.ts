import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const serviceAccountAuth = new JWT({
  email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const load = async () => {
    const doc = new GoogleSpreadsheet(
      "1S_upBqzkYLRUNVQ_rG_Is-ijcLh1xBFH78foyt-9l7I",
      serviceAccountAuth
    );

    await doc.loadInfo(); // loads document properties and worksheets

    return doc;
  };

  const sheets = await load();

  console.log(sheets);

  return NextResponse.json({ sheets });
}
