import AppleFavicon from "@/assets/icons/favicon-apple.png";
import Favicon from "@/assets/icons/favicon.ico";

import PersonalImage from "../../public/jeje.jpg";

export const MetaInformation = {
  charset: "UTF-8",
  language: "ko",
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
  baseUrl: "https://peponi-blog-template.vercel.app",
};

export const PersonalInformation = {
  personalImage: PersonalImage,
  name: "Peponi",
  occupation: "Software engineer",
  responsibility: "Team leader",
  company: "My company",
  additionalInformation: `Lorem@ipsum.com
+82 10-1234-5678`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const SocialInformation = {
  github: "https://github.com/peponi-paradise/PeponiBlogTemplate",
  linkedIn: "https://www.linkedin.com/in/peponi-paradise",
  instagram: "https://www.instagram.com/",
  nuget: "https://www.nuget.org/profiles/Peponi",
};

export const PostInformation = {
  viewCount: 5,
  paginationRange: 2,
};

export const ServiceInformation = {
  title: "Services",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

// https://apexcharts.com/docs/react-charts/

export const WorkStyleInformation = {
  title: "Work Style",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  chartSeries: [
    {
      name: "Work Style",
      data: [50, 50, 50, 50],
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
      categories: ["Architecture", "Design", "Problem-solving", "Test"],
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
