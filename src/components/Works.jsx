/* eslint-disable */
import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demoLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl   sm:w-[360px] w-full"
      >
        <div
          onClick={() => window.open(demoLink, "_blank")}
          className="relative w-full h-[230px]  cursor-pointer"
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        <motion.div variants={fadeIn("up", "spring", 6 * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full !min-h-[470px]"
          >
            <div
              onClick={() =>
                window.open("https://github.com/Aliozzaim", "_blank")
              }
              className="relative w-full h-[230px] cursor-pointer"
            >
              <img
                src={
                  "https://i.vimeocdn.com/video/56103338-2fd3666542743f00230d19581a3cce34b5e6f7d29f2da1feee57bd496f25ba4d-d_750x421.875?q=60"
                }
                alt="project_image"
                className="w-full h-full object-fit rounded-2xl"
              />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                {/* <div
                  onClick={() =>
                    window.open("https://github.com/Aliozzaim", "_blank")
                  }
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                ></div> */}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">
                Exciting New Project on the Horizon
              </h3>
              <p className="mt-2 text-secondary text-[14px]">
                I'm currently working on a new project. Stay tuned for updates!
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <p className="text-[14px] blue-text-gradient">#TypeScript</p>
              <p className="text-[14px] green-text-gradient">#Mongodb</p>
              <p className="text-[14px] pink-text-gradient">#Express.js</p>
            </div>
            <div className="relative w-full h-[38px] border-[3px] border-gray-300 rounded-full mt-[20px] overflow-hidden">
              <p className="absolute top-[-3px] left-0 w-full h-full flex items-center justify-center text-white font-bold text-[14px] ">
                Coming soon
              </p>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "90%" }}
                transition={{
                  duration: 13,
                  repeatType: "reverse",
                }}
                className="absolute top-0 left-0 w-[30%] h-[19%] mt-[27px] bg-green-500 rounded-full"
              ></motion.div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
