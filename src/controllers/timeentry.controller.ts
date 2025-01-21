import { timeEntriesCollection } from "@/models/db";
import { ObjectId } from "mongodb";

class TimeEntryController {
  public async getTimeEntries() {
    const result = await (await timeEntriesCollection()).find({}).toArray();
    if (result) {
      return result;
    } else {
      throw new Error("No jobs found.");
    }
  }

  public async getJobById(id: string) {
    if (ObjectId.isValid(id)) {
      const result = await (
        await timeEntriesCollection()
      ).findOne({ _id: new ObjectId(id) });
      if (result) {
        return result;
      } else {
        throw new Error("Time entry not found.");
      }
    } else {
      throw new Error("Invalid ID format.");
    }
  }
}

export default TimeEntryController;
