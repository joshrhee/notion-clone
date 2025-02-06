import { cn } from "@/lib/utils";

interface ContentViewProps {
  id: string;
  isActive: boolean;
}

export const ContentView = ({ id, isActive }: ContentViewProps) => {
  return (
    <div
      className={cn(
        "p-4 sm:p-6 animate-fade-in w-full",
        isActive ? "block" : "hidden"
      )}
    >
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm w-full">
        <h2 className="text-2xl font-semibold text-notion-text mb-4">
          {id.charAt(0).toUpperCase() + id.slice(1)} View
        </h2>
        <p className="text-gray-600">
          This is the content for the {id} view. You can customize this content based on your needs.
        </p>
      </div>
    </div>
  );
};