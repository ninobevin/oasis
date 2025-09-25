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
import FullScreenSignature from "@/components/signature_pad"




export default function Survey() {

 const [signature, setSignature] = useState<string | null>(null);
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
        <div
            className="relative flex flex-col justify-center items-center min-h-screen
               before:absolute before:inset-0 before:bg-black/50 before:z-0"
            style={{
                backgroundImage: "url('/images/doctors/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative w-full z-10">
                {patient.date && patient.visitType && patient.provider ? (
                    <SurveyData patient={patient} />
                ) : (
                  
                     <SurveyInfo onUpdate={handleUpdatePatient} patient={patient} />
                  
                   
                    
                )}
            </div>
        </div>
    );




}
