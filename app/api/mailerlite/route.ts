export async function POST(request: Request) {
  const { email } = await request.json();
  const API_KEY = process.env.MAILERLITE_API_KEY || "";
  const groupId = "112262383";
  const url = `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`;
  const data = { email, type: "active" };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": API_KEY,
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(error);
    return Response.json(null);
  }
}

/* 
async subscribeMailerLite(email: string, checkEmail: boolean) {
    const groupId = '112262383';
    const url = `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`;
    const data = { email, type: 'active' };

    try {
      if (checkEmail) {
        await this.checkEmail(email);
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      return {
        message: 'Sucessfully add subsciber',
        data: result,
      };
    } catch (error) {
      console.error('Failed to add subscriber:', error);
      throw new Error('Failed to add subscriber');
    }
  }
*/
