import React from "react";
import Invite from "../assets/invite.png";

const ProjectHeader = () => {
  return (
    <div className="p-8 flex justify-between items-center w-full">
      <div className="flex flex-row justify-between items-center w-[23%]">
        <h1 className="text-5xl font-bold text-gray-800">Mobile App</h1>
        <div className="flex flex-row gap-2">
          <svg
            width="35"
            height="35"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
              fill="#5030E5"
              fill-opacity="0.2"
            />
            <path
              d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z"
              stroke="#5030E5"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875"
              stroke="#5030E5"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="35"
            height="35"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
              fill="#5030E5"
              fill-opacity="0.2"
            />
            <path
              d="M18.0002 10.683C20.3829 10.683 22.3166 12.6175 22.3166 15.0003C22.3164 17.383 20.3828 19.3167 18.0002 19.3167H16.9933C16.6372 19.3167 16.3429 19.0225 16.3429 18.6664C16.3431 18.3103 16.6373 18.0169 16.9933 18.0169H18.0002C19.6638 18.0168 21.0166 16.664 21.0168 15.0003C21.0168 13.3366 19.6639 11.9838 18.0002 11.9837H17.0002C16.644 11.9837 16.3498 11.6895 16.3498 11.3333C16.3498 10.9785 16.636 10.683 17.0002 10.683H18.0002Z"
              fill="#5030E5"
              stroke="#5030E5"
              stroke-width="0.3"
            />
            <path
              d="M13.0003 10.683C13.3564 10.6831 13.6497 10.9773 13.6497 11.3333C13.6497 11.6894 13.3564 11.9836 13.0003 11.9837H12.0003C10.3365 11.9837 8.98373 13.3365 8.98373 15.0003C8.9839 16.664 10.3366 18.0169 12.0003 18.0169H13.0003C13.3562 18.0171 13.6496 18.3104 13.6497 18.6664C13.6497 19.0224 13.3564 19.3166 13.0003 19.3167H12.0003C9.61759 19.3167 7.68312 17.383 7.68295 15.0003C7.68295 12.6175 9.61749 10.683 12.0003 10.683H13.0003Z"
              fill="#5030E5"
              stroke="#5030E5"
              stroke-width="0.3"
            />
            <path
              d="M17.6663 14.3496C18.0225 14.3496 18.3167 14.6438 18.3167 15C18.3167 15.3562 18.0225 15.6504 17.6663 15.6504H12.3333C11.9772 15.6504 11.6829 15.3562 11.6829 15C11.6829 14.6438 11.9772 14.3496 12.3333 14.3496H17.6663Z"
              fill="#5030E5"
              stroke="#5030E5"
              stroke-width="0.3"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H12" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12V6" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" fill="#5030E5" fill-opacity="0.2"/>
</svg>

        <p className="text-[#5030E5]">Invite</p>
        </div>
        <div>
          <img src={Invite} alt="invite.png" />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
