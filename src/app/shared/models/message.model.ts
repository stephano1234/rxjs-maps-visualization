export default class Message {
  constructor(
    public value: string,
    public sentOrder: number,
    public processingTime: number,
  ) { }
}
