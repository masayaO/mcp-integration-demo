import { Button } from "@/components/ui/button.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-svh p-8 gap-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-row gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold text-[#0F172A]">Button</h1>
              <p className="text-xl text-[#475569]">
                Displays a button or a component that looks like a button.
              </p>
            </div>
            <div className="flex items-center">
              <Button 
                className="bg-[#0F172A] text-white"
                onClick={() => window.open("https://ui.shadcn.com", "_blank")}
              >
                View docs
              </Button>
            </div>
          </div>
          <div className="w-full h-px bg-[#E2E8F0]" />
        </div>
        <Button
          className="bg-[#0F172A] text-white"
          onClick={() => window.open("https://ui.shadcn.com/docs/components/button", "_blank")}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default App;
