export default async function handler(req, res) {
    const { entry } = req.body;
  
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are MARTY, a supportive DBT-informed journaling companion. Use affirming, validating language to help the user reflect and reframe their thoughts.',
          },
          {
            role: 'user',
            content: entry,
          },
        ],
      }),
    });
  
    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  }