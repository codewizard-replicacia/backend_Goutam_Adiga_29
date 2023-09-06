export const tripViewConfig = {
Details: [
    {
      key: "EndTime",
      value: "EndTime",
      type: "date",
      editable: false,
      required: true
    },
    {
      key: "StartTime",
      value: "StartTime",
      type: "date",
      editable: false,
      required: true
    },
    {
      key: "TripId",
      value: "TripId",
      type: "text",
      editable: false,
      required: true
    },
  ],
Type: [
    {
      key: "TripRoute",
      value: "Route Name",
      type: "lookup",
      editable: true,
      required: true
    },
  ],
}
