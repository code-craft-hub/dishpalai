import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EyeIcon, EyeOff } from "lucide-react";
import { useRef, useState } from "react";
import { Loader } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { signInSchema } from "@/validation-schemas";
import { Input } from "@/components/ui/input";
import { axiosGoogleLogin } from "@/api/authApi";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { loginUserQuery } from "@/queries/auth-queries";

const SignInPage = () => {
  const location = useLocation();
  const firstname = location.state?.firstname;
  let googleInfo = useRef({ email: "", name: "" });
  const navigate = useNavigate();
  const [eyeToggle, setEyeToggle] = useState(true);
  // Mutations

  const { isPending, mutateAsync: loginUser } = loginUserQuery();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // name,given_name,family_name,picture,email,email_verified
      const { email, name } = await axiosGoogleLogin(tokenResponse);
      googleInfo.current = { email, name };
      const googleCredentials = {
        email,
        password: import.meta.env.VITE_GOOGLE_PASS,
        username: email?.split("@")[0],
      };
      toast.promise(
        loginUser(googleCredentials).then(() => {
          navigate("/dashboard", { replace: true });
        }),
        {
          loading: `${name}, Dishpal AI is logging you into your account now.`,
          success: `${name}, Here is your dashboard! Explore!`,
          error: `${name}, Your email is not yet registered! Please visit the sign-up page and click the google button there.`,
        }
      );
    },
  });

  // const createGoogleUser = async () => {
  //   console.log("Creating Google User");
  //   const googleCredentials = {
  //     email: googleInfo.current.email,
  //     password: import.meta.env.VITE_GOOGLE_PASS,
  //     username: googleInfo.current.email?.split("@")[0],
  //     confirm_password: import.meta.env.VITE_GOOGLE_PASS,
  //   };
  //   const { confirm_password, ...restOfLoginCredentials } = googleCredentials;
  //   toast.promise(
  //     registerUser(googleCredentials).then(() =>
  //       loginUser(restOfLoginCredentials).then(() => {
  //         navigate("/dashboard", { replace: true });
  //       })
  //     ),
  //     {
  //       loading: `${googleInfo.current.name}, Dishpal AI is creating your account will you in soon.`,
  //       success: `${googleInfo.current.name}, Here is your dashboard! Explore!`,
  //       error: `${googleInfo.current.name}, Check your email and password and try again!`,
  //     }
  //   );
  // };

  // if (isError && !hasCreatedGoogleUser.current) {
  //   hasCreatedGoogleUser.current = true; // Prevent re-calling
  //   createGoogleUser();
  // }

  const onSubmit = ({ email, password }: z.infer<typeof signInSchema>) => {
    const userInfo = { email, password, username: email?.split("@")[0] };

    toast.promise(
      loginUser(userInfo).then(() => {
        navigate("/dashboard", { replace: true });
      }),
      {
        loading: `${
          firstname || userInfo?.username
        }, Dishpal AI is logging you into your account now.`,
        success: `${
          firstname || userInfo?.username
        }, Here is your dashboard! Explore!`,
        error: `${
          firstname || userInfo?.username
        }, Check your email and password and try again!`,
      }
    );
  };
  return (
    <div className="h-full min-h-screen bg-bg3xl bg-cover grid md:grid-cols-2 max-2xl:py-8 max-sm:p-4  gap-4 max-2xl:p-8">
      <img
        src="/images/loginImg.png"
        width={500}
        height={600}
        alt=""
        className="hidden md:block 2xl:hidden place-self-center "
      />
      <div className="relative hidden 2xl:grid">
        <img
          src="/images/coverSigninImg.png"
          alt=""
          className="2xl:absolute 2xl:h-full 2xl:w-full place-self-center justify-self-end "
        />
        <img
          src="/images/logo.svg"
          alt=""
          className="2xl:absolute 2xl:w-[150px] h-auto left-4 top-4"
        />
        <h1 className="font-syne z-30 absolute top-1/2 left-1/2 text-5xl font-bold -translate-x-1/2 -translate-y-1/2 leading- text-white">
          Welcome <br /> Back
        </h1>
      </div>
      <div className="flex items-center justify-center md:justify-start w-full max-w-lg mx-auto">
        <div className="space-y-6 w-full">
          <div className="space-y-3 mb-3">
            <h1 className="font-bold text-xl xxx:text-3xl  xl:text-5xl max-xx:text-center  font-syne">
              Sign In
            </h1>
            <p className="space-x-6 flex flex-wrap justify-center xx:justify-start">
              <span className="font-syne max-xx:text-center ">
                Welcome Back, Please Enter Your Details
              </span>
            </p>
          </div>
          <Button
            onClick={() => {
              googleLogin();
            }}
            variant="outline"
            type="button"
            className="w-full py-6 border-none font-semibold hover:bg-slate-50 hover:shadow-xl font-syne bg-white"
          >
            <img
              src={"/images/google1.png"}
              alt=""
              width={28}
              height={28}
              className="mr-2"
            />
            Log In With Google
          </Button>

          <div className="flex gap-6 items-center justify-center overflow-hidden">
            <Separator className="bg-black w-full" />
            <div className="font-syne text-nowrap">Or</div>
            <Separator className="bg-black w-full" />
          </div>

          <div className="space-y-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="flex flex-col space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="h-12 bg-white border-none rounded-none placeholder:font-semibold placeholder:font-syne  placeholder:text-center"
                            placeholder="Email Address"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              className="h-12 bg-white border-none rounded-none  placeholder:font-semibold  placeholder:font-syne  placeholder:text-center"
                              type={eyeToggle ? "password" : "text"}
                              placeholder="Password"
                              {...field}
                            />
                          </FormControl>
                          {eyeToggle ? (
                            <EyeIcon
                              onClick={() => setEyeToggle(!eyeToggle)}
                              className="size-5 hover:cursor-pointer absolute top-1/2 right-1 -translate-y-1/2 -translate-x-1/2"
                            />
                          ) : (
                            <EyeOff
                              onClick={() => setEyeToggle(!eyeToggle)}
                              className="size-5 hover:cursor-pointer absolute top-1/2 right-1 -translate-y-1/2 -translate-x-1/2"
                            />
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0 py-4">
                        <FormControl>
                          <Checkbox
                            className="data-[state=checked]:bg-white data-[state=checked]:text-vividOrange border-none size-5"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-x-1 leading-none ">
                          <FormLabel className="font-syne hover:underline hover:cursor-pointer">
                            Remember Me For 30 Days
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button variant={"link"} className="font-syne">
                    <Link to="/auth/reset">Forgot Password </Link>
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-vividOrange py-6 rounded-none hover:bg-orange-600/60 text-black font-semibold font-syne"
                  disabled={isPending}
                >
                  {isPending ? (
                    <Loader className=" size-4 animate-spin" />
                  ) : (
                    <>Log In</>
                  )}
                </Button>
              </form>
            </Form>
            <div className="flex gap-1 items-center">
              <p className="font-syne">Don't Have An Account?</p>
              <Button
                variant={"link"}
                className="font-syne relative hover:no-underline group"
              >
                <Link to="/auth/register">Sign Up For Free!</Link>
                <div className="absolute bottom-0">
                  <img
                    src="/images/line.png"
                    width={100}
                    height={30}
                    alt=""
                    className="group-hover:animate-pulse"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
