import React from "react";
import { FaCode } from "react-icons/fa6";
import { MdCorporateFare, MdOutlineManageAccounts } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { RiPresentationLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";

const Service = () => {
  return (
    <section data-aos="fade-left" className="pt-8 md:pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap mb-2 lg:mb-0">
          <div className="w-full px-4">
            <div className="mx-auto mb-6 lg:mb-12 max-w-[510px] text-center">
              <span className="mb-3 block text-2xl lg:text-3xl font-semibold text-blue-600">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-gray-800  md:text-[40px]">
                Whom Can Be Benifited
              </h2>
              <p className="px-4 text-gray-500">
              Elevate your task management experience with Tasksync Pro comprehensive services. Explore the features that empower your organization and streamline your workflow.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
        <ServiceCard
            title="Developers"
            details="Boost development productivity with streamlined task management, code collaboration, and project tracking features tailored for software development teams."
            icon={<FaCode />}
          />
          <ServiceCard
            title="Corporate Professionals"
            details="Enhance organizational efficiency by centralizing task management, project timelines, and fostering seamless workflow."
            icon={<MdCorporateFare />}
          />
          <ServiceCard
            title="Bankers"
            details="Optimize task tracking, project management, and communication within financial institutions. TaskSync Pro offers features tailored to the unique needs of banking professionals."
            icon={<BsBank />}
          />
          <ServiceCard
            title="Entrepreneurs"
            details="Empower entrepreneurs with a comprehensive task management solution. Streamline project planning, team collaboration, and task execution for business success."
            icon={<RiPresentationLine />}
          />
          <ServiceCard
            title="Freelancers"
            details="Simplify project management, task tracking, and client collaboration. TaskSync Pro provides freelancers with the tools they need to efficiently manage and deliver projects."
            icon={<MdOutlineManageAccounts/>}
          />
          <ServiceCard
            title="Students"
            details="Optimize study schedules, assignment tracking, and group projects with TaskSync Pro. A dedicated solution for students to enhance productivity."
            icon={<PiStudent />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-5 md:w-1/2 lg:w-1/3">
        <div className="mb-9 h-[24rem] lg:h-[26rem] xl:h-[23rem] rounded-[20px] p-10 shadow-2 hover:shadow-lg  bg-gray-50 md:px-7 xl:px-10">
          <div className="flex items-center justify-center">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-600 text-white text-4xl">
            {icon}
          </div>
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-gray-800 ">
            {title}
          </h4>
          <p className="text-gray-600">{details}</p>
        </div>
      </div>
    </>
  );
};
