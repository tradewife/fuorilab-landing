import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      email, 
      provider, 
      interface: interfaceType, 
      triggers, 
      observations, 
      excerpt, 
      redacted_confirmed 
    } = body;

    // Validate required fields
    if (!provider || !interfaceType) {
      return Response.json({ 
        error: "Provider and interface are required" 
      }, { status: 400 });
    }

    if (!redacted_confirmed) {
      return Response.json({ 
        error: "Must confirm redaction of sensitive information" 
      }, { status: 400 });
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return Response.json({ error: "Invalid email format" }, { status: 400 });
      }
    }

    // Insert case report
    const result = await sql`
      INSERT INTO case_reports (
        email, 
        provider, 
        interface, 
        triggers, 
        observations, 
        excerpt, 
        redacted_confirmed
      )
      VALUES (
        ${email || null}, 
        ${provider}, 
        ${interfaceType}, 
        ${triggers || null}, 
        ${observations || null}, 
        ${excerpt || null}, 
        ${redacted_confirmed}
      )
      RETURNING id, created_at
    `;

    return Response.json({ 
      message: "Case report submitted successfully",
      data: result[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Case report submission error:', error);
    return Response.json(
      { error: "Failed to submit case report" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get('status');
    const limit = parseInt(url.searchParams.get('limit')) || 50;
    const offset = parseInt(url.searchParams.get('offset')) || 0;

    let query = `
      SELECT 
        id,
        provider,
        interface,
        status,
        created_at,
        CASE WHEN email IS NOT NULL THEN true ELSE false END as has_email
      FROM case_reports
    `;
    let conditions = [];
    let params = [];

    if (status) {
      conditions.push(`status = $${params.length + 1}`);
      params.push(status);
    }

    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }

    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const reports = await sql(query, params);

    // Get total count
    let countQuery = `SELECT COUNT(*) as count FROM case_reports`;
    let countParams = [];

    if (status) {
      countQuery += ` WHERE status = $1`;
      countParams.push(status);
    }

    const countResult = await sql(countQuery, countParams);
    const total = parseInt(countResult[0].count);

    return Response.json({
      reports,
      total,
      limit,
      offset,
      hasMore: offset + limit < total
    });

  } catch (error) {
    console.error('Case reports fetch error:', error);
    return Response.json(
      { error: "Failed to fetch case reports" },
      { status: 500 }
    );
  }
}