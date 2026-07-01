import { google } from 'googleapis'
import { personal } from '../src/data/portfolio.js'

function getCalendar() {
  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) return null

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar'],
  })
  return google.calendar({ version: 'v3', auth })
}

const calendarId = () => process.env.GOOGLE_CALENDAR_ID || 'primary'

// ── Create event ────────────────────────────────────────────────────────────

export async function createInterviewEvent({ name, email, date, time, purpose }) {
  const calendar = getCalendar()
  if (!calendar) return null

  const start = new Date(`${date}T${time}:00`)
  const end   = new Date(start.getTime() + 30 * 60 * 1000)

  const { data } = await calendar.events.insert({
    calendarId: calendarId(),
    requestBody: {
      summary: `Appointment with ${name} — ${personal.name}`,
      description: `Portfolio appointment request\nReason: ${purpose || 'General visit'}\nContact: ${email}\n\nPatient will be notified via email.`,
      start: { dateTime: start.toISOString() },
      end:   { dateTime: end.toISOString() },
    },
  })

  return { eventLink: data.htmlLink }
}

// ── Check conflict ──────────────────────────────────────────────────────────

export async function checkConflict(date, time) {
  const calendar = getCalendar()
  if (!calendar) return false // assume free if calendar not configured

  const start = new Date(`${date}T${time}:00`)
  const end   = new Date(start.getTime() + 30 * 60 * 1000)

  const { data } = await calendar.events.list({
    calendarId: calendarId(),
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  })

  return data.items.length > 0
}
