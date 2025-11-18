import NextJs from "/public/images/stacks/nextjs.svg";
import TypeScript from "/public/images/stacks/typescript.svg";
import Scss from "/public/images/stacks/scss.svg";
import Storybook from "/public/images/stacks/storybook.svg";
import Tailwind from "/public/images/stacks/tailwind.svg";

type TechStackType = {
  stack: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const techStacks: TechStackType[] = [
  {
    stack: "Next Js",
    icon: NextJs,
  },
  {
    stack: "TypeScript",
    icon: TypeScript,
  },
  {
    stack: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    stack: "SCSS",
    icon: Scss,
  },
  {
    stack: "Storybook",
    icon: Storybook,
  },
];
