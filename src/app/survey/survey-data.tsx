import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

const questions = [
    "Booking of your appointment with call center",
    "Scheduling appointments",
    "Staff timeliness",
    "Receiving appropriate dental treatment",
    "Receiving treatment options",
    "Dentist (courteous and professional)",
    "Dental hygienist (courteous and professional)",
    "Dental Assistant (courteous and professional)",
    "Receptionist (courteous and professional)",
    "Quality of dental care provided",
    "Ability to ask questions",
    "Receiving a follow up appointment",
    "Confidentiality",
    "Pain control",
    "Receiving Parking Assistance",
    "Facility Cleanliness",
    "Overall experience with OBC"
];

export default function SurveyData({ patient }: { patient: { date: string; visitType: string; provider: string; } }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [comments, setComments] = useState("");

    const handleAnswer = (value: string) => {
        setAnswers({ ...answers, [current]: value });
    };

    const handlePrev = () => setCurrent((c) => Math.max(0, c - 1));
    const handleNext = () => setCurrent((c) => Math.min(questions.length, c + 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(JSON.stringify(answers));
    };

    return (
        <Card className="max-w-xl mx-auto mt-8">
            <CardHeader>
                <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="relative overflow-hidden h-64 flex items-center justify-center">
                        {/* Carousel Slides */}
                        {questions.map((q, idx) => (
                            <div
                                key={idx}
                                className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
                                    idx === current ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 z-0"
                                }`}
                                style={{ pointerEvents: idx === current ? "auto" : "none" }}
                            >
                                <label className="font-medium block mb-4">{q}</label>
                                <RadioGroup
                                    value={answers[idx] || ""}
                                    onValueChange={(value) => {
                                        setAnswers({ ...answers, [idx]: value });
                                    }}
                                    className="flex gap-6 mb-4"
                                >
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <RadioGroupItem value="good" />
                                        <FaSmile className="text-green-500" />
                                        <span>Good</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <RadioGroupItem value="fair" />
                                        <FaMeh className="text-yellow-500" />
                                        <span>Fair</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <RadioGroupItem value="poor" />
                                        <FaFrown className="text-red-500" />
                                        <span>Poor</span>
                                    </label>
                                </RadioGroup>
                                <div className="flex gap-2 mt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handlePrev}
                                        disabled={idx === 0}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={handleNext}
                                        disabled={idx === questions.length || !answers[idx]}
                                    >
                                        Next
                                    </Button>
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground">
                                    Question {idx + 1} of {questions.length}
                                </div>
                            </div>
                        ))}
                        {/* Comments Slide */}
                        <div
                            className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
                                current === questions.length ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 z-0"
                            }`}
                            style={{ pointerEvents: current === questions.length ? "auto" : "none" }}
                        >
                            <label className="font-medium block mb-4">Compliments or Comments:</label>
                            <Textarea
                                rows={4}
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                className="mb-4"
                            />
                            <div className="flex gap-2 mt-2">
                                <Button type="button" variant="outline" onClick={handlePrev}>
                                    Previous
                                </Button>
                                <Button type="submit" className="px-6">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {questions.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={`w-3 h-3 rounded-full ${current === idx ? "bg-primary" : "bg-muted"}`}
                                onClick={() => setCurrent(idx)}
                                aria-label={`Go to question ${idx + 1}`}
                            />
                        ))}
                        <button
                            type="button"
                            className={`w-3 h-3 rounded-full ${current === questions.length ? "bg-primary" : "bg-muted"}`}
                            onClick={() => setCurrent(questions.length)}
                            aria-label="Go to comments"
                        />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}