import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Javascript from "../../assets/javascript.svg";
import Typescript from "../../assets/typescript.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Chakra from "../../assets/chakraui.svg";
import Reactjs from "../../assets/reactjs.svg";
import Nodejs from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";
import Mysql from "../../assets/mysql.svg";
import Postgresql from "../../assets/postgresql.svg";
import Git from "../../assets/git.svg";
import Vscode from "../../assets/vscode.svg";
import Postman from "../../assets/postman.svg";
import Github from "../../assets/github-tools.svg";
import Gitlab from "../../assets/gitlab-tools.svg";
import Jira from "../../assets/jira.svg";

const Skills = () => {
  return (
    <div id="skills" className="bg-bg-color3 max-w-screen min-h-screen flex flex-col items-center justify-center py-32 lg:py-24">
      <div className="w-full xl:full 2xl:w-4/5 h-fit xl:h-700 flex flex-col">
        <div className="w-full flex items-center flex-col">
          <span className="text-white font-raleway font-extrabold text-48">
            Skills
          </span>
          <span className="text-sub-title font-raleway font-extrabold text-28">
            Tech Skills
          </span>
        </div>

        {/* skills */}
        <div className="w-full h-full flex flex-col xl:flex-row items-center xl:items-start px-2">
          {/* column 1 */}
          <div className="w-full lg:w-1/2 h-full px-6 lg:px-24 py-4 flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-8">
                <div className="w-14 lg:w-40 flex items-center gap-3">
                  <img src={Html} alt="html" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      HTML
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Expert
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-14 lg:w-40 flex items-center gap-3">
                  <img src={Css} alt="css" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      CSS
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Expert
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Javascript} alt="javascript" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      Javascript
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Advanced
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Typescript} alt="typescript" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      Typescript
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Intermediate
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Bootstrap} alt="bootstrap" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      Bootstrap
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Intermediate
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Chakra} alt="chakra" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      ChakraUI
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Expert
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Css} alt="css" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      Tailwind
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Advanced
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className="w-full lg:w-1/2 h-full px-6 lg:px-24 py-4 flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-8">
                <div className="w-14 lg:w-40 flex items-center gap-3">
                  <img src={Reactjs} alt="react" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      React
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Advanced
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-14 lg:w-40 flex items-center gap-3">
                  <img src={Nodejs} alt="nodejs" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      NodeJS
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Advanced
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={express} alt="express" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      Express
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Advanced
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Mysql} alt="mysql" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      MySQL
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Advanced
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Postgresql} alt="postgresql" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      PostgreSQL
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color2 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Intermediate
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-fit lg:w-40 flex items-center gap-3">
                  <img src={Git} alt="git" className="max-w-14" />
                  <div className="hidden lg:block">
                    <span className="text-sub-title font-raleway font-semibold text-lg">
                      Git
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                  <div className="bg-bar-color1 w-4 lg:w-10 h-2" />
                </div>
                <div>
                  <span className="text-sub-title font-raleway font-semibold text-lg">
                    Expert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-72 flex items-center flex-col gap-8">
        <span className="text-sub-title font-raleway font-extrabold text-28">
          Tools
        </span>
        <div className="flex gap-8 flex-col lg:flex-row items-center">
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg">
                <img src={Vscode} alt="vscode" />
              </div>
              <span className="text-sub-title font-raleway font-semibold text-lg">
                VS Code
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg">
                <img src={Postman} alt="postman" />
              </div>
              <span className="text-sub-title font-raleway font-semibold text-lg">
                Postman
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg">
                <img src={Github} alt="github" />
              </div>
              <span className="text-sub-title font-raleway font-semibold text-lg">
                Github
              </span>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg">
                <img src={Gitlab} alt="gitlab" />
              </div>
              <span className="text-sub-title font-raleway font-semibold text-lg">
                Gitlab
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg">
                <img src={Jira} alt="jira" />
              </div>
              <span className="text-sub-title font-raleway font-semibold text-lg">
                Jira
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
