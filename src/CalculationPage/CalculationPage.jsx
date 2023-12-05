import { Tabs } from "flowbite-react";
import "./CalculationPage.css"

const CalculationPage = () => {
  return (
    <div className="w-[1140px] mx-auto">
<Tabs className="" aria-label="Pills" style="pills">
  <Tabs.Item active title="Grade - 9">
    <div className="">
      <div className="">
        <form action="#">
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        <input type="text" className="bg-slate-200" />
        </form>
      </div>
    </div>
  </Tabs.Item>
  <Tabs.Item title="Grade - 10">
    <div className="">
      <div className="flex">
        <form action="#">
          {/* Input fields for Grade 10 */}
          {[...Array(10)].map((_, index) => (
            <input key={index} type="text" placeholder="Type your course" />
          ))}
        </form>
      </div>
    </div>
  </Tabs.Item>
  <Tabs.Item title="Grade - 11">
    <div className="">
      <div className="flex">
        <form action="#">
          {/* Input fields for Grade 11 */}
          {[...Array(10)].map((_, index) => (
            <input key={index} type="text" placeholder="Type your course" />
          ))}
        </form>
      </div>
    </div>
  </Tabs.Item>
  <Tabs.Item title="Grade - 12">
    <div className="">
      <div className="flex">
        <form action="#">
          {/* Input fields for Grade 12 */}
          {[...Array(10)].map((_, index) => (
            <input key={index} type="text" placeholder="Type your course" />
          ))}
        </form>
      </div>
    </div>
  </Tabs.Item>
</Tabs>

    </div>
  );
};

export default CalculationPage;
