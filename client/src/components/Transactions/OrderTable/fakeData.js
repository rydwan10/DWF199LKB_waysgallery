function createData(no, vendor, order, startProject, endProject, status) {
  return {
    no,
    vendor,
    order,
    startProject,
    endProject,
    status,
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
    "project is complete"
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
