import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { ContentView } from "@/components/ContentView";
import { AiChatButton } from "@/components/AiChatButton";

export const Route = createFileRoute("/")({
    component: HomeComponent
});

const navigationItems = [
    { id: "dashboard", title: "Dashboard" },
    { id: "tasks", title: "Tasks" },
    { id: "notes", title: "Notes" },
    { id: "calendar", title: "Calendar" }
];

function HomeComponent() {
    const [activeView, setActiveView] = React.useState("dashboard");

    const handleSearch = (query: string) => {
        const matchingItem = navigationItems.find((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        if (matchingItem) {
            setActiveView(matchingItem.id);
        }
    };

    return (
        <div className="bg-notion-gray w-full min-h-screen overflow-x-hidden">
            <Navigation
                items={navigationItems}
                activeItem={activeView}
                onItemClick={setActiveView}
            />
            <main className="mx-auto px-4 py-6 max-w-full container">
                {navigationItems.map((item) => (
                    <ContentView
                        key={item.id}
                        id={item.id}
                        isActive={activeView === item.id}
                    />
                ))}
            </main>
            <AiChatButton onSearch={handleSearch} />
        </div>
    );
}
