import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Javascript from "../../assets/javascript.svg";
import Typescript from "../../assets/typescript.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Chakra from "../../assets/chakraui.svg";
import Tailwind from "../../assets/tailwind.svg";
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
import Next from "../../assets/next.svg";
import Vue from "../../assets/vue.svg";
import Golang from "../../assets/go.svg";
import Php from "../../assets/php.svg";
import Laravel from "../../assets/laravel.svg";
import Redis from "../../assets/redis.svg";
import Docker from "../../assets/docker.svg";
import Kubernetes from "../../assets/kubernetes.svg";

const Skills = () => {
  return (
    <div
      id='skills'
      className='bg-bg-color3 max-w-screen min-h-screen flex flex-col items-center justify-center py-32 lg:py-24'
    >
      <div className='w-full xl:full 2xl:w-4/5 h-fit xl:h-700 flex flex-col'>
        <div className='w-full flex items-center flex-col'>
          <span className='text-white font-raleway font-extrabold text-48'>
            Skills
          </span>
          <span className='text-sub-title font-raleway font-extrabold text-28'>
            Tech Skills
          </span>
        </div>

        <div className='w-full px-6 lg:px-24 py-24'>
          <div className='flex flex-wrap justify-center gap-12'>
            {/* Skill Item */}
            <div className='flex flex-col items-center gap-3'>
              <img src={Html} alt='html' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                HTML
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Css} alt='css' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                CSS
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Javascript} alt='javascript' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Javascript
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Typescript} alt='typescript' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Typescript
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Bootstrap} alt='bootstrap' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Bootstrap
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Chakra} alt='chakra' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                ChakraUI
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Tailwind} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Tailwind
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Reactjs} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                React
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Next} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                NextJS
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Vue} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                VueJS
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Nodejs} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                NodeJS
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={express} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Express
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Mysql} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                MySQL
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Postgresql} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                PostgreSQL
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Git} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Git
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Golang} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Golang
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Php} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                PHP
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Laravel} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Laravel
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Redis} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Redis
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Docker} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Docker
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src={Kubernetes} alt='tailwind' className='max-w-14' />
              <span className='hidden lg:block text-sub-title font-raleway font-semibold text-lg'>
                Kubernetes
              </span>
            </div>
          </div>
        </div>
        <div className='w-full h-fit flex items-center flex-col gap-8'>
          <span className='text-sub-title font-raleway font-extrabold text-28'>
            Tools
          </span>
          <div className='flex gap-8 flex-col lg:flex-row items-center'>
            <div className='flex xs:flex-col gap-4 md:gap-8'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg'>
                  <img src={Vscode} alt='vscode' />
                </div>
                <span className='text-sub-title font-raleway font-semibold text-lg'>
                  VS Code
                </span>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg'>
                  <img src={Postman} alt='postman' />
                </div>
                <span className='text-sub-title font-raleway font-semibold text-lg'>
                  Postman
                </span>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg'>
                  <img src={Github} alt='github' />
                </div>
                <span className='text-sub-title font-raleway font-semibold text-lg'>
                  Github
                </span>
              </div>
            </div>
            <div className='flex xs:flex-col gap-4 md:gap-8'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg'>
                  <img src={Gitlab} alt='gitlab' />
                </div>
                <span className='text-sub-title font-raleway font-semibold text-lg'>
                  Gitlab
                </span>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-24 h-24 flex items-center justify-center bg-bg-tools bg-opacity-40 rounded-lg'>
                  <img src={Jira} alt='jira' />
                </div>
                <span className='text-sub-title font-raleway font-semibold text-lg'>
                  Jira
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
