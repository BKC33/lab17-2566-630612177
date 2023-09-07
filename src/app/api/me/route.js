import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "KHACHEN CHAIYO",
    studentId: "630612177",
  });
};
