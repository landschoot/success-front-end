const DropdownOptions = {
  EngagementEntries: {
    Clients: [
      {
        key: "1",
        text: "BCBS",
        value: "1"
      },
      {
        key: "2",
        text: "Medtronic",
        value: "2"
      },
      {
        key: "3",
        text: "Thomas Reuters",
        value: "3"
      }
    ],
    Engagments: [
      {
        key: "1",
        text: "Discovery and Cloud Migration Readiness",
        value: "1"
      },
      { key: "2", text: "Engagement Name 2", value: "2" },
      { key: "3", text: "Engagement Name 3", value: "3" }
    ]
  },
  ProjectEntries: {
    Industry: [],
    Technology: [],
    Practice: []
  }
};
/*This is the testing data that was found in the wireframes
I simply made it into a .JSON and am using it inside this first 
engagement entry page */

export default DropdownOptions;
