"use server"

import { prisma } from "@/lib/prisma";


export async function getDoctorProviders() {
    const providers = await prisma.doctorProvider.findMany();
    return providers;
}

export async function getQuestionaire() {
    const questionaire = await prisma.surveyQuestion.findMany();
    return questionaire;
}

export async function saveSurvey(params: { answers: { [key: number]: string }; comments: string, patient: { date: string; visitType: string; provider: string; patientName?: string; } }) {
    {

        // save to database
        // these are the fields in the SurveyEntry model
        // id        Int      @id @default(autoincrement())
        // providerId Int
        // visitType Int
        // patientName String
        // createdAt DateTime @default(now())
        const { answers, comments } = params;

        const survey = await prisma.surveyEntry.create({
            data: {
                providerId: parseInt(params.patient.provider),
                visitType: parseInt(params.patient.visitType),
                patientName: params.patient.patientName || "",
                comment: comments
            }
        });
        const surveyId = survey.id;

        // save answers to SurveyAnswer model
        // these are the fields in the SurveyAnswer model
        // id  Int   @id @default(autoincrement())
        // surveyEntryId Int 
        // questionId Int
        // answer Int               
        // save answers to database
        for (const questionId in answers) {
            const answer = answers[questionId];
            await prisma.surveyAnswer.create({
                data: {
                    surveyEntryId: surveyId,
                    questionId: parseInt(questionId),
                    answer: parseInt(answer)
                }
            });
        }
    }
}