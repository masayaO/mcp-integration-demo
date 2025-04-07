import { Button } from "@/components/ui/button.tsx";

function App() {
  return (
    <div className="flex flex-col items-center p-8 pb-16 gap-16 bg-white">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-[#0F172A]">Button</h1>
            <p className="text-xl text-[#475569]">
              Displays a button or a component that looks like a button.
            </p>
          </div>
          <div>
            <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#0F172A] text-white">View docs</Button>
            </a>
          </div>
        </div>
        <hr className="w-full border-[#E2E8F0]" />
      </div>
      <a href="https://ui.shadcn.com/docs/components/button" target="_blank" rel="noopener noreferrer">
        <Button className="bg-[#0F172A] text-white">Continue</Button>
      </a>
    </div>
  );
}

export default App;
