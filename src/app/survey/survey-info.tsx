import  { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SurveyInfo() {
    const [date, setDate] = useState("");
    const [visitType, setVisitType] = useState("Appointment");
    const [provider, setProvider] = useState("");

    const providers = [
        { name: "Dr. Smith", img: "/images/dr-smith.jpg" },
        { name: "Dr. Lee", img: "/images/dr-lee.jpg" },
        { name: "Dr. Patel", img: "/images/dr-patel.jpg" },
    ];

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // handle form submission logic here
    }

    /**
     * The form uses "max-w-md" which sets the maximum width to 28rem (448px).
     * To make the form wider, increase the max-w-* class, e.g. "max-w-lg" or "max-w-xl".
     * Example: Replace "max-w-md" with "max-w-xl" in the form's className.
     */

    return (
        <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="mt-1"
                    />
                </div>
                <div>
                    <Label htmlFor="visitType">Visit Type</Label>
                    <select
                        id="visitType"
                        value={visitType}
                        onChange={e => setVisitType(e.target.value)}
                        className="mt-1 w-full border rounded px-3 py-2"
                    >
                        <option value="Appointment">Appointment</option>
                        <option value="Walk-in">Walk-in</option>
                    </select>
                </div>
                <div>
                    <Label htmlFor="provider">Provider</Label>
                    <select
                        id="provider"
                        value={provider}
                        onChange={e => setProvider(e.target.value)}
                        className="mt-1 w-full border rounded px-3 py-2"
                    >
                        <option value="">Select a provider</option>
                        {providers.map(p => (
                            <option key={p.name} value={p.name}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </div>
    );
}