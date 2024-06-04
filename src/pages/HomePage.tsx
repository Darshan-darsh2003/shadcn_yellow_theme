import { InputWithLabel, PhoneNumberInput } from "@/components/InputVariants";

const Home = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col gap-5 w-full">
        <p className="scroll-m-20 text-md font-medium text-neutral-500">
          2/6 Basic Information
        </p>
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
            <InputWithLabel
              label="location"
              placeholder="Enter your location"
              inputType="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
