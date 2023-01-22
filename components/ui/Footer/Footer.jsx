import React from "react";
// import SocialMedia from "../SocialMedia";
export default function Footer({}) {
  return (
    <footer class="container text-center my-6 p-8 text-gray3 font-bold">
      <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
      <div class="pt-10">
        Find an issue with this page?{" "}
        <a
          class="text-blue-500 hover:underline"
          href="https://github.com/yousef2007-rgb/intex-app"
        >
          Fix it on GitHub
        </a>
      </div>
      {/* <div className="flex items-center justify-center">
        <span>Follow us on instagram:</span>
        
      </div> */}

      <div class="text-xs">
        made by{" "}
        <a
          href="https://github.com/yousef2007-rgb"
          target="blank"
          className="text-blue-500 hover:underline"
        >
          {" "}
          Yousef Aburadi{" "}
        </a>
        <br />
      </div>
    </footer>
  );
}
