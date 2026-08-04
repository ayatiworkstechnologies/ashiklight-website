import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://api.ayatiworks.com/api/v1/public/ashiklights/contact/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key":
            "abe798fc2a5bc18bbe80dc75f854e4fadb42641e43d7d7296cbd9b8d1511d879",
        },
        body: JSON.stringify(body),
      }
    );

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            responseData?.message ||
            `Server returned status ${response.status}`,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error: any) {
    console.error("API Route /api/contact Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server connection error",
      },
      { status: 500 }
    );
  }
}
