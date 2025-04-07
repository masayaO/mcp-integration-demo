import { Button } from "@/components/ui/button.tsx";

function App() {
  return (
    <div className="flex flex-col items-center gap-16 px-8 pt-8 pb-16 min-h-svh bg-white">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-row gap-[45px] items-start">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-[#0F172A] leading-tight tracking-tight">
              Button
            </h1>
            <p className="text-xl text-[#475569] leading-relaxed max-w-md">
              Displays a button or a component that looks like a button.
            </p>
          </div>
          <div className="flex items-center">
            <Button
              className="text-sm font-medium text-white bg-[#0F172A] hover:bg-[#0F172A]/90 w-24"
              onClick={() => window.open("https://ui.shadcn.com/", "_blank")}
            >
              View docs
            </Button>
          </div>
        </div>
        <hr className="border-t border-[#E2E8F0] w-full" />
      </div>
      <Button
        className="text-sm font-medium"
        onClick={() =>
          window.open("https://ui.shadcn.com/docs/components/button", "_blank")
        }
      >
        Continue
      </Button>
    </div>
  );
}

export default App;
