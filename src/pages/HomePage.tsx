import {
  ButtonGhost,
  ButtonIcon,
  ButtonOutline,
} from "@/components/ButtonVariants";
import { InputWithLabel, PhoneNumberInput } from "@/components/InputVariants";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import { title } from "process";
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {
  const [screen, setScreen] = useState(0);
  const Screens = [
    <Page1 />,
    <BasicInformation />,
    <WorkExperience />,
    <Education />,
    <YourSkills />,
    <GenerateResume />,
  ];

  const nextButtonText = [
    "Next, Add basic information",
    "Next, Add work experience",
    "Next, Add education",
    "Next, Add your skills",
    "Next, Tailor your resume",
    "Generate resume",
  ];

  const pageTitles = [
    "Introduction",
    "Basic Information",
    "Work Experience",
    "Education",
    "Your Skills",
    "Generate Resume",
  ];

  return (
    <>
      <div className="flex justify-between w-full pb-20">
        <div className="flex flex-col gap-5 w-full">
          <p className="scroll-m-20 text-sm font-medium text-neutral-500">
            {screen + 1}/6 {pageTitles[screen]}
          </p>
          {Screens[screen]}
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 z-10 border-t h-16 flex justify-between items-center px-10 bg-white">
        {screen > 0 ? (
          <ButtonOutline
            text="Back"
            className="rounded-3xl"
            onClick={() => {
              if (screen > 0) {
                setScreen(screen - 1);
              }
            }}
          />
        ) : (
          <div></div>
        )}
        <div className="flex gap-14 px-4 py-2">
          <ButtonGhost className="text-neutral-500" text="Skip for Now" />
          <Button
            className="rounded-3xl"
            onClick={() => {
              if (screen < Screens.length - 1) {
                setScreen(screen + 1);
              }
            }}
          >
            {nextButtonText[screen]}
          </Button>
        </div>
      </footer>
    </>
  );
};

const BasicInformation = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 flex-col w-1/2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          First, confirm that we've got Your basic information correct
        </h1>
        <p className="scroll-m-20 text-sm font-medium text-neutral-700">
          Description
        </p>
      </div>
      <div className="flex items-center justify-end flex-col gap-4 w-1/2 px-10">
        <InputWithLabel
          label="Full Name"
          placeholder="Enter your full name"
          inputType="text"
        />
        <InputWithLabel
          label="Email"
          placeholder="Enter your email"
          inputType="email"
        />
        <PhoneNumberInput
          label="Phone Number"
          placeholder="Enter your phone number"
          inputType="number"
        />
        <InputWithLabel label="location" placeholder="Enter your location" />
      </div>
    </div>
  );
};

const Page1 = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 flex-col w-1/2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          Hello there! Let's get started
        </h1>
        <p className="scroll-m-20 text-sm font-medium text-neutral-700">
          Description
        </p>
      </div>
      <div className="flex items-center justify-end flex-col gap-4 w-1/2 px-10"></div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 flex-col w-1/2"></div>
      <div className="flex items-center justify-end flex-col gap-4 w-1/2 px-10"></div>
    </div>
  );
};

const WorkExperience = () => {
  const data = [
    {
      title: "Co-Founder",
      content: "Adanomad | January, 2024 - Present",
      description:
        "Leveraged Strong negotiation and communication skills to secure strategic partnerships and drive revenue growth.",
    },
    {
      title: "Partner",
      content: "G&E Human Resources Consulting | July, 2023 - January, 2024",
      description:
        "Executive search and VC scouting.Executive search and VC scouting.",
    },
    {
      title: "Consultant",
      content: "G&E Human Resources Consulting | January, 2013 - April, 2017",
      description:
        "Managed executive search arrangements and placements for senior roles(Bank president,CFO,CRO,Strategy Director,HR Director) in high-tech,private equity,banking,and real estate industries",
    },
    {
      title: "Researcher",
      content: "G&E Human Resources Consulting | January, 2013 - April, 2017",
      description:
        "Managed executive search arrangements and placements for senior roles(Bank president,CFO,CRO,Strategy Director,HR Director) in high-tech,private equity,banking,and real estate industries",
    },
  ];

  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 flex-col w-1/2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          Here's what you have told us about your experience - any more to add?
        </h1>
        <p className="scroll-m-20 text-sm font-medium text-neutral-700">
          Description
        </p>
      </div>
      <div className="  w-1/2 px-10">
        <ScrollArea className="rounded-md   w-[600px] h-[80vh]">
          <div className="flex h-full gap-4 flex-col">
            {data.map((item) => (
              <Card className="p-0 w-[550px]">
                <CardContent className="px-3 py-5">
                  <form>
                    <div className="flex gap-5">
                      <div className="h-full flex justify-center items-center whitespace">
                        <img
                          src="/images/work_logo.png"
                          alt="office"
                          height={105}
                          width={105}
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex justify-between w-full">
                          <h2 className="text-xl font-bold">{item.title}</h2>
                          <div className="flex gap-1">
                            <ButtonIcon
                              onClick={() => {}}
                              icon={<Pencil size={20} />}
                            />
                            <ButtonIcon
                              onClick={() => {}}
                              icon={<Trash2 size={20} />}
                            />
                          </div>
                        </div>
                        <p className="text-md max-w-[400px] ">{item.content}</p>
                        <li className="text-sm  text-neutral-400 max-w-[350px]">
                          {item.description}
                        </li>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

const YourSkills = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 flex-col w-1/2"></div>
      <div className="flex items-center justify-end flex-col gap-4 w-1/2 px-10"></div>
    </div>
  );
};

const GenerateResume = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 flex-col w-1/2"></div>
      <div className="flex items-center justify-end flex-col gap-4 w-1/2 px-10"></div>
    </div>
  );
};

export default Home;
