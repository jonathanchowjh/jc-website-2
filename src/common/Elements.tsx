import React from "react"

export const Spacer = (props: {
  css?: { [key: string]: any };
  cssClass?: string;
}) => {
  return <div className={`${props.cssClass ? props.cssClass : ""}`} style={{ height: "10px", ...props.css }} />
}

export const Title = (props: {
  title: string;
  css?: { [key: string]: any };
  id?: string;
}) => {
  return (
    <div
      className={`size-4 weight-4 primary-highlight-1 text-center`}
      style={{ ...props.css }}
      id={props.id ? props.id : undefined}
    >
      {props.title}
    </div>
  )
}

export const TitleSmall = (props: {
  title: string;
  css?: { [key: string]: any };
}) => {
  return (
    <div
      className={`size-2 weight-3 primary-highlight-2 text-center`}
      style={{ ...props.css }}
    >
      {props.title}
    </div>
  )
}


export const CardHorizontal = (props: {
  title?: string;
  subtitle?: string;
  title2?: string;
  subtitle2?: string;
  tags?: string[];
  image?: string;
  tagType?: string;
  css?: { [key: string]: any };
  cssClass?: string;
  cssClassTag?: string;
  cssClassTitle?: string;
  cssClassSubtitle?: string;
  cssClassImageSize?: string; // make sure to put valid bootstrap (dangerous) eg. col-sm-4 d-none d-sm-block
  cssClassBodySize?: string; // make sure to put valid bootstrap (dangerous) eg. col-sm-8
  cssClassCardBody?: string; // make sure to put valid bootstrap (dangerous) eg. col-sm-4 d-none d-sm-block
  onClick?: () => void;
}) => {
  return (
    <div
      className={`card mb-3 p-3 ${props.cssClass ? props.cssClass : ""}`}
      style={{ ...props.css }}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      <div className="row g-0 overflow-hidden">
        <div className={`overflow-hidden vert-center ${props.cssClassImageSize ? props.cssClassImageSize : "col-sm-4 d-none d-sm-block"}`}>
          <img src={props.image ? props.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}
            className="img-fluid rounded float-left" alt="..."
          />
        </div>
        <div className={`overflow-hidden ${props.cssClassBodySize ? props.cssClassBodySize : "col-sm-8"}`}>
          <div className={`card-body ${props.cssClassCardBody ? props.cssClassCardBody : "p-0 px-3"}`}>
            <h5 className={`card-title weight-4 primary-light-1 ${props.cssClassTitle ? props.cssClassTitle : ""}`}>
              {props.title ? props.title : "title"}
            </h5>
            <p className={`card-text size-n1 primary-light-2 preline ${props.cssClassSubtitle ? props.cssClassSubtitle : ""}`}>{props.subtitle ? props.subtitle : "subtitle"}</p>
            {
              props.title2 ? (
                <>
                  <h5 className={`card-title mt-2 weight-3 primary-highlight-2 ${props.cssClassTitle ? props.cssClassTitle : ""}`}>
                    {props.title2 ? props.title2 : "title2"}
                  </h5>
                  <ul className={`size-n1 primary-light-2 ${props.cssClassSubtitle ? props.cssClassSubtitle : ""}`}>
                    {props.subtitle2 ? props.subtitle2.split("\n").map((ele, idx) => {
                      return (
                        <li>{ele}</li>
                      )
                    }) : <></>}
                  </ul>
                </>
              ) : <></>
            }
            {
              props.tagType != "bottom" ? (
                <div className={`pt-2 d-flex flex-row flex-wrap ${props.cssClassTag ? props.cssClassTag : ""}`}>
                  {
                    props.tags ? props.tags.map((tag, idx) => {
                      return (
                        <>
                          <p className="card-text mb-1 p-1 rounded size-n2 weight-3 text-nowrap bg-primary-dark-2 primary-light-2 border border-dark">
                            {tag}
                          </p>
                          <Spacer css={{ width: "0.2em"}} />
                        </>
                      )
                    }) : <></>
                  }
                </div>
              ) : <></>
            }
          </div>
        </div>
      </div>
      {
        props.tagType == "bottom" ? (
          <div className={`mt-auto pt-2 d-flex flex-row flex-wrap ${props.cssClassTag ? props.cssClassTag : ""}`}>
            {
              props.tags ? props.tags.map((tag, idx) => {
                return (
                  <>
                    <p className="card-text mb-1 p-1 rounded size-n2 weight-3 text-nowrap bg-primary-dark-2 primary-light-2 border border-dark">
                      {tag}
                    </p>
                    <Spacer css={{ width: "0.2em"}} />
                  </>
                )
              }) : <></>
            }
          </div>
        ) : <></>
      }
    </div>
  )
}

export const CardHorizontalList = (props: {
  list: Array<{
    title?: string;
    subtitle?: string;
    title2?: string;
    subtitle2?: string;
    image?: string;
    tags?: string[];
    link?: string
  }>
}) => {
  return (
    <div>
      {
        props.list ? props.list.reduce((accumulator, currentValue, currentIndex, array) => {
            if (currentIndex % 2 === 0)
              accumulator.push(array.slice(currentIndex, currentIndex + 2));
            return accumulator;
          }, [] as Array<Array<{
              title?: string;
              subtitle?: string;
              title2?: string;
              subtitle2?: string;
              image?: string;
              tags?: string[];
              link?: string
            }>>).map((listRow, idx) => {
          if (listRow.length === 0) return <></>
          return (
            <div className="d-flex flex-sm-row flex-column bg-transparent">
              <CardHorizontal
                cssClass="bg-primary-dark-2 border-0 bg-active"
                cssClassTitle="mb-0"
                cssClassSubtitle="mb-0"
                cssClassImageSize="col-md-3 d-none d-md-block"
                cssClassBodySize="col-md-9"
                cssClassCardBody="p-0 px-md-3"
                tagType="bottom"
                css={{ flex: 1 }}
                title={listRow[0].title ? listRow[0].title : "List Title"}
                subtitle={listRow[0].subtitle ? listRow[0].subtitle : "List Title"}
                title2={listRow[0].title2 ? listRow[0].title2 : undefined}
                subtitle2={listRow[0].subtitle2 ? listRow[0].subtitle2 : undefined}
                image={listRow[0].image ? listRow[0].image : "List Title"}
                tags={listRow[0].tags ? listRow[0].tags : []}
                onClick={listRow[0].link ? () => window.open(listRow[0].link, '_blank') : () => {}}
              />
              <div style={{ flex: 0.05 }} />
              {
                listRow.length >= 2 ? (
                  <CardHorizontal
                    cssClass="bg-primary-dark-2 border-0 bg-active"
                    cssClassTitle="mb-0"
                    cssClassSubtitle="mb-0"
                    cssClassImageSize="col-md-3 d-none d-md-block"
                    cssClassBodySize="col-md-9"
                    cssClassCardBody="p-0 px-md-3"
                    tagType="bottom"
                    css={{ flex: 1 }}
                    title={listRow[1].title ? listRow[1].title : "List Title"}
                    subtitle={listRow[1].subtitle ? listRow[1].subtitle : "List Title"}
                    title2={listRow[0].title2 ? listRow[0].title2 : undefined}
                    subtitle2={listRow[0].subtitle2 ? listRow[0].subtitle2 : undefined}
                    image={listRow[1].image ? listRow[1].image : "List Title"}
                    tags={listRow[1].tags ? listRow[1].tags : []}
                    onClick={listRow[1].link ? () => window.open(listRow[1].link, '_blank') : () => {}}
                  />
                ) : <div className="p-3" style={{ flex: 1 }} />
              }
            </div>
          )
        }) : <></>
      }
    </div>
  )
}

export const CardHorizontalListFullWidth = (props: {
  list: Array<{
    title?: string;
    subtitle?: string;
    title2?: string;
    subtitle2?: string;
    image?: string;
    tags?: string[];
    link?: string
  }>;
  cssClass?: string;
  cssClassTitle?: string;
  cssClassSubtitle?: string;
  cssClassImageSize?: string;
  cssClassBodySize?: string;
}) => {
  return (
    <div>
      {
        props.list ? props.list.map((listItem, idx) => {
          return (
            <div className="bg-transparent">
              <CardHorizontal
                cssClass={props.cssClass ? props.cssClass : "bg-primary-dark-1 border-0 bg-active"}
                cssClassTitle={props.cssClassTitle ? props.cssClassTitle : "mb-0"}
                cssClassSubtitle={props.cssClassSubtitle ? props.cssClassSubtitle : "mb-0"}
                cssClassImageSize={props.cssClassImageSize ? props.cssClassImageSize :"col-sm-3"}
                cssClassBodySize={props.cssClassBodySize ? props.cssClassBodySize :"col-sm-9"}
                cssClassCardBody="p-0 px-sm-3"
                css={{ flex: 1 }}
                title={listItem.title ? listItem.title : "List Title"}
                subtitle={listItem.subtitle ? listItem.subtitle : "List Title"}
                title2={listItem.title2 ? listItem.title2 : undefined}
                subtitle2={listItem.subtitle2 ? listItem.subtitle2 : undefined}
                image={listItem.image ? listItem.image : "List Title"}
                tags={listItem.tags ? listItem.tags : []}
                onClick={listItem.link ? () => window.open(listItem.link, '_blank') : () => {}}
              />
            </div>
          )
        }) : <></>
      }
    </div>
  )
}


export const BadgeIcon = (props: {
  title?: string;
  image?: string;
  link?: string;
}) => {
  return (
    <div
      className={`d-flex flex-row bg-primary-dark-2 rounded p-2 m-2 ${props.link ? "bg-active" : ""}`}
      onClick={props.link ? () => window.open(props.link, '_blank') : () => {}}
    >
      <img className="bg-transparent border-0 rounded" style={{ height: "2.5em", width: "2.5em", objectFit : "contain" }}
        src={props.image ? props.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}
      />
      <span className="mx-2 weight-3 vert-center grey-1"><span className="">{props.title ? props.title : "TITLE"}</span></span>
      
    </div>
  )
}

export const BadgeIconList = (props: {
  list?: Array<{
    title?: string;
    image?: string;
    link?: string;
  }>;
}) => {
  return (
    <div className="d-flex flex-row justify-content-center flex-wrap">
      {
        props.list ? props.list.map((ele, idx) => {
          return (
            <BadgeIcon
              title={ele.title ? ele.title : undefined}
              image={ele.image ? ele.image : undefined}
              link={ele.link ? ele.link : undefined}
            />
          )
        }) : <></>
      }
    </div>
  )
}

export const TypingDiv = (props: {

}) => {
  return (
    <div className="typing-wrapper">
      <div className="typing-static-txt d-none d-md-block">I'm a</div>
      <ul className="typing-dynamic-txts text-nowrap">
        <li><span>Coder</span></li>
        <li><span>Developer</span></li>
        <li><span>Blockchain Dev</span></li>
        <li><span>Data Eng</span></li>
      </ul>
    </div>
  )
}

