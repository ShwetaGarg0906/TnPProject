const PlacementRecord = {
  data: {
    recordDetails: [
      { id: 1, companyId: 1, year: 2019, studentPlaced: 3 },
      { id: 2, companyId: 1, year: 2018, studentPlaced: 3 },
      { id: 3, companyId: 1, year: 2017, studentPlaced: 4 },
      { id: 4, companyId: 1, year: 2015, studentPlaced: 1 },
      { id: 5, companyId: 2, year: 2014, studentPlaced: 2 },
      { id: 3, companyId: 3, year: 2017, studentPlaced: 4 },
      { id: 4, companyId: 2, year: 2015, studentPlaced: 1 },
      { id: 5, companyId: 2, year: 2014, studentPlaced: 2 }
    ]
  },
  methods: {
    getYearsVisited(companyId) {
      console.log("PlacmenetRecordStore: Company Id " + companyId);
      var records = PlacementRecord.data.recordDetails.filter(record => {
        return record.companyId === companyId;
      });
      var years = records.map(record => {
        return "" + record.year;
      });
      console.log(years);
      return years;
    },
    getStudentsPlaced(companyId) {
      console.log("PlacmenetRecordStore: Company Id " + companyId);
      var records = PlacementRecord.data.recordDetails.filter(record => {
        return record.companyId === companyId;
      });
      var studentPlaced = records.map(record => {
        return record.studentPlaced;
      });
      console.log(studentPlaced);
      return studentPlaced;
    }
  }
};
export default PlacementRecord;
