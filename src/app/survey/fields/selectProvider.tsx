// form-fields/ProviderField.tsx
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

type Provider = { id : number ;name: string; avatar: string };

export default function ProviderField({ control, errors, providers }: { control: any; errors: any; providers: Provider[] }) {
  return (
    <div>
      <Label htmlFor="provider">
        Provider
      </Label>
      <Controller
        name="provider"
        control={control}
        rules={{ required: "Please select a provider" }}
        render={({ field }) => (
          <Select {...field} value={field.value || ""} onValueChange={field.onChange}>
            <SelectTrigger
              id="provider"
              className="mt-2 py-5 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
            >
              <SelectValue placeholder="Select a provider" />
            </SelectTrigger>
            <SelectContent>
              {providers.map((p) => (
                <SelectItem key={p.id} value={String(p.id)}>
                  <div className="flex items-center gap-3">
                    <img
                      src={p.avatar}
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
  );
}
