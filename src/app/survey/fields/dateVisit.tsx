// form-fields/DateField.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DateVisitField({ register, errors }: any) {
  return (
    <div>
      <Label htmlFor="date" >
        Date
      </Label>
      <Input
        id="date"
        type="date"
        className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
        {...register("date", { required: "Date is required" })}
      />
      {errors.date && <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>}
    </div>
  );
}
