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
    image: "https://i.imgur.com/t4vv1lK.png",
    links: [
      {
        title: "Github",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
        link: "https://github.com/jonathanchowjh"
      },
      {
        title: "Linkedin",
        image: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
        link: "https://www.linkedin.com/in/jonathanchowjh/"
      },
      {
        title: "Medium",
        image: "https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png",
        link: "https://jonathanchowjh.medium.com/"
      },
      {
        title: "Resume",
        image: "https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo.png",
        link: "https://docs.google.com/document/d/1N9mFNqgqlAP_lTZZ0Hq-RqupDcxRvW7RdQmjouzszuc/edit?usp=sharing"
      }
    ]
  },
  projects: [
    {
      title: "Explorie NFT Platform",
      subtitle: "Incubated on the Cardstarter Accelerator, and Top 6 teams in Hack! Cardano 2021",
      image: "https://i.imgur.com/ZwmAX3M.jpg",
      tags: ["blockchain","nfts","plutus","react native"],
      link: "https://github.com/jonathanchowjh/explorie-nft-mobile"
    },
    {
      title: "Jiak Ordering Platform",
      subtitle: "Mobile hawker ordering platform using a MERN stack, hosted on AWS",
      image: "https://i.imgur.com/t8oeeVR.png",
      tags: ["react","express","aws"],
      link: "https://github.com/jonathanchowjh/smu-cs-projects/tree/main/206_software_product_management/platform_patron"
    },
    {
      title: "Language Translator",
      subtitle: "English to Spanish Language Translator using encoder decoder attention models",
      image: "https://avatars.githubusercontent.com/u/15658638?s=280&v=4",
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
      image: "https://hackcardano.cardstarter.io/wp-content/uploads/2021/07/hack-cardano-event-logo-white-min.png",
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
          image: "https://miro.medium.com/max/1200/0*yqbRInqX0ZRUlVS0"
        },
        {
          title: "Plutus",
          image: "https://cardano-universe.com/wp-content/uploads/2018/12/Capture-d%E2%80%99e%CC%81cran-2018-12-15-a%CC%80-17.29.31.png"
        },
        {
          title: "Polygon",
          image: "https://cryptologos.cc/logos/polygon-matic-logo.png"
        },
      ]
    },
    {
      title: "Data Science / Engineer",
      details: [
        {
          title: "Tensorflow",
          image: "https://avatars.githubusercontent.com/u/15658638?s=280&v=4"
        },
        {
          title: "Azure ETL ML",
          image: "https://parallax-systems.com/wp-content/uploads/2020/10/logo-microsoft-azure-square-1.png"
        }
      ]
    },
    {
      title: "Frontend Development",
      details: [
        {
          title: "React",
          image: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
        },
        {
          title: "Redux",
          image: "https://avatars.githubusercontent.com/u/20527600?v=4"
        },
        {
          title: "ReactNative",
          image: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
        },
        {
          title: "Razor Pages",
          image: "https://www.pulumi.com/logos/tech/dotnet.png"
        },
        {
          title: "Bootstrap",
          image: "https://i.stack.imgur.com/C9301.png"
        },
      ]
    },
    {
      title: "Backend Development",
      details: [
        {
          title: "NodeJS",
          image: "https://bryanmylee.github.io/skills/nodejs.svg"
        },
        {
          title: "ExpressJS",
          image: "https://bryanmylee.github.io/skills/express.png"
        },
        {
          title: "Spring",
          image: "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png"
        },
        {
          title: "ASP.NET",
          image: "https://www.pulumi.com/logos/tech/dotnet.png"
        },
        {
          title: "MySQL",
          image: "https://bryanmylee.github.io/skills/mysql.svg"
        },
        {
          title: "MongoDB",
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png"
        },
        {
          title: "AWS ec2 ebs s3",
          image: "https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png"
        }
      ]
    },
    {
      title: "Programming Languages",
      details: [
        {
          title: "Python",
          image: "https://bryanmylee.github.io/skills/python.svg"
        },
        {
          title: "Typescript",
          image: "https://bryanmylee.github.io/skills/typescript.svg"
        },
        {
          title: "Javascript",
          image: "https://bryanmylee.github.io/skills/javascript.svg"
        },
        {
          title: "Java",
          image: "https://bryanmylee.github.io/skills/java.svg"
        },
        {
          title: "C",
          image: "https://bryanmylee.github.io/skills/c.svg"
        },
        {
          title: "C#",
          image: "https://bryanmylee.github.io/skills/c.svg"
        },
        {
          title: "Haskell",
          image: "https://iconape.com/wp-content/files/hc/371044/svg/371044.svg"
        }
      ]
    }
  ],
  experiences: [
    {
      title: "DHL Express",
      subtitle: "Software Engineer Intern (Aug 2021 – Present)",
      title2: "Duties:",
      subtitle2: "Developed components in ASP.NET, for a new claims platform used by over 171 customer service agents.\n" +
      "Automated sql migration and pdf imaging, for the Credit and Debit Note system, validating 1000 notes daily.\n" +
      "Presented product walkthroughs and organised UA-Testing, by coordinating with 5 departments.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAADBCAMAAADxRlW1AAAAclBMVEX/zADUBRH/zgD/1ADRABL/0QD7uwP8vQHeRg7/2QDbMA/pegvtjQrZLBD/0wDofQz9xQPbOA/4tAX2qgbXHBDmawzhVQ3ymwj+xwDfTQ79wQHrgQvxlgjkYgz0oQfjXQ3odAv0pwftiAr4sQXnbwzdPg5AU+lEAAAED0lEQVR4nO3Y7XaqOhCAYcyH7VHM8QO70UprdXv/t3iAQGvNBJF1VumP9/m39zQYhiFMkiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA6GxPSvUbfDckXfyH7jXKpf/KXr85pZulDiYrDJ43yXKHMFT9v1Jz4bekDP8g+2Z6Wx2sujv44FNlP8JQWoX0VrjyZtwsqKfJA8xibbsHm7/ah5ZhqKhC7mDCyMmNcvOf92EXj2ShnPDGXg2eBfGVrxZlV0FoVi0saiok4UWPloCaLsJJ3bH/LF79Hg5e+mhZ9uJApYSsZ+K6+3Ok8rzDbF18sHnzleL+REJS4sx65EVh/XASSs2TEwabY7MohGXvQy4VknAYeVFIsgFJMFP/5qtw8MXfj1T2dUidhSQUIy8KdjekFJoC1i/h4LzsrEpS2efVopALWZ/ZkVuFxOr7wseXVNN2r+GdptN17RS+D/WXRT8LSd2PnYQvyt3efPuu6vnNLZmiClmhtiefPVAQeK3GaCFx7XL6GwgtTtZ0gG+3M898bQtPNcrsqle/bCbDyHHkReFaWKpmVxdDmB6/KjiptqOy6h0SMl2umb+nEsKqb554+fwut0lI69o+PrKs1omTmkm/Zv4SYdVPzLl+SPrv7aLwruUBXUnwibu91OR7Nz42ad/jdzcqXBTqrcBjGzCfuLCZbNbM30Eo1XZ3ozaX1TezumGyxeW5v12duFwYUvxYElS3RCzVrA0H/YSqLxl+VhtCu+GcHyO1IrEpxSc7MAn5tJMS91Orab4U7P0l98FV1u2vxUK2exbXyiZKRULDs9B9kDS3aiq+y6JZ/ZyewmjhF7lyDxXYVqFyh9nbWrl5JDS4y1Qf2SxqUWhxux+xqNsl4VTm7h5KzLTI/HHqHJlythz8Tth/4souWdr3RPhJSKcy7cFKbA+lwhOpWBK2OrEuNt/BSVDr4zzmKG/3I/Ob1Q2OMKD96EdDNtxcxayssvH5Dm6xutaF1Erb/UgS3uv9r3Sw8tp8VcNrNSF323/G7ZUt4hMevi5MT2nEwfU+ZDGTg/9GCgN2zaKQhKN2Pj9u1zMH5sOqfXS+6Wl4uy1+pyvWJrrfIYuZbPOm6MODlXqjJN9qG1KbfhVn5lrZrhOP4Un4yBaibK+kc5Jwaiab711zp+EAc46HPs9U3dukTx6enVIXebZ+yoO/EdF14WDvtBKVst7nZ9vkoMyosLa46M+kX/2xTQ7vWaQJ+fqxXNmXzr8Yvi7k0yeRLRu9638HPV9pmmt3dSj4fUB7GR8Sf+FqGtZpafi16q2PTLaZ4sAcJPF9REco2rl3/EGPrr/Pjz0yGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/9x+kgFLlbdB74wAAAABJRU5ErkJggg==",
      tags: ["ASP.NET","SQL","Python"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    },
    {
      title: "KPIM",
      subtitle: "Data Engineer Intern (May 2021 – Aug 2021)",
      title2: "Duties:",
      subtitle2: "Built multi-sink ETL dataflows on Azure Cloud and automated the pooling of data for PowerBI visualisations.\n" +
      "Researched optimal NLP techniques for geospace classifications, improved prediction accuracy to 83%.",
      image: "https://kpim.vn/wp-content/uploads/2020/12/KPIM-w250.png",
      tags: ["Azure ETL","Tensorflow","NLP"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    },
    {
      title: "Road to Sangam",
      subtitle: "Lead Developer, Co-Founder (Jun 2019 – Nov 2019)",
      title2: "Duties:",
      subtitle2: "Led a development team of 5, to build an e-commerce marketplace that hosted 86 artists and 200 art pieces.\n" +
      "Created over 50 tables of NoSQL data, by coordinating business, design, and logistics requirements.",
      image: "https://media-exp1.licdn.com/dms/image/C5103AQFRADUqxGrkCA/profile-displayphoto-shrink_200_200/0/1552320083135?e=1639008000&v=beta&t=H2AefsB_csrQI8vK3dr8xyYVMUisTbV0JJZaHPuaFgs",
      tags: ["Product Management","SQL","AWS"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    },
    {
      title: "Xen Capital",
      subtitle: "Frontend Developer (​Apr 2019 – Aug 2019)",
      title2: "Duties:",
      subtitle2: "Developed client onboarding flow and landing pages in React, with passport verification and css animation.\n" +
      "Standardized front-end components in React and NPM, including pagination, dropdowns, and styles.",
      image: "https://media-exp1.licdn.com/dms/image/C510BAQEjMU8-z7OH6Q/company-logo_200_200/0/1537263110453?e=2159024400&v=beta&t=jh4kLKy_VonuYRq5OD5V7-CZCexZg0ayzGHdURcCNz4",
      tags: ["React","Express"],
      link: "https://www.linkedin.com/in/jonathanchowjh/"
    }
  ],
  contact: [
    {
      title: "hartonot.2019@scis.smu.edu.sg",
      image: "https://api.softwarekeep.com/media/nimbus/helpcenter/Outlook_Logo.png",
    },
    {
      title: "+65 93857577",
      image: "https://www.internetmatters.org/wp-content/uploads/2019/11/mobile-phone-icon.png",
    }
  ]
}
