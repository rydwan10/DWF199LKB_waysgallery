function createData(no, vendor, order, startProject, endProject, status) {
  return {
    no,
    vendor,
    order,
    startProject,
    endProject,
    status,
    // history: [
    //     { date: '2020-01-05', customerId: '11091700', amount: 3 },
    //     { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    // ],
  };
}

export const rows = [
  createData(
    1,
    "Radif Ganteng",
    "Landing Page",
    "2020-12-12",
    "2021-01-21",
    "waiting accept"
  ),
  createData(
    2,
    "Haris Rahman",
    "Landing Page",
    "2020-12-12",
    "2021-01-21",
    "success"
  ),
  createData(
    3,
    "Muhammad Rydwan",
    "Landing Page",
    "2020-12-12",
    "2021-01-21",
    "cancel"
  ),
  createData(
    4,
    "Haris",
    "Landing Page",
    "2020-12-12",
    "2021-01-21",
    "waiting approved project"
  ),
  createData(
    5,
    "Jack Kambey",
    "Landing Page",
    "2020-12-12",
    "2021-01-21",
    "cancel"
  ),
];
