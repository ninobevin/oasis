export default function SurveySummary() {
    return (
        <Card className="max-w-md mx-auto mt-10 p-6 text-center shadow-lg rounded-xl bg-gradient-to-br from-white to-blue-50">
            <CardHeader>
            <div className="flex flex-col items-center">
                <FaSmile className="text-4xl text-green-500 mb-2" />
                <CardTitle className="text-2xl font-semibold">Survey Submitted!</CardTitle>
            </div>
            </CardHeader>
            <CardContent>
         
            <p className="mb-6 text-md text-gray-600">
                Would you like to leave a Google review?
            </p>
            <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => window.open("https://g.page/r/CRyqe9oQOFMGEBM/review", "_blank")}>
                    Yes
                </Button>
                <Button variant="outline" asChild>
                    <a href="/survey">No</a>
                </Button>
            </div>
            </CardContent>
        </Card>
    );
}
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import { getQuestionaire , saveSurvey} from "./queryActions";       