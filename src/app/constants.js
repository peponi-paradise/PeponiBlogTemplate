import Favicon from "@/assets/icons/favicon.ico";
import AppleFavicon from "@/assets/icons/favicon-apple.png";
import PersonalImage from "../../public/jeje.jpg";

export const MetaInformation = {
  charset: "UTF-8",
  title: {
    template: "%s - Peponi",
    default: "Peponi",
  },
  description: "Peponi's blog",
  author: "Peponi",
  icons: [
    { rel: "icon", url: Favicon.src },
    { rel: "apple-touch-icon", url: AppleFavicon.src },
  ],
  baseUrl: "https://github.com/peponi-paradise",
  googleSiteVerification: "",
};

export const PostInformation = {
  viewCount: 5,
  pagenationRange: 2,
};

export const PersonalInformation = {
  personalImage: PersonalImage,
  name: "Peponi",
  occupation: "Software engineer",
  responsibility: "Team leader",
  company: "My company",
  additionalInformation: "Lorem@ipsum.com",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const ServiceInformation = {
  title: "Services",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const WorkStyleInformation = {
  title: "Work Style",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  chartSeries: [
    {
      name: "Work Style",
      data: [90, 80, 60, 40],
    },
  ],
  chartOption: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: ["Documentation", "Design", "Communication", "Development"],
    },
  },
};

export const ExperienceInformation = [
  {
    name: "Company 3",
    dateTime: "2023 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    name: "Company 2",
    dateTime: "2021 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    name: "Company 1",
    dateTime: "2020 - 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
];

export const EducationInformation = [
  {
    name: "University 2",
    dateTime: "2023 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    name: "University 1",
    dateTime: "2021 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    name: "School 1",
    dateTime: "2020 - 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
];
