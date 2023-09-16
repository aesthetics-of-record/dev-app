import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

interface SideLayoutProps {
  children: React.ReactNode;
}

const SideLayout: React.FC<SideLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <LeftSidebar />

      <main className="h-full flex-1 overflow-y-auto">{children}</main>

      {/* <RightSidebar /> */}
    </div>
  );
};

export default SideLayout;
