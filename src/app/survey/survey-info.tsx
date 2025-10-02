
"use client";

import { Button } from "@/components/ui/button";
import { useForm, Controller } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import DateVisitField from "./fields/dateVisit";
import ProviderField from "./fields/selectProvider";
import VisitTypeField from "./fields/selectVisitType";
import PatientNameField from "./fields/textPatientName";
import { getDoctorProviders } from "./queryActions";

type PatientInfo = {
    date: string;
    visitType: string;
    provider: string;
    patientName?: string;
};

type Props = {
    patient: PatientInfo;
    onUpdate: (patient: PatientInfo) => void;
};

import React, { useEffect, useState } from "react";

export default function SurveyInfo({ patient, onUpdate }: Props) {

     const today = new Date().toISOString().split("T")[0];
    const { handleSubmit, control, register, formState: { errors } } = useForm({
        defaultValues: {
            date: today,
            visitType: patient.visitType,
            provider: patient.provider,
            patientName: patient.patientName || ''
        },
    });

    const [providers, setProviders] = useState<any[]>([]);

    useEffect(() => {
        const fetchProviders = async () => {
            const doctorProviders = await getDoctorProviders();
            setProviders(doctorProviders.map((doc) => ({
                id: doc.id,
                name: doc.name,
                active: doc.active,
                specialty: doc.specialty,
                avatar: doc.avatar
            })));
        };

        fetchProviders();
    }, []);

    const onSubmit = (data: any) => {
        onUpdate(data);
    };

    return (
        <Card className="max-w-xl mx-auto mt-8">
            <CardHeader>
                <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">

                <DateVisitField register={register} errors={errors} />
                <VisitTypeField control={control} errors={errors} />
                <ProviderField control={control} errors={errors} providers={providers} />
                <PatientNameField register={register} errors={errors} />
                
                <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
                >
                    Next
                    <span>
                        <FaArrowRight className="h-5 w-5" />
                    </span>
                </Button>
            </form>
            </CardContent>
        </Card>
    );
}
