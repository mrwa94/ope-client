

export const taskData = [
  {
    id: "1",
    reportId: 1,
    title: "المواطن لايستطيع وضع عتب على الخريطة",
    numberReported: 123,
    date: new Date(),
    sourceReport: "مكتب هندسي",
    description:
      "عندما يقوم المواطن بانشاء طلب عتب جديد لا يستطيع تحديد نقطة على الخريطة لتحديد الشارع.",
    priority: {
      name: "عالية",
      color: "red",
    },
    status: "to-do",
    assignee: "مروة الصبحي",
    serviceName: "خدمة 1",
    serviceId: "s1",
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
    dueDate: new Date(),
  },
  {
    id: "2",
    reportId: 2,
    title: "المواطن لايستطيع وضع عتب على الخريطة",
    numberReported: 123,
    date: new Date(),
    sourceReport: "System",
    description:
      "عندما يقوم المواطن بانشاء طلب عتب جديد لا يستطيع تحديد نقطة على الخريطة لتحديد الشارع.",
    priority: {
      name: "متوسطة",
      color: "orange",
    },
    status: "to-do",
    assignee: "مروة الصبحي",
    serviceName: "خدمة 1",
    serviceId: "s1",
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
    dueDate: new Date(),
  },
  {
    id: "3",
    reportId: 3,
    title: "المواطن لايستطيع وضع عتب على الخريطة",
    numberReported: 123,
    date: new Date(),
    sourceReport: "System",
    description:
      "عندما يقوم المواطن بانشاء طلب عتب جديد لا يستطيع تحديد نقطة على الخريطة لتحديد الشارع.",
    priority: {
      name: "منخفضة",
      color: "gray",
    },
    status: "to-do",
    assignee: "مروة الصبحي",
    serviceName: "خدمة 1",
    serviceId: "s1",
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
    dueDate: new Date(),
  },
  {
    id: "4",
    title: "المواطن لايستطيع وضع عتب على الخريطة",
    numberReported: 123,
    date: new Date(),
    sourceReport: "System",
    description:
      "عندما يقوم المواطن بانشاء طلب عتب جديد لا يستطيع تحديد نقطة على الخريطة لتحديد الشارع.",
    priority: {
      name: "منخفضة",
      color: "gray",
    },
    status: "to-do",
    assignee: "مروة الصبحي",
    serviceName: "خدمة 1",
    serviceId: "s1",
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
    dueDate: new Date(),
  },
  {
    id: "5",
    title: "المواطن لايستطيع وضع عتب على الخريطة",
    numberReported: 124,
    date: new Date(),
    sourceReport: "User",
    description:
      "عندما يقوم المواطن بانشاء طلب عتب جديد لا يستطيع تحديد نقطة على الخريطة لتحديد الشارع.",
    priority: {
      name: "متوسطة",
      color: "orange",
    },
    status: "in-progress",
    assignee: "أحمد الرفاعي",
    serviceName: "السلامة المرورية",
    serviceId: "44",
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
    dueDate: new Date(),
  },
  {
    id: "6",
    title: "المواطن لايستطيع وضع عتب على الخريطة",
    numberReported: 124,
    date: new Date(),
    sourceReport: "مكتب هندسي",
    description:
      "عندما يقوم المواطن بانشاء طلب عتب جديد لا يستطيع تحديد نقطة على الخريطة لتحديد الشارع.",
    priority: {
      name: "متوسطة",
      color: "gray",
    },
    status: "done",
    assignee: "أحمد الرفاعي",
    serviceName: "السلامة المرورية",
    serviceId: "44",
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
    dueDate: new Date(),
  },
];

export const issueTypes = [
  {
    id: "it1",
    name: "عطل في الخريطة",
  },
];

export const RequestTasksData = [
  {
    id: "44",
    serviceId: 44,
    requestNumber: 4,
    description:
      "خدمة تتيح للمواطنين امكانية ايجار بيوتهم الى حجاج بيت الله الحرام",
    name: "إسكان الحجاج",
    developerName: "مروة الصبحي",
    testerHelperName: "أحمد صابر",
    analysisName: "شهد السحيمي",
    designName: "ألطاف الحربي",
    files: "file1.jpg, file2.png",
    status: "in-progress",
    time: 10,
    timeSpent: 8,
    priority: {
      name: "متوسطة",
      color: "gray",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
  },
  {
    id: "44",
    serviceId: 44,
    requestNumber: 4,
    description:
      "خدمة تتيح للمواطنين امكانية ايجار بيوتهم الى حجاج بيت الله الحرام",
    name: "إسكان الحجاج",
    developerName: "مروة الصبحي",
    testerHelperName: "أحمد صابر",
    analysisName: "شهد السحيمي",
    designName: "ألطاف الحربي",
    files: "file1.jpg, file2.png",
    status: "to-do",
    time: 10,
    timeSpent: 8,
    priority: {
      name: "متوسطة",
      color: "gray",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date(),
  },
];

export const servicesData = [
  {
    id: "3333",
    serviceId: 23,
    tester: " لمى الحربي",
    description: "اختبر الخدمة بشكل كامل",
    name: "اسكان الحجاج",
    developerName: "محمد اسماعيل",
    testerHelperName: "محمد صابر",
    analysisName: "شهد السحيمي",
    designName: "ألطاف الحربي ",
    files: "files/design.csv",
  },
  {
    id: "3333",
    serviceId: 23,
    tester: " لمى الحربي",
    description: "اختبر الخدمة بشكل كامل",
    name: "اسكان الحجاج",
    developerName: "محمد اسماعيل",
    testerHelperName: "محمد صابر",
    analysisName: "شهد السحيمي",
    designName: "ألطاف الحربي ",
    files: "files/design.csv",
  },
  {
    id: "3333",
    serviceId: 23,
    tester: " لمى الحربي",
    description: "اختبر الخدمة بشكل كامل",
    name: "اسكان الحجاج",
    developerName: "محمد اسماعيل",
    testerHelperName: "محمد صابر",
    analysisName: "شهد السحيمي",
    designName: "ألطاف الحربي ",
    files: "files/design.csv",
  }
]

