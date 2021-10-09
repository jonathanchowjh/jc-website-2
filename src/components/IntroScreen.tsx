import React from "react"
import {
  CardHorizontal, Title, CardHorizontalList, Spacer, TitleSmall, BadgeIconList, CardHorizontalListFullWidth, TypingDiv
} from "../common/Elements"

const IntroScreen = () => {
  const [content, setContent] = React.useState(initState)
  return (
    <div className="">
      <Spacer cssClass="m-5" />
      {/*CARD PROFILE*/}
      <CardHorizontal
        css={{ maxHeight: "17em" }}
        cssClass="bg-black-2 primary-light-1"
        cssClassTitle="pt-3 size-4 primary-highlight-1"
        title={content.profile.title}
        subtitle={content.profile.subtitle}
        tags={content.profile.tags}
        image={content.profile.image}
      />
      <TypingDiv />
      <BadgeIconList
        list={content.profile.links}
      />
      <BadgeIconList
        list={content.contact}
      />
      

      <Spacer css={{ height: 20 }} />
      <Title title="Projects" id="projects" />
      <Spacer css={{ height: 20 }} />
      <CardHorizontalList
        list={content.projects}
      />

      <Spacer css={{ height: 20 }} />
      <Title title="Competitions" />
      <Spacer css={{ height: 20 }} />
      <CardHorizontalListFullWidth
        list={content.competitions}
      />

      <Spacer css={{ height: 20 }} />
      <Title title="Skills" id="skills" />
      <Spacer css={{ height: 20 }} />
      {
        content.skills.map((ele, idx) => {
          return (
            <>
            <TitleSmall title={ele.title} />
            <BadgeIconList
              list={ele.details}
            />
            <Spacer />
            </>
          )
        })
      }

      <Spacer css={{ height: 20 }} />
      <Title title="Experiences" id="experiences" />
      <Spacer css={{ height: 20 }} />
      <CardHorizontalListFullWidth
        list={content.experiences}
        cssClassImageSize="col-sm-3 d-none d-sm-block"
        cssClassBodySize="col-sm-9"
      />

      <Spacer css={{ height: 20 }} />
      <Title title="Contact" id="contact" />
      <Spacer css={{ height: 20 }} />
      <BadgeIconList
        list={content.profile.links}
      />
      <BadgeIconList
        list={content.contact}
      />
      <Spacer css={{ height: 50 }} />
    </div>
  )
}

export default IntroScreen

const initState = {
  profile: {
    title: "Jonathan Chow",
    subtitle: "A computing student with a passion for software development",
    tags: ["Blockchain Enthusiast","React Enthusiast","Com Science Student"],
    image: "/images/profile.png",
    links: [
      {
        title: "Github",
        image: "/images/github.png",
        link: "https://github.com/jonathanchowjh"
      },
      {
        title: "Linkedin",
        image: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/jonathanchowjh/"
      },
      {
        title: "Medium",
        image: "/images/medium.png",
        link: "https://jonathanchowjh.medium.com/"
      },
      {
        title: "Resume",
        image: "/images/google-docs.png",
        link: "https://docs.google.com/document/d/1N9mFNqgqlAP_lTZZ0Hq-RqupDcxRvW7RdQmjouzszuc/edit?usp=sharing"
      }
    ]
  },
  projects: [
    {
      title: "Explorie NFT Platform",
      subtitle: "Incubated on the Cardstarter Accelerator, and Top 6 teams in Hack! Cardano 2021",
      image: "/images/explorie.jpeg",
      tags: ["blockchain","nfts","plutus","react native"],
      link: "https://github.com/jonathanchowjh/explorie-nft-mobile"
    },
    {
      title: "Jiak Ordering Platform",
      subtitle: "Mobile hawker ordering platform using a MERN stack, hosted on AWS",
      image: "/images/jiak.png",
      tags: ["react","express","aws"],
      link: "https://github.com/jonathanchowjh/smu-cs-projects/tree/main/206_software_product_management/platform_patron"
    },
    {
      title: "Language Translator",
      subtitle: "English to Spanish Language Translator using encoder decoder attention models",
      image: "/images/tensorflow.png",
      tags: ["tensorflow","nlp"],
      link: "https://colab.research.google.com/drive/1Wm2CTEVO61t4OgnvxFmy93fMwYWaPH5Y?usp=sharing"
    }
  ],
  competitions: [
    {
      title: "Hack! Cardano",
      subtitle: "Cardano hackathon event to gain exclusive access to the Cardstarter Accelerator Program.",
      title2: "Finalist, Incubated: Explorie NFT Platform",
      subtitle2: "An NFT platform connecting brands to people through NFT vouchers and collectables.\n" +
      "By using geo-tagged NFTs, we encourage ‘Pokemon Go’ inspired exploration of neighbourhoods and streets.",
      image: "/images/hack-cardano.png",
      tags: ["blockchain","plutus","cardano"],
      link: "https://github.com/jonathanchowjh/explorie-nft-mobile"
    }
  ],
  skills: [
    {
      title: "Blockchain Development",
      details: [
        {
          title: "Solidity",
          image: "/images/solidity.png"
        },
        {
          title: "Plutus",
          image: "/images/plutus.png"
        },
        {
          title: "Polygon",
          image: "/images/polygon.png"
        },
      ]
    },
    {
      title: "Data Science / Engineer",
      details: [
        {
          title: "Tensorflow",
          image: "/images/tensorflow.png"
        },
        {
          title: "Azure ETL ML",
          image: "/images/azure.png"
        }
      ]
    },
    {
      title: "Frontend Development",
      details: [
        {
          title: "React",
          image: "/images/react.png"
        },
        {
          title: "Redux",
          image: "/images/redux.png"
        },
        {
          title: "ReactNative",
          image: "/images/react.png"
        },
        {
          title: "Razor Pages",
          image: "/images/dotnet.png"
        },
        {
          title: "Bootstrap",
          image: "/images/bootstrap.png"
        },
      ]
    },
    {
      title: "Backend Development",
      details: [
        {
          title: "NodeJS",
          image: "/images/nodejs.svg"
        },
        {
          title: "ExpressJS",
          image: "/images/express.png"
        },
        {
          title: "Spring",
          image: "/images/spring.png"
        },
        {
          title: "ASP.NET",
          image: "/images/dotnet.png"
        },
        {
          title: "MySQL",
          image: "/images/mysql.svg"
        },
        {
          title: "MongoDB",
          image: "/images/mongo.png"
        },
        {
          title: "AWS ec2 ebs s3",
          image: "/images/aws.png"
        }
      ]
    },
    {
      title: "Programming Languages",
      details: [
        {
          title: "Python",
          image: "/images/python.svg"
        },
        {
          title: "Typescript",
          image: "/images/typescript.svg"
        },
        {
          title: "Javascript",
          image: "/images/javascript.svg"
        },
        {
          title: "Java",
          image: "/images/java.svg"
        },
        {
          title: "C",
          image: "/images/c.svg"
        },
        {
          title: "C#",
          image: "/images/c.svg"
        },
        {
          title: "Haskell",
          image: "/images/haskell.svg"
        }
      ]
    }
  ],
  experiences: [
    {
      title: "DHL Express",
      subtitle: "Software Engineer Intern (Aug 2021 – Present)",
      title2: "Scope of Work:",
      subtitle2: "Developed components in ASP.NET, for a new claims platform used by over 171 customer service agents.\n" +
      "Automated sql migration and pdf imaging, for the Credit and Debit Note system, validating 1000 notes daily.\n" +
      "Presented product walkthroughs and organised UA-Testing, by coordinating with 5 departments.",
      image: "/images/dhl.png",
      tags: ["ASP.NET","SQL","Python"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    },
    {
      title: "KPIM",
      subtitle: "Data Engineer Intern (May 2021 – Aug 2021)",
      title2: "Scope of Work:",
      subtitle2: "Built multi-sink ETL dataflows on Azure Cloud and automated the pooling of data for PowerBI visualisations.\n" +
      "Researched optimal NLP techniques for geospace classifications, improved prediction accuracy to 83%.",
      image: "/images/kpim.png",
      tags: ["Azure ETL","Tensorflow","NLP"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    },
    {
      title: "Road to Sangam",
      subtitle: "Lead Developer, Co-Founder (Jun 2019 – Nov 2019)",
      title2: "Scope of Work:",
      subtitle2: "Led a development team of 5, to build an e-commerce marketplace that hosted 86 artists and 200 art pieces.\n" +
      "Created over 50 tables of NoSQL data, by coordinating business, design, and logistics requirements.",
      image: "/images/road-to-sangam.png",
      tags: ["Product Management","SQL","AWS"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    },
    {
      title: "Xen Capital",
      subtitle: "Frontend Developer (​Apr 2019 – Aug 2019)",
      title2: "Scope of Work:",
      subtitle2: "Developed client onboarding flow and landing pages in React, with passport verification and css animation.\n" +
      "Standardized front-end components in React and NPM, including pagination, dropdowns, and styles.",
      image: "/images/xen.png",
      tags: ["React","Express"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    }
  ],
  contact: [
    {
      title: "hartonot.2019@scis.smu.edu.sg",
      image: "/images/outlook.png",
    },
    {
      title: "+65 93857577",
      image: "/images/phone.png",
    }
  ]
}
