import Favicon from "@/public/icons/favicon.ico";
import PersonalImage from "@/public/icons/favicon.svg";

export const MetaInformation = {
  charset: "UTF-8",
  title: "Peponi",
  description: "Peponi's blog",
  author: "Peponi",
  icons: [{ rel: "icon", url: Favicon.src }],
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
  additionalInformation: "peponi_paradise@naver.com",
  description: "Sample description",
};

export const ServiceInformation = {
  title: "Services",
  description: "Sample description",
};

export const WorkStyleInformation = {
  title: "Work Style",
  description: "Sample description",
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
