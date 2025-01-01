
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const lorryNumber = searchParams.get("lorryNumber");

    if (!lorryNumber) {
        return new Response(JSON.stringify({ error: "Lorry number is required" }), {
            status: 400,
        });
    }
    try {
        // const [rows] = await db.query(
        //   "SELECT lorry_number, status, last_location FROM lorry_tracking WHERE lorry_number = ?",
        //   [lorryNumber]
        // );

        // if (rows.length === 0) {
        //   return new Response(JSON.stringify({ error: "Lorry not found" }), {
        //     status: 404,
        //   });
        // }

        // return new Response(JSON.stringify(rows[0]), { status: 200 });
        return new Response(JSON.stringify({ lorryNumber, status: "In transit", lastLocation: "Kuala Lumpur" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Database query failed" }), {
            status: 500,
        });
    }
}