import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';

type PatientInfo = {
    date: string;
    visitType: string;
    provider: string;
};

type Props = {
    patient: PatientInfo;
    onUpdate: (patient: PatientInfo) => void;
};

export default function SurveyInfo({ patient, onUpdate }: Props) {
    const { handleSubmit, control, register, formState: { errors } } = useForm({
        defaultValues: {
            date: patient.date,
            visitType: patient.visitType,
            provider: patient.provider,
        },
    });

    const providers = [
        { name: "Dr. Ahmad Sami Oueis", img: "/images/doctors/Dr. Ahmad Sami Oueis.jpg" },
        { name: "Dr. Dinesh Tulasi", img: "/images/doctors/Dr. Dinesh Tulasi.jpg" },
        { name: "Dr. Ghada Khamis Haggag", img: "/images/doctors/Dr. Ghada Khamis Haggag.jpg" },
        { name: "Dr. Hana Fayez Elgabour", img: "/images/doctors/Dr. Hana Fayez Elgabour.jpg" },
        { name: "Dr. Karam Fares", img: "/images/doctors/Dr. Karam Fares.jpg" },
        { name: "Dr. Rawan Ahmad Oueis", img: "/images/doctors/Dr. Rawan Ahmad Oueis.jpg" },
        { name: "Dr. Maxim Baini", img: "/images/doctors/Dr.Maxim Baini.jpg" }
    ];

    const onSubmit = (data: any) => {
        onUpdate(data);
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center tracking-tight">
                Patient Visit Information
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div>
                    <Label htmlFor="date" className="text-base font-medium text-gray-700">Date</Label>
                    <Input
                        id="date"
                        type="date"
                        className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                        {...register('date', { required: 'Date is required' })}
                    />
                    {errors.date && <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>}
                </div>
                <div>
                    <Label htmlFor="visitType" className="text-base font-medium text-gray-700">Visit Type</Label>
                    <Controller
                        name="visitType"
                        control={control}
                        rules={{ required: 'Please select a visit type' }}
                        render={({ field }) => (
                            <Select {...field} value={field.value || ""} onValueChange={field.onChange}>
                                <SelectTrigger id="visitType" className="mt-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
                                    <SelectValue placeholder="Select visit type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Appointment">Appointment</SelectItem>
                                    <SelectItem value="Walk-in">Walk-in</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.visitType && <p className="text-sm text-red-500 mt-1">{errors.visitType.message}</p>}
                </div>
                <div>
                    <Label htmlFor="provider" className="text-base font-medium text-gray-700">Provider</Label>
                    <Controller
                        name="provider"
                        control={control}
                        rules={{ required: 'Please select a provider' }}
                        render={({ field }) => (
                            <Select {...field} value={field.value || ""} onValueChange={field.onChange}>
                                <SelectTrigger id="provider" className="mt-2 py-5 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
                                    <SelectValue placeholder="Select a provider" />
                                </SelectTrigger>
                                <SelectContent>
                                    {providers.map(p => (
                                        <SelectItem key={p.name} value={p.name}>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={p.img}
                                                    alt={p.name}
                                                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shadow-sm"
                                                />
                                                <span className="font-medium text-gray-800">{p.name}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.provider && <p className="text-sm text-red-500 mt-1">{errors.provider.message}</p>}
                </div>
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
        </div>
    );
}
