import type { APIRoute } from "astro";
import TimeEntryController from "@/controllers/timeentry.controller";

const timeEntryController = new TimeEntryController();

export const GET: APIRoute = async () => {
  try {
    const entries = await timeEntryController.getTimeEntries();

    if (!entries.length) {
      return new Response(null, { status: 404 });
    }

    return new Response(JSON.stringify(entries), { status: 200 });
  } catch {
    return new Response(null, { status: 404 });
  }
};
