import { signIn } from "next-auth/react";

import { Github, Facebook, Instagram, Globe } from "lucide-react";

const SocialLogin = () => {
  return (
    <div className="text-center h-24 flex items-center justify-center gap-5">
      <div>
        <Globe
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/myProfile",
            })
          }
          className="border border-2 text-4xl rounded-full p-[5px] hover:text-[#1de2a3] hover:text-[38px] ease-in duration-200"
        />
      </div>
      <Github
        // onClick={() => signInWithGithub()}
        className="border border-2 text-4xl rounded-full p-[5px] hover:text-[#1de2a3] hover:text-[38px] ease-in duration-200"
      />
      <Facebook className="border border-2 text-4xl rounded-full p-[5px] hover:text-[#1de2a3] hover:text-[38px] ease-in duration-200" />
      <Instagram className="border border-2 text-4xl rounded-full p-[5px] hover:text-[#1de2a3] hover:text-[38px] ease-in duration-200" />
    </div>
  );
};

export default SocialLogin;
