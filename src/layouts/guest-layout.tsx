import { ReactNode } from "react";

interface GuestLayoutProps {
  children: ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
  return (
    <div>
      <span>topnav</span>
      <div className="p-[20px] md:px-[50px] md:py-[30px] lg:px-[65px] bg-[#f9fafb]">
      {children}

      </div>
      <span>footer</span>
    </div>
  );
};

export default GuestLayout;
