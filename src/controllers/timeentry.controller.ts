import { timeEntriesCollection } from "@/models/db";
import { ObjectId } from "mongodb";

class TimeEntryController {
  public async getTimeEntries() {
    const result = await (await timeEntriesCollection()).find({}).toArray();
    if (result) {
      return result;
    } else {
      throw new Error("No time entries found.");
    }
  }
}

export default TimeEntryController;
