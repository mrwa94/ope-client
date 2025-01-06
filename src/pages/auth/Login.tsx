"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "برجاء ادخال الايميل ",
  }),
  password: z.string().min(8, {
    message: "برجاء ادخال كلمة المرور",
  }),
});

const Login = () => {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  
  const navigator = useNavigate()

  const onSubmit = () => {
    console.log("onSubmit");
    navigator("/tester/documentation")
    //...
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-200">
  <div className="flex justify-center w-full">
    <div className="bg-white p-12 rounded-lg shadow-lg max-w-md w-full max-h-min">
      <Form {...form}>
        <div className="flex justify-center mb-6">
          <FormLabel className="text-2xl font-bold text-center">
            تسجيل الدخول
          </FormLabel>
        </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الايميل </FormLabel>
              <FormControl>
                <Input placeholder="marwa@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
              ادخل ايميل الأمانة
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>كلمة المرور</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
         <div className="flex justify-center mb-6">
         
          <Button className=" font-bold text-center p-4 w-28 bg-[#004D46]" type="submit">Submit</Button>
        
        </div>
        
      </form>
    </Form>
    </div>
    </div>
  </div>
  );
};
export default Login;
