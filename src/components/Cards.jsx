export default function Cards(){

    const cardsItems =[
        {icon: "💡", title:"Instant Server Start", 
            text:"On demand file serving over native ESM, no bundling required!"},
        {icon: "⚡", title:"Lightning Fast HMR", 
            text:"Hot Module Replacement (HMR) taht stays fast regardiess of app size."},
        {icon: "🛠", title:"Rich Features", 
            text:"Out-of-the-box support for TypeScript, JSX, CSS and more."},
        {icon: "📦", title:"Optimized Build",
             text:"Pre-configured Rollup build with multi-page and library mode support."},
        {icon: "🔩", title:"Universal Plugins", 
            text:"Rollup-superset plugin interface shared between dev and build."},
        {icon: "🔑", title:"Fully Typed APIs", text:"Flexible programmatic APIs with full TypeScript typing."}
    ]    
    
    return (
    <section id="cards">
        
        {cardsItems
         .map((item)=>{
          return(
            <div key={`card-item-${item.text}`} className="card-item">
            <span className="icon">{item.icon}</span>
            <span className="title">{item.title}</span>
            <span className="text">{item.text}</span></div> 
        )
    })}
    </section>
  )
}

    {/*return(
        <div id="cards">
        <div className="icons"></div>
        <h2 className="text"></h2>
        <p className="tagline"></p>
    </div>
    )}*/}