import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import { getQuestionaire, saveSurvey } from "./queryActions";




export default function SurveyData({ patient, finishSurvey }: { patient: { date: string; visitType: string; provider: string; patientName?: string; }, finishSurvey: (show: boolean) => void }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [comments, setComments] = useState("");



    const handleAnswer = (value: string) => {
        setAnswers({ ...answers, [current]: value });
    };

    const handlePrev = () => setCurrent((c) => Math.max(0, c - 1));
    const handleNext = () => setCurrent((c) => Math.min(questions.length, c + 1));

    const [questions, setQuestions] = useState<any[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // alert(JSON.stringify(answers));
    };

    useEffect(() => {
        // Fetch questions from the database or API if needed
        const fetchQuestions = async () => {
            const fetchedQuestions = await getQuestionaire();
            setQuestions(fetchedQuestions);
        };
        fetchQuestions();
    }, []);

    async function submitSurvey() {
        // Here you can handle the final submission of the survey
        const surveyData = { answers, comments, patient };
        saveSurvey(surveyData);


        if (comments.trim() !== "") {
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    // Modern browsers
                    await navigator.clipboard.writeText(comments);
                    alert("Comment copied to clipboard!");
                } else {
                    // Fallback for iOS Safari / insecure contexts
                    const textarea = document.createElement("textarea");
                    textarea.value = comments;
                    textarea.style.position = "fixed"; // prevent scroll jump
                    document.body.appendChild(textarea);
                    textarea.focus();
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                    alert("Comment copied to clipboard!");
                }
            } catch (err) {
                console.error("Failed to copy: ", err);
                alert("Copy failed. Please copy manually.");
            }
        }

        finishSurvey(true);

    }

    return (
        <Card className="max-w-xl mx-auto mt-8">
            <CardHeader>
                <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flext flex-col mb-6">
                        {<label className="mb-2">Hello {patient.patientName || "there"},</label>}
                        <br />
                        {current < questions.length - 1 && <label>How satisfied were you with: </label>}
                    </div>

                    {/* Optionally show the saved signature */}


                    <div className="relative overflow-hidden h-64 flex items-center justify-center">

                        {/* Carousel Slides */}
                        {questions.map((q, idx) => (
                            <div
                                key={idx}
                                className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${idx === current ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 z-0"
                                    }`}
                                style={{ pointerEvents: idx === current ? "auto" : "none" }}
                            >
                                <label className="font-medium block mb-4">{q.question}</label>
                                <RadioGroup
                                    value={answers[q.id] || ""}
                                    onValueChange={(value) => {
                                        setAnswers({ ...answers, [q.id]: value });
                                    }}
                                    className="flex gap-6 mb-4"
                                >
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <RadioGroupItem value="3" />
                                        <FaSmile className="text-green-500" />
                                        <span>Good</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <RadioGroupItem value="2" />
                                        <FaMeh className="text-yellow-500" />
                                        <span>Fair</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <RadioGroupItem value="1" />
                                        <FaFrown className="text-red-500" />
                                        <span>Poor</span>
                                    </label>
                                </RadioGroup>
                                <div className="flex gap-2 mt-8">
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
                                        disabled={idx === questions.length || !answers[q.id]}
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
                            className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${current === questions.length ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 z-0"
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



                            <div className="flex gap-2 mt-4">
                                <Button type="button" variant="outline" onClick={handlePrev}>
                                    Previous
                                </Button>
                                <Button type="submit" onClick={submitSurvey} className="px-6">
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