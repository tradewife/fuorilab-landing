import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Check if email already exists
    const existingSignup = await sql`
      SELECT id FROM waitlist_signups WHERE email = ${email}
    `;

    if (existingSignup.length > 0) {
      return Response.json({ message: "Email already on waitlist" }, { status: 200 });
    }

    // Add to waitlist
    const result = await sql`
      INSERT INTO waitlist_signups (email)
      VALUES (${email})
      RETURNING id, email, created_at
    `;

    return Response.json({ 
      message: "Successfully joined waitlist",
      data: result[0]
    }, { status: 201 });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return Response.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const waitlistCount = await sql`
      SELECT COUNT(*) as count FROM waitlist_signups
    `;

    return Response.json({
      count: parseInt(waitlistCount[0].count)
    });

  } catch (error) {
    console.error('Waitlist count error:', error);
    return Response.json(
      { error: "Failed to get waitlist count" },
      { status: 500 }
    );
  }
}