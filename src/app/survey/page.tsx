"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import SurveyInfo from "./survey-info"
import SurveyData from "./survey-data"




export default function Survey() {

    type patientInfo = {
        date: string;
        visitType: string;
        provider: string;
    }

    const [patient, setPatient] = useState<patientInfo>({
        date: "",
        visitType: "",
        provider: "",
    });

    const handleUpdatePatient = (updated: patientInfo) => {
            setPatient(updated);
    };

    return (
       
            <div className="flex justify-center bg-gray-100 items-center min-h-screen">
             
                {patient.date && patient.visitType && patient.provider ? (
                    <SurveyData  patient={patient} />
                ) : (
                    <SurveyInfo onUpdate={handleUpdatePatient} patient={patient} />
                )}
            </div>
    )

    

}
