export default interface ITicket {
  id: string; // MongoDB uses string IDs (ObjectId converted to string)
  created_at: Date;
  name: string;
  description: string;
}
