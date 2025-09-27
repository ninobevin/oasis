
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PatientNameField({ register, errors }: any) {
  return (
    <div>
      <Label htmlFor="patientName" >
        Patient Name <span className="text-gray-500">(optional)</span>
      </Label>
      <Input
        id="patientName"
        className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
        {...register("patientName")}
      
      />
   
      {errors.patientName && <p className="text-sm text-red-500 mt-1">{errors.patientName.message}</p>}
    </div>
  );
}
