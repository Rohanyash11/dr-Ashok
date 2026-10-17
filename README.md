# Dr. Ashok Kumar — Next.js landing page

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

## Connect Cal.com

1. Create a Cal.com event (for example, `consultation`) and set availability, duration, meeting location, and confirmation questions.
2. In `.env.local`, replace `NEXT_PUBLIC_CAL_BOOKING_URL` with the event URL, e.g. `https://cal.com/dr-ashok-kumar/consultation`.
3. Restart the dev server. The booking section displays the live inline Cal.com scheduler; every “Schedule” call-to-action scrolls to it.

The booking area intentionally shows a configuration state until a real Cal.com link is provided, so visitors are never sent to a non-existent scheduling page.

## Before launch

- Replace the draft biography with approved credentials, clinic locations, contact details, and professional registrations.
- Add the practice privacy policy and emergency-care guidance suitable for the jurisdiction.
- Use a professional, consented portrait of Dr. Ashok in place of the illustration if desired.
