// form-fields/VisitTypeField.tsx
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function VisitTypeField({ control, errors }: any) {
  return (
    <div>
      <Label htmlFor="visitType" >
        Visit Type
      </Label>
      <Controller
        name="visitType"
        control={control}
        rules={{ required: "Please select a visit type" }}
        render={({ field }) => (
          <Select {...field} value={field.value || ""} onValueChange={field.onChange}>
            <SelectTrigger
              id="visitType"
              className="mt-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
            >
              <SelectValue placeholder="Select visit type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Appointment</SelectItem>
              <SelectItem value="1">Walk-in</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      {errors.visitType && <p className="text-sm text-red-500 mt-1">{errors.visitType.message}</p>}
    </div>
  );
}
